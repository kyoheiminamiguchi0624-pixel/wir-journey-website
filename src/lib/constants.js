// Site-wide values. contactEmailは正式値が決まるまでのプレースホルダー(未使用)。
// urlは正式ドメイン(https://www.wirjourney.com)。canonical/metadataBase/OG/
// sitemap/robots/JSON-LDはすべてこの値を参照するため、他ファイルへ個別に
// ハードコードしないこと。
export const SITE = {
  name: "Wir Journey",
  fullName: "京都クラフトドリンクメーカー Wir Journey",
  tagline: "京都のドリンクに、もっと選択肢を。",
  description:
    "京都クラフトドリンクメーカー Wir Journeyは、京都の素材とクラフトの発想から生まれた完成されたクラフトドリンクを、ホテル・レストラン・カフェ・小売店などの事業者様へ。小ロットから対応しています。",
  url: "https://www.wirjourney.com",
  contactEmail: "contact@wir-journey.example.com",
};

// docs/handoff/pages/Home.dc.html記載のHeaderナビ構成(302-305行目)。PRODUCTSはHOME上では
// #productsアンカー、HOME以外では実ページ(/products)へ遷移する(各コンポーネント側で解決)。
export const NAV_LINKS = [
  { href: "/products", anchorOnHome: "#products", label: "PRODUCTS" },
  { href: "/about", label: "ABOUT US" },
  { href: "/oem", label: "OEM" },
  { href: "/faq", label: "FAQ" },
];

// docs/handoff/pages/Home.dc.html記載のFooterリンク構成(349-355行目)。
export const FOOTER_LINKS = [
  { href: "/products", anchorOnHome: "#products", label: "商品" },
  { href: "/about", label: "私たちについて" },
  { href: "/oem", label: "OEM" },
  { href: "/faq", label: "よくある質問" },
  { href: "/contact", label: "お問い合わせ" },
];

// CV hierarchy。Primary CTAは「業務用のお取引について相談する」に統一。
// HOME以外のページ・CONTACTセクション自体は実ページ(/contact)を維持。
export const PRIMARY_CTA = { label: "業務用のお取引について相談する", href: "/contact" };
export const SECONDARY_CTA = { label: "商品について相談する", href: "/contact" };
export const LEAD_CTA = { label: "サンプルについて相談する", href: "/contact" };
// docs/handoff/pages/OEM.dc.html 188-190行目準拠(OEMページ末尾CTAの遷移先は/contact)。
export const OEM_CTA = { label: "OEMについて相談する", href: "/contact" };

// design4ハンドオフ(2026-08-18)で確定した一般消費者向け外部リンク(BASEショップ)。
export const BASE_SHOP_URL = "https://wirjourney.base.shop/";
export const BASE_SHOP_LABEL = "一般のお客様はこちら";

// docs/handoff/pages/Home.dc.html記載のInstagramリンク(40, 56, 272行目)。
export const INSTAGRAM_URL = "https://www.instagram.com/wir_journey_0523";

// 「小ロットから対応」は具体的な最低発注数量を出さない基本表現(Draft 0.8方針)。
export const SMALL_LOT_MESSAGE = "小ロットから対応";

// TOPページの「導入店舗様の声」(StoreVoices)を一時非表示にするフラグ。
// 実店舗様の掲載許可が取れ次第、trueに変更するだけで再表示される。
// データ(src/lib/data/storeVoices.js)・コンポーネント(StoreVoices.jsx)・
// /case-studiesページ・ナビの「導入事例」リンクは変更しないこと。
export const SHOW_HOME_CASE_STUDIES = true;

// docs/handoff/pages/Contact.dc.html 222-228行目準拠(お問い合わせ内容ラジオボタン)。
// 「業務用のお取引について」がデフォルト選択(isDefault)。
export const INQUIRY_TYPES = [
  { value: "trade", label: "業務用のお取引について" },
  { value: "product", label: "商品について" },
  { value: "sample", label: "サンプルについて" },
  { value: "oem", label: "OEM・商品開発について" },
  { value: "other", label: "その他" },
];

// docs/handoff/pages/Contact.dc.html 231-236行目準拠。handoff内コメントに
// 「デザインラフのため主要業態のみ抜粋」と明記されている簡略版(4択)。
export const BUSINESS_TYPES = [
  { value: "restaurant", label: "飲食店" },
  { value: "hotel", label: "ホテル・宿泊施設" },
  { value: "retail", label: "小売店" },
  { value: "other", label: "その他" },
];
