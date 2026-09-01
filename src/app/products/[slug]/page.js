import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { products, getProductBySlug } from "@/lib/data/products";
import { PRIMARY_CTA } from "@/lib/constants";
import { buildMetadata, productJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./product.module.css";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${product.slug}`,
  });
}

// docs/handoff/pages/Product-*.dc.html準拠。1商品につき小売用・業務用の2ページが
// handoffには存在するが、Next.js側はスラッグ1本のページに両方をまとめて表示する
// (docs/handoff/PROJECT_STRUCTURE.mdのページ対応表準拠)。
export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const retailImage = `/images/products/product-${product.slug}-retail.webp`;
  const businessImage = `/images/products/product-${product.slug}-business.webp`;

  return (
    <>
      <Breadcrumb items={[{ name: "PRODUCTS", path: "/products" }, { name: product.name, path: `/products/${product.slug}` }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            productJsonLd(product),
            breadcrumbJsonLd([
              { name: "PRODUCTS", path: "/products" },
              { name: product.name, path: `/products/${product.slug}` },
            ]),
          ]),
        }}
      />

      <Section tone="surface" className={styles.heroSection}>
        <p className={styles.eyebrow}>{product.seriesLabel}</p>
        <h1 className={styles.name}>{product.name}</h1>
        {product.tagline && <p className={styles.tagline}>{product.tagline}</p>}
      </Section>

      <Section>
        <div className={styles.detail}>
          <div className={styles.imageBox}>
            <PhotoFrame
              src={product.tagline ? retailImage : undefined}
              alt={`${product.name}（小売用）の商品写真`}
              ratio="4 / 5"
            />
          </div>
          <div className={styles.detailBody}>
            {product.features ? (
              <>
                <p className={styles.label}>特徴</p>
                <p className={styles.text}>{product.features}</p>
                <p className={styles.label}>味わい</p>
                <p className={styles.text}>{product.taste}</p>
                <div className={styles.specGrid}>
                  <div className={styles.specCard}>
                    <p className={styles.specLabel}>内容量</p>
                    <p className={styles.specValue}>{product.retailSize}</p>
                  </div>
                  <div className={styles.specCard}>
                    <p className={styles.specLabel}>賞味期限</p>
                    <p className={styles.specValue}>{product.shelfLife}</p>
                  </div>
                  <div className={styles.specCard}>
                    <p className={styles.specLabel}>保存方法</p>
                    <p className={styles.specValue}>{product.storage}</p>
                  </div>
                </div>
                <p className={styles.label}>原材料</p>
                <p className={styles.ingredients}>{product.ingredients}</p>
                <p className={styles.label}>推奨希釈比率</p>
                {product.dilution.map((line) => (
                  <p key={line} className={styles.text}>
                    {line}
                  </p>
                ))}
              </>
            ) : product.prelaunchNote ? (
              <p className={styles.text}>{product.prelaunchNote}</p>
            ) : (
              <>
                <div className={styles.badges}>
                  <Badge>COMING SOON</Badge>
                </div>
                <p className={styles.text}>{product.description}</p>
                {product.specNote && <p className={styles.specNote}>{product.specNote}</p>}
              </>
            )}
          </div>
        </div>
      </Section>

      {product.businessNote && (
        <Section tone="surface">
          <p className={styles.eyebrowBusiness}>業務用パウチ</p>
          <h2 className={styles.name}>{product.name}（業務用）</h2>
          {product.businessTagline && <p className={styles.tagline}>{product.businessTagline}</p>}
          <div className={styles.detail}>
            <div className={styles.imageBox}>
              <PhotoFrame src={businessImage} alt={`${product.name}（業務用）の商品写真`} ratio="4 / 5" />
            </div>
            <div className={styles.detailBody}>
              {product.businessNote.map((paragraph) => (
                <p key={paragraph} className={styles.text}>
                  {paragraph}
                </p>
              ))}
              <div className={styles.specGrid}>
                <div className={styles.specCard}>
                  <p className={styles.specLabel}>内容量</p>
                  <p className={styles.specValue}>1,000ml</p>
                </div>
                <div className={styles.specCard}>
                  <p className={styles.specLabel}>賞味期限</p>
                  <p className={styles.specValue}>{product.shelfLife}</p>
                </div>
                <div className={styles.specCard}>
                  <p className={styles.specLabel}>保存方法</p>
                  <p className={styles.specValue}>{product.storage}</p>
                </div>
              </div>
              <p className={styles.label}>推奨希釈比率</p>
              {product.dilution.map((line) => (
                <p key={line} className={styles.text}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section tone="cta">
        <div className={styles.ctaBlock}>
          <p className={styles.ctaText}>
            業務用のお取引について、
            <br />
            お気軽にご相談ください。
          </p>
          <Button href={PRIMARY_CTA.href} className={styles.ctaButton}>
            {PRIMARY_CTA.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
