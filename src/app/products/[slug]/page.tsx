import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Badge } from "@/components/ui/Badge";
import { BrushDivider } from "@/components/ui/BrushDivider";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { getProductBySlug, products } from "@/lib/data/products";
import { SITE, PRIMARY_CTA } from "@/lib/constants";
import { buildMetadata, productJsonLd } from "@/lib/seo";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
  });
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-serif-jp text-lg">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-ink-soft">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { name: "商品一覧", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            productJsonLd({
              name: product.name,
              description: product.shortDescription,
              slug: product.slug,
              imageAlt: product.imageAlt,
            })
          ),
        }}
      />

      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-2">
          <PhotoFrame alt={product.imageAlt} ratio="portrait" priority />
          <div>
            {product.status === "coming-soon" && (
              <Badge tone="gold">開発中・{product.releaseInfo}</Badge>
            )}
            <h1 className="mt-3 font-serif-jp text-3xl leading-snug md:text-4xl">{product.name}</h1>
            {product.nameEn && (
              <p className="mt-1 font-display-en text-sm italic text-ink-soft/70">{product.nameEn}</p>
            )}
            <p className="mt-5 text-sm text-ink-soft">{product.releaseInfo}</p>
            <BrushDivider className="my-6" />
            {product.description.map((paragraph) => (
              <p key={paragraph} className="mb-4 leading-8 text-ink-soft">
                {paragraph}
              </p>
            ))}

            <dl className="mt-6 space-y-2 border-t border-stone-light pt-6 text-sm">
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 text-ink-soft">主な原材料</dt>
                <dd>{product.ingredients}</dd>
              </div>
              {product.partners && (
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-ink-soft">連携パートナー</dt>
                  <dd>{product.partners}</dd>
                </div>
              )}
            </dl>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={PRIMARY_CTA.href}
                className="inline-flex items-center justify-center rounded-[4px] bg-moss px-7 py-3.5 text-sm text-paper hover:bg-moss-deep"
              >
                {PRIMARY_CTA.label}
              </Link>
              {product.status === "available" && (
                <a
                  href={SITE.baseShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[4px] border border-ink px-7 py-3.5 text-sm hover:bg-ink hover:text-paper"
                >
                  個人のお客様はBASEショップへ ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid gap-10 md:grid-cols-2">
          <InfoList title="導入メリット" items={product.benefits} />
          <InfoList title="おすすめ業態" items={product.recommendedFor} />
          <InfoList title="ペアリング" items={product.pairings} />
          <InfoList title="提供シーン" items={product.servingScenes} />
        </div>
        <div className="mt-10 border-t border-stone pt-8">
          <InfoList title="店舗での使われ方" items={product.usageExamples} />
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
