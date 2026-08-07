import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Badge } from "@/components/ui/Badge";
import { products } from "@/lib/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "商品一覧",
  description:
    "京都素材を活かしたクラフトドリンクWir Journeyの商品一覧。京檸檬クラフトスパークリング、クラフトコーラ、クラフトチャイなど。",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "商品一覧", path: "/products" }]} />
      <Section tone="paper">
        <SectionTitle
          eyebrow="Lineup"
          title="商品一覧"
          description="京都の素材を活かした、ノンアルコールのクラフトドリンクをラインナップしています。各商品ページでは、導入メリットやおすすめの提供シーンもご紹介しています。"
        />
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="group block">
              <PhotoFrame alt={product.imageAlt} ratio="portrait" />
              <div className="mt-4 flex items-start justify-between gap-3">
                <h2 className="font-serif-jp text-lg group-hover:text-moss">{product.name}</h2>
                {product.status === "coming-soon" && <Badge tone="gold">開発中</Badge>}
              </div>
              <p className="mt-1 text-xs text-ink-soft/70">{product.releaseInfo}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{product.shortDescription}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
