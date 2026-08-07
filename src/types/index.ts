export type ProductStatus = "available" | "coming-soon";

export interface Product {
  slug: string;
  name: string;
  nameEn?: string;
  status: ProductStatus;
  releaseInfo: string; // e.g. "2026年6月4日発売" / "2026年9月発売予定"
  shortDescription: string;
  description: string[];
  benefits: string[]; // 導入メリット
  recommendedFor: string[]; // おすすめ業態
  pairings: string[]; // ペアリング
  servingScenes: string[]; // 提供シーン
  usageExamples: string[]; // 店舗での使われ方
  ingredients: string;
  partners?: string;
  imageAlt: string;
  category: "sparkling" | "cola" | "chai";
}

export interface CaseStudy {
  slug: string;
  storeName: string; // プレースホルダーの場合は明示
  isPlaceholder: boolean;
  area: string;
  category: string;
  summary: string;
  quote?: string;
  imageAlt: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  publishedAt: string; // ISO date
  excerpt: string;
  bodyHtml: string;
  imageAlt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "wholesale" | "product" | "oem" | "general";
}
