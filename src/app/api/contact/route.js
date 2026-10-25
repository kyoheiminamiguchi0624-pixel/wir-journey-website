import { NextResponse } from "next/server";
import { Resend } from "resend";
import { INQUIRY_TYPES, BUSINESS_TYPES } from "@/lib/constants";

// docs/handoff/pages/Contact.dc.html準拠。お名前・会社名・店舗名・メールアドレスのみ必須(*付き)。
const REQUIRED_FIELDS = ["contactName", "companyName", "email"];

const NOTIFICATION_FROM = "Wir Journey <info@wirjourney.com>";
const NOTIFICATION_TO = ["kyohei.minamiguchi0624@gmail.com", "hobbyworks.0426@gmail.com"];

function labelFor(options, value) {
  return options.find((option) => option.value === value)?.label || value || "未選択";
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailContent(data) {
  const inquiryLabel = labelFor(INQUIRY_TYPES, data.inquiryType);
  const businessLabel = labelFor(BUSINESS_TYPES, data.businessType);
  const phone = data.phone?.toString().trim() || "未入力";
  const message = data.message?.toString().trim() || "未入力";

  const rows = [
    ["お問い合わせ内容", inquiryLabel],
    ["お名前", data.contactName],
    ["会社名・店舗名", data.companyName],
    ["メールアドレス", data.email],
    ["電話番号", phone],
    ["業種", businessLabel],
  ];

  const text = [
    "Wir Journey サイトからお問い合わせがありました。",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "ご相談内容:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: sans-serif; line-height: 1.7; color: #222;">
      <p>Wir Journey サイトからお問い合わせがありました。</p>
      <table style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <th style="text-align: left; padding: 4px 12px 4px 0; white-space: nowrap; vertical-align: top;">${escapeHtml(label)}</th>
            <td style="padding: 4px 0;">${escapeHtml(value)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="margin-top: 16px;"><strong>ご相談内容</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  return { text, html, subject: `【Wir Journey】お問い合わせ（${inquiryLabel}）` };
}

function buildSlackMessage(data) {
  const inquiryLabel = labelFor(INQUIRY_TYPES, data.inquiryType);
  const businessLabel = labelFor(BUSINESS_TYPES, data.businessType);
  const phone = data.phone?.toString().trim() || "未入力";
  const message = data.message?.toString().trim() || "未入力";

  const text = [
    "📩 新しいお問い合わせ",
    "",
    "*お問い合わせ内容：*",
    inquiryLabel,
    "",
    "*会社・店舗名：*",
    data.companyName,
    "",
    "*お名前：*",
    data.contactName,
    "",
    "*メールアドレス：*",
    data.email,
    "",
    "*電話番号：*",
    phone,
    "",
    "*業種：*",
    businessLabel,
    "",
    "*ご相談内容：*",
    message,
  ].join("\n");

  return { text };
}

async function sendSlackNotification(data) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("SLACK_WEBHOOK_URL is not set");
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildSlackMessage(data)),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Slack webhook responded with ${res.status}: ${body}`);
  }
}

function buildAutoReplyContent(data) {
  const inquiryLabel = labelFor(INQUIRY_TYPES, data.inquiryType);
  const businessLabel = labelFor(BUSINESS_TYPES, data.businessType);
  const phone = data.phone?.toString().trim() || "未入力";
  const message = data.message?.toString().trim() || "未入力";

  const text = [
    `${data.contactName}様`,
    "",
    "この度はWir Journeyへお問い合わせいただき、",
    "誠にありがとうございます。",
    "",
    "以下の内容でお問い合わせを受け付けました。",
    "",
    "──────────────────",
    "",
    "お問い合わせ内容：",
    inquiryLabel,
    "",
    "お名前：",
    `${data.contactName}様`,
    "",
    "会社名・店舗名：",
    data.companyName,
    "",
    "メールアドレス：",
    data.email,
    "",
    "電話番号：",
    phone,
    "",
    "業種：",
    businessLabel,
    "",
    "ご相談内容：",
    message,
    "",
    "──────────────────",
    "",
    "内容を確認のうえ、担当者よりご連絡いたします。",
    "",
    "なお、お問い合わせ内容によっては、",
    "ご回答までお時間をいただく場合がございます。",
    "",
    "今後ともWir Journeyをよろしくお願いいたします。",
    "",
    "──────────────────",
    "Wir Journey",
    "https://www.wirjourney.com",
    "info@wirjourney.com",
    "──────────────────",
  ].join("\n");

  const rows = [
    ["お問い合わせ内容", inquiryLabel],
    ["お名前", `${data.contactName}様`],
    ["会社名・店舗名", data.companyName],
    ["メールアドレス", data.email],
    ["電話番号", phone],
    ["業種", businessLabel],
  ];

  const html = `
    <div style="font-family: sans-serif; line-height: 1.7; color: #222;">
      <p>${escapeHtml(data.contactName)}様</p>
      <p>
        この度はWir Journeyへお問い合わせいただき、誠にありがとうございます。<br />
        以下の内容でお問い合わせを受け付けました。
      </p>
      <table style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <th style="text-align: left; padding: 4px 12px 4px 0; white-space: nowrap; vertical-align: top;">${escapeHtml(label)}</th>
            <td style="padding: 4px 0;">${escapeHtml(value)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="margin-top: 16px;"><strong>ご相談内容</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      <p style="margin-top: 16px;">
        内容を確認のうえ、担当者よりご連絡いたします。<br />
        なお、お問い合わせ内容によっては、ご回答までお時間をいただく場合がございます。
      </p>
      <p>今後ともWir Journeyをよろしくお願いいたします。</p>
      <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;" />
      <p style="margin: 0;">
        Wir Journey<br />
        <a href="https://www.wirjourney.com">https://www.wirjourney.com</a><br />
        info@wirjourney.com
      </p>
    </div>
  `;

  return { text, html, subject: "【Wir Journey】お問い合わせを受け付けました" };
}

async function sendAutoReply(resend, data) {
  const { text, html, subject } = buildAutoReplyContent(data);
  const { error } = await resend.emails.send({
    from: NOTIFICATION_FROM,
    to: [data.email],
    subject,
    text,
    html,
  });
  if (error) {
    throw error;
  }
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !data[field]?.toString().trim());
  if (missing.length > 0) {
    return NextResponse.json({ ok: false, error: "missing_fields", missing }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(data.email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { text, html, subject } = buildEmailContent(data);

  const { error } = await resend.emails.send({
    from: NOTIFICATION_FROM,
    to: NOTIFICATION_TO,
    replyTo: data.email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("[contact] resend send failed", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }

  // 社内通知メール(最重要)が成功した場合のみ、自動返信メールとSlack通知を
  // 並列実行する。どちらが失敗してもフォーム送信自体は成功扱いとする。
  const [autoReplyResult, slackResult] = await Promise.allSettled([
    sendAutoReply(resend, data),
    sendSlackNotification(data),
  ]);

  if (autoReplyResult.status === "rejected") {
    console.error("[contact] auto-reply email failed", autoReplyResult.reason);
  }
  if (slackResult.status === "rejected") {
    console.error("[contact] slack notification failed", slackResult.reason);
  }

  return NextResponse.json({ ok: true });
}
