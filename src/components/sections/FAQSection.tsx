import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { faqItems } from "@/lib/data/faq";

export function FAQSection() {
  const topFaqs = faqItems.slice(0, 4);
  return (
    <Section tone="deep" narrow>
      <SectionTitle eyebrow="FAQ" title="よくあるご質問" align="left" />
      <div className="mt-10 divide-y divide-stone">
        {topFaqs.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-ink">
              <span className="font-serif-jp text-base leading-7">{item.question}</span>
              <span className="mt-1 shrink-0 text-moss transition-transform group-open:rotate-45">＋</span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-ink-soft">{item.answer}</p>
          </details>
        ))}
      </div>
      <Link href="/faq" className="mt-8 inline-block text-sm text-moss underline underline-offset-4 hover:text-moss-deep">
        すべてのご質問を見る →
      </Link>
    </Section>
  );
}
