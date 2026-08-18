import { NextResponse } from "next/server";

const REQUIRED_FIELDS = ["companyName", "contactName", "email", "businessType", "inquiryType", "message"];

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
    companyName: data.companyName,
    contactName: data.contactName,
    email: data.email,
    phone: data.phone,
    businessType: data.businessType,
    inquiryType: data.inquiryType,
    desiredProduct: data.desiredProduct,
    useCase: data.useCase,
    timing: data.timing,
    messageLength: data.message?.length,
  });

  return NextResponse.json({ ok: true });
}
