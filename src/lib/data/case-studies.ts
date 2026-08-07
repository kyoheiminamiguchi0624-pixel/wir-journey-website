import type { CaseStudy } from "@/types";

/**
 * 導入事例は現時点で実店舗からの確認済み情報がないため、
 * すべてプレースホルダー（isPlaceholder: true）として扱います。
 * 実際の導入店舗の許諾が取れ次第、店舗名・エリア・コメントを実データに差し替えてください。
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "case-01",
    storeName: "導入店舗A（店舗名 未確定）",
    isPlaceholder: true,
    area: "祇園エリア",
    category: "個人経営カフェ",
    summary:
      "ここに実際の導入店舗様のエピソードを掲載予定です。ドリンクメニューへの反応や、外国人観光客のお客様の声などを掲載できると説得力が高まります。",
    imageAlt: "導入事例のイメージ（店舗内観プレースホルダー）",
  },
  {
    slug: "case-02",
    storeName: "導入店舗B（店舗名 未確定）",
    isPlaceholder: true,
    area: "嵐山エリア",
    category: "町家カフェ",
    summary:
      "ここに実際の導入店舗様のエピソードを掲載予定です。導入の決め手や、客単価・SNS露出の変化などの定量的な効果があれば特に効果的です。",
    imageAlt: "導入事例のイメージ（ドリンク提供シーンプレースホルダー）",
  },
  {
    slug: "case-03",
    storeName: "導入店舗C（店舗名 未確定）",
    isPlaceholder: true,
    area: "河原町エリア",
    category: "ホテルラウンジ",
    summary:
      "ここに実際の導入店舗様のエピソードを掲載予定です。宿泊客からのフィードバックや、ウェルカムドリンクとしての活用事例などを想定しています。",
    imageAlt: "導入事例のイメージ（ホテルラウンジプレースホルダー）",
  },
];
