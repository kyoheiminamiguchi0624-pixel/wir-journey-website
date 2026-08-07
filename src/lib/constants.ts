export const SITE = {
  name: "Wir Journey",
  fullName: "クラフトドリンクメーカー Wir Journey",
  operator: "合同会社Hobby Works",
  tagline: "京都を、一杯にする。",
  taglineEn: "A sip of Kyoto's journey.",
  url: "https://wir-journey.example.com",
  baseShopUrl: "https://wir-journey.thebase.in", // TODO: 実際のBASEショップURLに置き換えてください
  description:
    "京都素材を活かしたクラフトドリンクメーカー Wir Journey。添加物に頼らず、京都の風土と職人・生産者の物語をボトルに閉じ込め、店舗の世界観を高める一杯として卸販売しています。",
  contactEmail: "contact@wir-journey.example.com", // TODO: 実際の連絡先メールアドレスに置き換えてください
  areas: [
    "祇園",
    "東山",
    "清水",
    "岡崎",
    "河原町",
    "烏丸",
    "嵐山",
  ],
} as const;

export const NAV_LINKS = [
  { href: "/brand", label: "ブランド" },
  { href: "/products", label: "商品一覧" },
  { href: "/wholesale", label: "お取扱いをご検討の方へ" },
  { href: "/case-studies", label: "導入事例" },
  { href: "/oem", label: "OEM" },
  { href: "/blog", label: "ブログ" },
  { href: "/faq", label: "FAQ" },
] as const;

export const PRIMARY_CTA = {
  label: "お取扱いについて相談する",
  href: "/contact",
} as const;

export const SECONDARY_CTAS = [
  { label: "導入について相談する", href: "/contact" },
  { label: "パートナー店舗になる", href: "/contact" },
] as const;
