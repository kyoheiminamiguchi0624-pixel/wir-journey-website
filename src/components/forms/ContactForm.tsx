"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const BUSINESS_TYPES = [
  "カフェ",
  "レストラン・飲食店",
  "ホテル・宿泊施設",
  "バー",
  "小売店",
  "その他",
];

const inputClass =
  "w-full rounded-[4px] border border-stone bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/40 focus-visible:outline-2";

export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      storeName: String(formData.get("storeName") ?? ""),
      contactName: String(formData.get("contactName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      address: String(formData.get("address") ?? ""),
      businessType: String(formData.get("businessType") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error("送信に失敗しました");
      }
      router.push("/contact/thanks");
    } catch {
      setError("送信できませんでした。時間をおいて再度お試しいただくか、お手数ですが再送信してください。");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block text-ink">
            店舗名 <span className="text-kyo-gold">必須</span>
          </span>
          <input name="storeName" required className={inputClass} autoComplete="organization" />
        </label>

        <label className="block text-sm">
          <span className="mb-2 block text-ink">
            担当者名 <span className="text-kyo-gold">必須</span>
          </span>
          <input name="contactName" required className={inputClass} autoComplete="name" />
        </label>

        <label className="block text-sm">
          <span className="mb-2 block text-ink">
            メールアドレス <span className="text-kyo-gold">必須</span>
          </span>
          <input type="email" name="email" required className={inputClass} autoComplete="email" />
        </label>

        <label className="block text-sm">
          <span className="mb-2 block text-ink">
            電話番号 <span className="text-kyo-gold">必須</span>
          </span>
          <input type="tel" name="phone" required className={inputClass} autoComplete="tel" />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-2 block text-ink">
          店舗所在地 <span className="text-kyo-gold">必須</span>
        </span>
        <input name="address" required className={inputClass} autoComplete="street-address" />
      </label>

      <label className="block text-sm">
        <span className="mb-2 block text-ink">
          業態 <span className="text-kyo-gold">必須</span>
        </span>
        <select name="businessType" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            選択してください
          </option>
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm">
        <span className="mb-2 block text-ink">
          お問い合わせ内容 <span className="text-kyo-gold">必須</span>
        </span>
        <textarea name="message" required rows={6} className={inputClass} />
      </label>

      {error && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-[4px] bg-moss px-8 py-4 text-sm tracking-wide text-paper transition-colors hover:bg-moss-deep disabled:opacity-60"
      >
        {submitting ? "送信中…" : "この内容で送信する"}
      </button>
    </form>
  );
}
