// 問い合わせフォームの内容を、Notion CRM(取引先DB・担当者DB)へ登録する。
// サーバー側(API Route)からのみ呼ぶこと。トークンは環境変数で持ち、ブラウザには出さない。
//
// 必要な環境変数:
//   NOTION_API_TOKEN              ... Notion Integrationのトークン(取引先DB・担当者DBに共有済みのもの)
//   NOTION_ACCOUNTS_DATA_SOURCE_ID ... 取引先DBのデータソースID(省略時は既定値)
//   NOTION_CONTACTS_DATA_SOURCE_ID ... 担当者DBのデータソースID(省略時は既定値)

import { INQUIRY_TYPES } from "@/lib/constants";

const NOTION_API_BASE = "https://api.notion.com/v1";
// 親の指定にdata_source_idを使うバージョン。
const NOTION_VERSION = "2025-09-03";

const DEFAULT_ACCOUNTS_DATA_SOURCE_ID = "fec6317b-8037-4711-8857-152502c3f293";
const DEFAULT_CONTACTS_DATA_SOURCE_ID = "2a7ea9d2-933c-4f69-8abe-b6788f020654";

// Notionの選択肢は、既存の値と完全に一致させる(一致しないと新しい選択肢が増える)。
const ACCOUNT_STATUS_LEAD = "リード";
const ACCOUNT_STATUS_CARD_ONLY = "名刺のみ";
const ACCOUNT_SOURCE = "問合せ";
const ACCOUNT_OWNER = "Kyohei Minamiguchi";
const RELATION_OEM = "OEM";
const CONTACT_METHOD_EMAIL = "メール";

// フォームの業種(value) → 取引先DBの「業態」。対応が無いものは空にする。
const BUSINESS_TYPE_MAP = {
  restaurant: "飲食店",
  hotel: "ホテル",
  retail: "小売",
};

const RICH_TEXT_LIMIT = 2000;
const NEEDS_MEMO_LIMIT = 2000;
const MEMO_SUMMARY_LIMIT = 100;

class NotionError extends Error {
  constructor(status, code) {
    // 個人情報を含まないよう、ステータスとコードだけを保持する。
    super(`Notion API error (status=${status}, code=${code ?? "unknown"})`);
    this.name = "NotionError";
    this.status = status;
  }
}

function toJstDate(date) {
  const parts = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const pick = (type) => parts.find((part) => part.type === type)?.value;
  return `${pick("year")}/${pick("month")}/${pick("day")}`;
}

