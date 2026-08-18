import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Badge } from "@/components/ui/Badge";
import { PRODUCT_SERIES, getProductsBySeries } from "@/lib/data/products";
import { buildMetadata } from "@/lib/seo";
import styles from "./products.module.css";

export const metadata = buildMetadata({
  title: "PRODUCTS",
  description:
    "京都の素材とクラフトの発想から生まれたWir Journeyの商品ラインナップ。RTD・クラフトスパークリング・クラフトコーラ・クラフトチャイを、小売用・業務用の両方でご用意しています。",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "PRODUCTS", path: "/products" }]} />
      <Section>
        <SectionTitle
          eyebrow="Products"
          title="Wir Journeyの商品ラインナップ"
          description="RTD・クラフトスパークリング・クラフトコーラ・クラフトチャイを、一体的な商品ラインナップとしてご紹介します。"
        />

        {PRODUCT_SERIES.map((series) => {
          const seriesProducts = getProductsBySeries(series.key);
          if (seriesProducts.length === 0) return null;
          return (
            <div key={series.key} className={styles.seriesBlock}>
              <h3 className={styles.seriesLabel}>{series.label}</h3>
              <div className={styles.grid}>
                {seriesProducts.map((product) => (
                  <Link key={product.slug} href={`/products/${product.slug}`} className={styles.card}>
                    <PhotoFrame alt={product.imageAlt} ratio="portrait" />
                    <div className={styles.cardBody}>
                      <div className={styles.cardHeader}>
                        <h4>{product.name}</h4>
                        {product.status === "coming-soon" && <Badge>COMING SOON</Badge>}
                      </div>
                      <p className={styles.format}>
                        {product.format} / {product.retailSize}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </Section>
    </>
  );
}
