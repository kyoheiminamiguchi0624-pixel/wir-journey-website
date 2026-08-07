import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { BrushDivider } from "@/components/ui/BrushDivider";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "送信完了",
  description: "お問い合わせいただきありがとうございます。",
  path: "/contact/thanks",
});

export default function ContactThanksPage() {
  return (
    <Section tone="paper" narrow>
      <div className="py-10 text-center">
        <p className="font-display-en text-sm italic tracking-[0.2em] text-moss">Thank You</p>
        <h1 className="mt-4 font-serif-jp text-3xl">お問い合わせを受け付けました</h1>
        <BrushDivider className="mx-auto my-8" />
        <p className="leading-8 text-ink-soft">
          お問い合わせいただきありがとうございます。内容を確認の上、1〜2営業日を目安にご担当より
          ご連絡いたします。今しばらくお待ちください。
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-[4px] border border-ink px-7 py-3.5 text-sm hover:bg-ink hover:text-paper"
        >
          TOPページに戻る
        </Link>
      </div>
    </Section>
  );
}
