import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
}

export function buildMetadata({ title, description, path }: BuildMetadataArgs): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === "/" ? `${SITE.fullName}｜${SITE.tagline}` : `${title}｜${SITE.name}`;

  // OGP/Twitter Card画像は app/opengraph-image.tsx の自動生成に委ねる
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.fullName,
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
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

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
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

export function productJsonLd(product: {
  name: string;
  description: string;
  slug: string;
  imageAlt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url: `${SITE.url}/products/${product.slug}`,
    brand: { "@type": "Brand", name: SITE.fullName },
  };
}

export function articleJsonLd(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
}) {
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

export function faqJsonLd(items: { question: string; answer: string }[]) {
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
