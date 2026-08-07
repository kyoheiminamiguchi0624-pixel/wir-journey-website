import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { faqItems } from "@/lib/data/faq";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description: "Wir Journeyのお取扱い・商品・OEMに関するよくあるご質問をまとめています。",
  path: "/faq",
});

const categoryLabels: Record<string, string> = {
  wholesale: "お取扱いについて",
  product: "商品について",
  oem: "OEMについて",
  general: "その他",
};

export default function FaqPage() {
  const categories = Array.from(new Set(faqItems.map((f) => f.category)));

  return (
    <>
      <Breadcrumb items={[{ name: "FAQ", path: "/faq" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }}
      />

      <Section tone="paper" narrow>
        <SectionTitle eyebrow="FAQ" title="よくあるご質問" />

        <div className="mt-12 space-y-14">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="font-serif-jp text-xl text-moss">{categoryLabels[category]}</h2>
              <div className="mt-4 divide-y divide-stone-light border-t border-stone-light">
                {faqItems
                  .filter((f) => f.category === category)
                  .map((item) => (
                    <details key={item.question} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                        <span className="font-serif-jp text-base leading-7">{item.question}</span>
                        <span className="mt-1 shrink-0 text-moss transition-transform group-open:rotate-45">＋</span>
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-ink-soft">{item.answer}</p>
                    </details>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
