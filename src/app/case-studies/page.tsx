import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Badge } from "@/components/ui/Badge";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { caseStudies } from "@/lib/data/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "導入事例",
  description: "Wir Journeyを導入いただいている、または導入をご検討中の店舗様の事例をご紹介します。",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "導入事例", path: "/case-studies" }]} />
      <Section tone="paper">
        <SectionTitle
          eyebrow="Case Studies"
          title="導入店舗様の声"
          description="現在、導入事例は準備中です。以下は掲載イメージのサンプルです。実店舗様の許諾が取れ次第、順次公開してまいります。"
        />
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <div key={c.slug}>
              <PhotoFrame alt={c.imageAlt} ratio="landscape" />
              <div className="mt-4 flex items-center gap-2">
                {c.isPlaceholder && <Badge tone="stone">サンプル</Badge>}
                <span className="text-xs text-ink-soft">{c.area} / {c.category}</span>
              </div>
              <h2 className="mt-2 font-serif-jp text-lg">{c.storeName}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{c.summary}</p>
            </div>
          ))}
        </div>
      </Section>
      <ContactCTA />
    </>
  );
}
