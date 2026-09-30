import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";
import { news, getNewsBySlug, formatNewsDate } from "@/lib/data/news";
import { PRIMARY_CTA, LEAD_CTA, SITE } from "@/lib/constants";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./article.module.css";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return {};
  return buildMetadata({ title: item.title, description: item.description, path: `/news/${item.slug}` });
}

// 新商品リリースなどを、営業メールやSNSにそのまま貼れるLP風の記事として表示する。
export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const crumbs = [
    { name: "NEWS", path: "/news" },
    { name: item.title, path: `/news/${item.slug}` },
  ];
  const main = item.mainProduct;

  return (
    <>
      <Breadcrumb items={crumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: item.title,
              description: item.description,
              datePublished: item.date,
              image: main ? [`${SITE.url}${main.image}`] : undefined,
              publisher: { "@type": "Organization", name: SITE.fullName, url: SITE.url },
              mainEntityOfPage: `${SITE.url}/news/${item.slug}`,
            },
            breadcrumbJsonLd(crumbs),
          ]),
        }}
      />

      <Section tone="surface">
        <header className={styles.header}>
          <div className={styles.meta}>
            <time dateTime={item.date} className={styles.date}>
              {formatNewsDate(item.date)}
            </time>
            <span className={styles.category}>{item.category}</span>
          </div>
          <h1 className={styles.title}>{item.title}</h1>
          {item.subtitle && <p className={styles.subtitle}>{item.subtitle}</p>}
        </header>
        <p className={styles.lead}>{item.lead}</p>
      </Section>

      {main && (
        <Section>
          <div className={styles.main}>
            <div className={styles.mainImage}>
              <PhotoFrame src={main.image} alt={`${main.name}の商品写真`} ratio="632 / 820" />
            </div>
            <div className={styles.mainBody}>
              <p className={styles.mainLabel}>{main.label}</p>
              <h2 className={styles.mainName}>{main.name}</h2>
              <p className={styles.mainCatch}>{main.catchcopy}</p>
              {main.body.map((para) => (
                <p key={para} className={styles.text}>
                  {para}
                </p>
              ))}
              <ul className={styles.tags}>
                {main.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
              <dl className={styles.specs}>
                {main.specs.map((spec) => (
                  <div key={spec.label} className={styles.specRow}>
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
              {main.productHref && (
                <Button href={main.productHref} variant="outline" className={styles.detailButton}>
                  商品詳細を見る<span aria-hidden="true">　›</span>
                </Button>
              )}
            </div>
          </div>
        </Section>
      )}

      {item.collabProducts?.length > 0 && (
        <Section tone="surface">
          <h2 className={styles.sectionHeading}>{item.collabHeading}</h2>
          <div className={styles.collabGrid}>
            {item.collabProducts.map((product) => (
              <article key={product.name} className={styles.collabItem}>
                <PhotoFrame src={product.image} alt={`${product.name}の商品写真`} ratio="516 / 326" />
                <h3 className={styles.collabName}>{product.name}</h3>
                <p className={styles.collabShipping}>発送可能開始日　{product.shipping}</p>
                <p className={styles.collabText}>{product.body}</p>
                {product.productHref && (
                  <Button href={product.productHref} variant="outline" className={styles.detailButton}>
                    商品詳細を見る<span aria-hidden="true">　›</span>
                  </Button>
                )}
              </article>
            ))}
          </div>
        </Section>
      )}

      <Section tone="cta">
        <div className={styles.cta}>
          <h2 className={styles.ctaHeading}>{item.sampleHeading}</h2>
          <p className={styles.ctaText}>{item.sampleText}</p>
          <div className={styles.ctaButtons}>
            <Button href={LEAD_CTA.href} className={styles.ctaButton}>
              {LEAD_CTA.label}
            </Button>
            <Button href={PRIMARY_CTA.href} variant="outline" className={styles.ctaButtonOutline}>
              {PRIMARY_CTA.label}
            </Button>
          </div>
        </div>
      </Section>

      <Section narrow>
        <div className={styles.back}>
          <Link href="/news" className={styles.textLink}>
            NEWS一覧へ戻る
          </Link>
        </div>
      </Section>
    </>
  );
}
