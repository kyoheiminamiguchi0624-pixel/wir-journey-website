import { NextResponse } from "next/server";

interface ContactPayload {
  storeName: string;
  contactName: string;
  email: string;
  phone: string;
  address: string;
  businessType: string;
  message: string;
}

const REQUIRED_FIELDS: (keyof ContactPayload)[] = [
  "storeName",
  "contactName",
  "email",
  "phone",
  "address",
  "businessType",
  "message",
];

export async function POST(request: Request) {
  let data: Partial<ContactPayload>;
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
  if (!emailPattern.test(data.email!)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  // TODO(本番導入前に対応): ここでメール送信サービス（例: Resend, SendGrid,
  // またはGmail連携のnodemailer等）と接続し、問い合わせ内容を通知してください。
  // 現状はサーバーログへの出力のみです。
  console.log("[contact] new inquiry", {
    storeName: data.storeName,
    contactName: data.contactName,
    email: data.email,
    phone: data.phone,
    address: data.address,
    businessType: data.businessType,
    messageLength: data.message?.length,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