function richText(text) {
  const content = text ?? "";
  const chunks = [];
  for (let i = 0; i < content.length; i += RICH_TEXT_LIMIT) {
    chunks.push({ type: "text", text: { content: content.slice(i, i + RICH_TEXT_LIMIT) } });
  }
  return chunks;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 速度制限(429)・サーバー側の一時エラー(5xx)のときは、少し待って1回だけ再試行する。
async function notionRequest(method, path, body) {
  const token = process.env.NOTION_API_TOKEN;
  if (!token) {
    throw new Error("NOTION_API_TOKEN is not set");
  }

  for (let attempt = 0; attempt < 2; attempt += 1) {
    const res = await fetch(`${NOTION_API_BASE}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (res.ok) {
      return res.json();
    }

    const retryable = res.status === 429 || res.status >= 500;
    if (retryable && attempt === 0) {
      const retryAfter = Number(res.headers.get("retry-after"));
      await sleep(Number.isFinite(retryAfter) && retryAfter > 0 ? Math.min(retryAfter, 5) * 1000 : 1000);
      continue;
    }

    const errorBody = await res.json().catch(() => ({}));
    throw new NotionError(res.status, errorBody?.code);
  }

  throw new NotionError(0, "retry_exhausted");
}

function inquiryLabelFor(value) {
  return INQUIRY_TYPES.find((type) => type.value === value)?.label ?? value ?? "未選択";
}

function buildAccountProperties(data, receivedDate) {
  const name = data.contactName.toString().trim();
  const company = data.companyName?.toString().trim();
  const phone = data.phone?.toString().trim();
  const message = data.message?.toString().trim() ?? "";
  const inquiryLabel = inquiryLabelFor(data.inquiryType);

  const needsMemo =
    `Webサイトの問い合わせ（${inquiryLabel}）経由（${receivedDate}）。` +
    (message ? `\n${message.slice(0, NEEDS_MEMO_LIMIT)}` : "");

  const properties = {
    店名: { title: richText(company || `${name}（個人）`) },
    // 「その他」の問い合わせは売り込みが混ざるため「名刺のみ」で登録し、後から振り分ける。
    区分: { select: { name: data.inquiryType === "other" ? ACCOUNT_STATUS_CARD_ONLY : ACCOUNT_STATUS_LEAD } },
    経路: { select: { name: ACCOUNT_SOURCE } },
    担当: { select: { name: ACCOUNT_OWNER } },
    関係種別: { multi_select: data.inquiryType === "oem" ? [{ name: RELATION_OEM }] : [] },
    "ニーズ・メモ": { rich_text: richText(needsMemo) },
  };

  const businessType = BUSINESS_TYPE_MAP[data.businessType];
  if (businessType) {
    properties.業態 = { select: { name: businessType } };
  }
  if (phone) {
    properties.電話番号 = { phone_number: phone };
  }
  return properties;
}

function buildContactProperties(data, receivedDate, accountPageId) {
  const phone = data.phone?.toString().trim();
  const properties = {
    氏名: { title: richText(data.contactName.toString().trim()) },
    所属: { relation: [{ id: accountPageId }] },
    メール: { email: data.email.toString().trim() },
    連絡手段: { multi_select: [{ name: CONTACT_METHOD_EMAIL }] },
    メモ: { rich_text: richText(`Webサイト問い合わせより（${receivedDate}）`) },
  };
  if (phone) {
    properties.電話 = { phone_number: phone };
  }
  return properties;
}

// 既存の担当者のメモに、問い合わせ日と内容の要点を追記する(新規登録はしない)。
async function appendToExistingContact(page, data, receivedDate) {
  const current = (page.properties?.メモ?.rich_text ?? []).map((item) => item.plain_text ?? "").join("");
  const summary = (data.message?.toString().trim() ?? "").replace(/\s+/g, " ").slice(0, MEMO_SUMMARY_LIMIT);
  const line =
    `Webサイト問い合わせ（${receivedDate}）：${inquiryLabelFor(data.inquiryType)}` + (summary ? `／${summary}` : "");

  await notionRequest("PATCH", `/pages/${page.id}`, {
    properties: { メモ: { rich_text: richText(current ? `${current}\n${line}` : line) } },
  });
}

/**
 * 問い合わせ1件をCRMへ登録する。失敗したら例外を投げる(呼び出し側で通知する)。
 * @returns {Promise<"created" | "appended">}
 */
export async function registerInquiryToCrm(data, receivedAt = new Date()) {
  const accountsId = process.env.NOTION_ACCOUNTS_DATA_SOURCE_ID || DEFAULT_ACCOUNTS_DATA_SOURCE_ID;
  const contactsId = process.env.NOTION_CONTACTS_DATA_SOURCE_ID || DEFAULT_CONTACTS_DATA_SOURCE_ID;
  const receivedDate = toJstDate(receivedAt);
  const email = data.email.toString().trim();

  const found = await notionRequest("POST", `/data_sources/${contactsId}/query`, {
    filter: { property: "メール", email: { equals: email } },
    page_size: 1,
  });

  if (found.results?.length > 0) {
    await appendToExistingContact(found.results[0], data, receivedDate);
    return "appended";
  }

  const account = await notionRequest("POST", "/pages", {
    parent: { type: "data_source_id", data_source_id: accountsId },
    properties: buildAccountProperties(data, receivedDate),
  });

  await notionRequest("POST", "/pages", {
    parent: { type: "data_source_id", data_source_id: contactsId },
    properties: buildContactProperties(data, receivedDate, account.id),
  });
  return "created";
}
