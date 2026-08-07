import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { BrushDivider } from "@/components/ui/BrushDivider";
import { PRIMARY_CTA, SECONDARY_CTAS } from "@/lib/constants";

export function ContactCTA() {
  return (
    <Section tone="ink" as="div">
      <div className="text-center">
        <p className="font-display-en text-sm italic tracking-[0.2em] text-kyo-gold">Let&apos;s Talk</p>
        <h2 className="mt-5 font-serif-jp text-3xl leading-snug md:text-4xl">
          貴店に、京都という物語を。
        </h2>
        <BrushDivider variant="gold" className="mx-auto my-8" />
        <p className="mx-auto max-w-xl leading-8 text-paper/80">
          サンプルのご相談から、業態に合わせた商品提案まで。まずはお気軽にお問い合わせください。
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href={PRIMARY_CTA.href}
            className="inline-flex items-center justify-center rounded-[4px] bg-kyo-gold px-8 py-4 text-sm tracking-wide text-ink transition-opacity hover:opacity-90"
          >
            {PRIMARY_CTA.label}
          </Link>
          {SECONDARY_CTAS.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              className="inline-flex items-center justify-center rounded-[4px] border border-paper/40 px-8 py-4 text-sm tracking-wide text-paper transition-colors hover:bg-paper/10"
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
