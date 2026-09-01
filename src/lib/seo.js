import { SITE } from "@/lib/constants";

// サイト共通OGP画像(/products ヘッダー画像 products-hero-visual.webp をそのまま
// PNG化したもの、src/app/opengraph-image.png・twitter-image.png)。ページ・商品
// ごとに変更しない。App Routerのファイル規約(opengraph-image.png)は各ルート
// segmentがbuildMetadata()で独自のopenGraph/twitterオブジェクトを返すことで
// 継承されなくなるため、ここで明示的に指定する。
const OG_IMAGE = {
  url: `${SITE.url}/opengraph-image.png`,
  width: 700,
  height: 466,
  alt: SITE.fullName,
};

export function buildMetadata({ title, description, path }) {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === "/" ? `${SITE.fullName}｜${SITE.tagline}` : `${title}｜${SITE.name}`;

  return {
    // layout.jsのtitle.template("%s｜Wir Journey")は子セグメントのtitleに
    // 適用されるため、既にブランド名を含むfullTitleをプレーン文字列で渡すと
    // 「PRODUCTS｜Wir Journey｜Wir Journey」のように二重になる。absoluteで
    // 渡し、テンプレートを適用させずfullTitleをそのまま使用させる。
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.fullName,
      locale: "ja_JP",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
    robots: { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.fullName,
    url: SITE.url,
    description: SITE.description,
    areaServed: "Kyoto, Japan",
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function productJsonLd(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url: `${SITE.url}/products/${product.slug}`,
    brand: { "@type": "Brand", name: SITE.fullName },
  };
}

export function articleJsonLd(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    url: `${SITE.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: SITE.fullName },
  };
}

export function faqJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
