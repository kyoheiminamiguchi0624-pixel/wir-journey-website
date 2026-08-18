import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { products, getProductBySlug } from "@/lib/data/products";
import { useCases } from "@/lib/data/useCases";
import { faq } from "@/lib/data/faq";
import { PRIMARY_CTA } from "@/lib/constants";
import { buildMetadata, productJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./product.module.css";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return buildMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${product.slug}`,
  });
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const relatedUseCases = useCases.filter((useCase) => useCase.matchedSeries.includes(product.series));
  const productFaq = faq.filter((item) => item.category === "product");

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

      <Section>
        <div className={styles.hero}>
          <PhotoFrame alt={product.imageAlt} ratio="portrait" />
          <div>
            <div className={styles.badges}>
              <Badge>{product.seriesLabel}</Badge>
              {product.status === "coming-soon" && <Badge>COMING SOON</Badge>}
            </div>
            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.description}>{product.description}</p>
            {product.specNote && <p className={styles.specNote}>{product.specNote}</p>}
            <div className={styles.ctaRow}>
              <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <h2 className={styles.sectionTitle}>商品仕様</h2>
        <div className={styles.specGrid}>
          <div className={styles.specCard}>
            <p className={styles.specLabel}>形態</p>
            <p className={styles.specValue}>{product.format}</p>
          </div>
          <div className={styles.specCard}>
            <p className={styles.specLabel}>小売用</p>
            <p className={styles.specValue}>{product.retailSize || "準備中"}</p>
          </div>
          <div className={styles.specCard}>
            <p className={styles.specLabel}>業務用</p>
            <p className={styles.specValue}>{product.businessSize || "準備中"}</p>
          </div>
          {product.dilution && (
            <div className={styles.specCard}>
              <p className={styles.specLabel}>希釈</p>
              <p className={styles.specValue}>{product.dilution}</p>
            </div>
          )}
          {product.servings && (
            <div className={styles.specCard}>
              <p className={styles.specLabel}>提供杯数</p>
              <p className={styles.specValue}>{product.servings}</p>
            </div>
          )}
          <div className={styles.specCard}>
            <p className={styles.specLabel}>状態</p>
            <p className={styles.specValue}>{product.status === "available" ? "販売中" : "COMING SOON"}</p>
          </div>
        </div>
      </Section>

      {relatedUseCases.length > 0 && (
        <Section>
          <h2 className={styles.sectionTitle}>導入シーン</h2>
          <ul className={styles.useCaseList}>
            {relatedUseCases.map((useCase) => (
              <li key={useCase.slug}>{useCase.label}</li>
            ))}
          </ul>
        </Section>
      )}

      {productFaq.length > 0 && (
        <Section tone="surface">
          <h2 className={styles.sectionTitle}>よくあるご質問</h2>
          <dl className={styles.faqList}>
            {productFaq.map((item) => (
              <div key={item.question} className={styles.faqItem}>
                <dt>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      <Section>
        <div className={styles.ctaBlock}>
          <p>{product.name}の導入について、お気軽にご相談ください。</p>
          <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
        </div>
      </Section>
    </>
  );
}
