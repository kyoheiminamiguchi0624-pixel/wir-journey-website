import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";
import { PRODUCT_SERIES, getProductsBySeries } from "@/lib/data/products";
import { buildMetadata } from "@/lib/seo";
import styles from "./products.module.css";

// カテゴリ区切り用の背景色。新しい色相は追加せず、サイト共通の白/アイボリー
// (var(--color-white) / var(--color-surface-deep))を交互に割り当てる
// (docs/handoff/pages/Products.dc.html 235行目のbgs配列準拠)。
const SERIES_SURFACE = { rtd: false, sparkling: true, cola: false, chai: true };

// docs/handoff/pages/Products.dc.html 212-233行目のseriesDefs準拠。
// PRODUCT_SERIES.label(HOME抜粋用の簡潔な名称)とは別に、Products一覧専用の
// 見出し・eyebrowをそのまま転記する。
const SERIES_HEADING = {
  rtd: { label: "RTD -そのまま飲めるボトルタイプ-", eyebrow: "READY TO DRINK" },
  sparkling: { label: "クラフトスパークリング", eyebrow: null },
  cola: { label: "クラフトコーラ", eyebrow: null },
  chai: { label: "クラフトチャイ", eyebrow: null },
};

export const metadata = buildMetadata({
  title: "PRODUCTS",
  description:
    "京都の素材とクラフトの発想から生まれたWir Journeyの商品ラインナップ。RTD・クラフトスパークリング・クラフトコーラ・クラフトチャイを、小売用・業務用の両方でご紹介します。",
  path: "/products",
});

// docs/handoff/pages/Products.dc.html 100-127行目準拠。retailSlotId/businessSlotIdは
// public/images/products/配下のファイル名(IMAGE_FILES_MANIFEST.md準拠)と一致させている。
function RetailCard({ product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.cardMedia}>
        <PhotoFrame
          src={`/images/products/product-${product.slug}-retail.webp`}
          alt={`${product.name}（小売用）の商品写真`}
          ratio="4 / 5"
        />
      </div>
      <div className={styles.cardText}>
        <p className={styles.cardRole}>小売用</p>
        <p className={styles.cardMeta}>
          {product.format}・{product.retailSize}
        </p>
        <div className={styles.cardCtaRow}>
          <Button href={`/products/${product.slug}`} variant="outline" className={styles.cardCtaButton}>
            商品詳細を見る
          </Button>
        </div>
      </div>
    </div>
  );
}

function BusinessCard({ product }) {
  return (
    <div className={`${styles.productCard} ${styles.productCardBusiness}`}>
      <div className={styles.cardMedia}>
        <PhotoFrame
          src={`/images/products/product-${product.slug}-business.webp`}
          alt={`${product.name}（業務用）の商品写真`}
          ratio="4 / 5"
        />
      </div>
      <div className={styles.cardText}>
        <p className={styles.cardRoleBusiness}>業務用</p>
        <p className={styles.cardMeta}>シロップ・1000ml</p>
        <div className={styles.cardCtaRow}>
          <Button href={`/products/${product.slug}`} className={styles.cardCtaButton}>
            商品詳細を見る
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "PRODUCTS", path: "/products" }]} />

      <div className={styles.banner}>
        <Container>
          <div className={styles.bannerInner}>
            <div className={styles.bannerImageBox}>
              <PhotoFrame src="/images/products/products-hero-visual.webp" alt="" ratio="4 / 3" />
            </div>
            <div className={styles.bannerContent}>
              <div className={styles.bannerText}>
                <p className={styles.bannerEyebrow}>PRODUCTS</p>
                <h1 className={styles.bannerHeading}>商品ラインナップ</h1>
                <p className={styles.bannerLead}>
                  果実やスパイス、地域素材の個性を活かしたクラフトドリンクを展開しています。
                  <br />
                  カフェやホテル、飲食店での提供から、店頭での販売まで、さまざまな用途に合わせた商品をご紹介します。
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Section className={styles.seriesSection}>
        {PRODUCT_SERIES.map((series) => {
          const seriesProducts = getProductsBySeries(series.key);
          if (seriesProducts.length === 0) return null;

          const heading = SERIES_HEADING[series.key];
          const seriesClassName = SERIES_SURFACE[series.key]
            ? `${styles.seriesBlock} ${styles.seriesBlockSurface}`
            : styles.seriesBlock;

          return (
            <div key={series.key} className={seriesClassName}>
              <div className={styles.seriesHeader}>
                {heading.eyebrow && <p className={styles.seriesEyebrow}>{heading.eyebrow}</p>}
                <h2 className={styles.seriesLabel}>{heading.label}</h2>
              </div>
              {seriesProducts.map((product) => (
                <div key={product.slug} className={styles.productGroup}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <div className={styles.cardRow}>
                    <RetailCard product={product} />
                    {product.businessSize && <BusinessCard product={product} />}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </Section>
    </>
  );
}
