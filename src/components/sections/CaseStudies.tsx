import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/lib/data/case-studies";

export function CaseStudies() {
  return (
    <Section tone="deep">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionTitle eyebrow="Case Studies" title="導入店舗様の声" />
        <Link href="/case-studies" className="text-sm text-moss underline underline-offset-4 hover:text-moss-deep">
          導入事例をもっと見る →
        </Link>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {caseStudies.map((c, i) => (
          <Reveal key={c.slug} delay={i * 100}>
            <div>
              <PhotoFrame alt={c.imageAlt} ratio="landscape" />
              <div className="mt-4 flex items-center gap-2">
                {c.isPlaceholder && <Badge tone="stone">サンプル</Badge>}
                <span className="text-xs text-ink-soft">{c.area} / {c.category}</span>
              </div>
              <h3 className="mt-2 font-serif-jp text-lg">{c.storeName}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{c.summary}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
