import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/lib/data/products";

export function Products() {
  return (
    <Section tone="paper">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionTitle eyebrow="Lineup" title="商品ラインナップ" />
        <Link href="/products" className="text-sm text-moss underline underline-offset-4 hover:text-moss-deep">
          すべての商品を見る →
        </Link>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 3).map((product, i) => (
          <Reveal key={product.slug} delay={i * 100}>
            <Link href={`/products/${product.slug}`} className="group block">
              <PhotoFrame alt={product.imageAlt} ratio="portrait" />
              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="font-serif-jp text-lg group-hover:text-moss">{product.name}</h3>
                {product.status === "coming-soon" && <Badge tone="gold">開発中</Badge>}
              </div>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{product.shortDescription}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
