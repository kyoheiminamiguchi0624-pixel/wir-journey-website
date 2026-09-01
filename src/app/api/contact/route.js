import { NextResponse } from "next/server";

// docs/handoff/pages/Contact.dc.html準拠。お名前・会社名・店舗名・メールアドレスのみ必須(*付き)。
const REQUIRED_FIELDS = ["contactName", "companyName", "email"];

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

  // TODO(本番導入前に対応): メール送信サービス(Resend/SendGrid/nodemailer等)は未接続。
  // サービス選定は正式決定待ちのため、現状はサーバーログへの出力のみ。
  console.log("[contact] new inquiry", {
    contactName: data.contactName,
    companyName: data.companyName,
    email: data.email,
    phone: data.phone,
    businessType: data.businessType,
    inquiryType: data.inquiryType,
    messageLength: data.message?.length,
  });

  return NextResponse.json({ ok: true });
}
