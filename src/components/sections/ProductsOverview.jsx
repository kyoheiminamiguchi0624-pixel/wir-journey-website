import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { PRODUCT_SERIES, getProductsBySeries } from "@/lib/data/products";
import styles from "./ProductsOverview.module.css";

export function ProductsOverview() {
  const series = PRODUCT_SERIES.filter((s) => getProductsBySeries(s.key).length > 0);

  return (
    <Section tone="surface">
      <SectionTitle
        eyebrow="Products"
        title="商品ラインナップ"
        description="RTD・クラフトスパークリング・クラフトコーラ・クラフトチャイを一体的なラインナップとしてご紹介します。"
      />
      <div className={styles.grid}>
        {series.map((s) => (
          <div key={s.key} className={styles.seriesCard}>
            <h3>{s.label}</h3>
          </div>
        ))}
      </div>
      <div className={styles.more}>
        <Button href="/products" variant="outline">
          商品一覧を見る
        </Button>
      </div>
    </Section>
  );
}
