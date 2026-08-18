// Site-wide values. url/contactEmail are placeholders pending official values.
export const SITE = {
  name: "Wir Journey",
  fullName: "京都クラフトドリンクメーカー Wir Journey",
  tagline: "京都のドリンクに、もっと選択肢を。",
  description:
    "京都クラフトドリンクメーカー Wir Journeyは、京都の素材とクラフトの発想から生まれた完成されたクラフトドリンクを、ホテル・レストラン・カフェ・小売店などの事業者様へ。小ロットから対応しています。",
  url: "https://wir-journey.example.com",
  contactEmail: "contact@wir-journey.example.com",
};

// Sitemap order follows Draft 0.8 section 8(USE CASEは正式版のIAから除外)。HOMEは"/"。
export const NAV_LINKS = [
  { href: "/products", label: "PRODUCTS" },
  { href: "/case-studies", label: "CASE STUDIES" },
  { href: "/for-business", label: "FOR BUSINESS" },
  { href: "/about", label: "ABOUT" },
  { href: "/oem", label: "OEM" },
  { href: "/faq", label: "FAQ" },
];

// CV hierarchy。Primary CTAは「業務用のお取引について相談する」に統一。
export const PRIMARY_CTA = { label: "業務用のお取引について相談する", href: "/contact" };
export const SECONDARY_CTA = { label: "商品について相談する", href: "/contact" };
export const LEAD_CTA = { label: "サンプルについて相談する", href: "/contact" };
export const OEM_CTA = { label: "OEMについて相談する", href: "/oem" };

// 「小ロットから対応」は具体的な最低発注数量を出さない基本表現(Draft 0.8方針)。
export const SMALL_LOT_MESSAGE = "小ロットから対応";

export const INQUIRY_TYPES = [
  { value: "trade", label: "業務用のお取引について相談する" },
  { value: "product", label: "商品について相談する" },
  { value: "sample", label: "サンプルについて相談する" },
  { value: "oem", label: "OEMについて相談する" },
];

// Draft 0.8 section 32-2 の重点ターゲット業態。
export const BUSINESS_TYPES = [
  { value: "hotel", label: "ホテル" },
  { value: "ryokan", label: "旅館" },
  { value: "restaurant", label: "レストラン・高級レストラン" },
  { value: "cafe", label: "カフェ" },
  { value: "bar", label: "バー" },
  { value: "retail", label: "小売店" },
  { value: "gift-shop", label: "ギフトショップ" },
  { value: "roadside-station", label: "道の駅・地域産品販売施設" },
  { value: "other", label: "その他" },
];
