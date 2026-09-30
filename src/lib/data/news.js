// NEWS(お知らせ)のデータ。新しい記事は配列の先頭に追加する(日付の新しい順)。
// TOPのNEWS欄・/news一覧・/news/[slug]記事ページはすべてこの配列から生成される。
// 本文・商品情報は正式なプレスリリース等の確定原稿のみを使い、推測で補わないこと。
const IMG = "/images/news/2026-10-new-products";

export const news = [
  {
    slug: "new-products-2026-10",
    date: "2026-10-01",
    category: "新商品",
    title: "京都産素材を使った新商品を4種リリース",
    subtitle: "ご待望のRTDタイプ（すぐ飲める炭酸充填済）も正式リリース致します",
    description:
      "Wir Journeyから京都産素材を使った新商品4種が登場。初のRTDタイプ「京檸檬クラフトコーラ RTD」ほか、京都の地元企業とのコラボ商品3種を10月13日より発送開始します。",
    // 出典: 「Wir Journey 新商品リリースのご案内（2026年10月）」プレスリリース
    // (原文の誤記「朝積み」「スパイスの掛け合わせ、」は南口様の指示で修正済み)
    lead: "この度、新商品として4種をご用意いたしましたので、謹んでご案内申し上げます。まずご紹介いたしますのは、栓を開けてそのままお楽しみいただける「京檸檬クラフトコーラ RTD（Ready To Drink）」です。残る3種とあわせ、10月13日より発送を開始いたします。",
    mainProduct: {
      label: "MAIN 新商品",
      name: "京檸檬クラフトコーラ RTD",
      catchcopy: "すぐ飲める、炭酸充填済みタイプ",
      body: [
        "Wir Journeyからは初となる待望のRTDタイプがついに登場します。",
        "京檸檬は、京田辺や久御山などで栽培されるブランド檸檬。冬が訪れる前に早摘みされ、控えめな酸味と瑞々しい香り、上品な苦味が特徴のグリーンレモンです。京檸檬果汁にスパイスを掛け合わせ、栓を開けてそのまま楽しめる250mlの飲み切りやすいボトル型炭酸飲料です。",
      ],
      tags: ["京檸檬果汁使用", "希釈不要", "小売対応可"],
      specs: [
        { label: "発送可能開始日", value: "2026年10月13日〜" },
        { label: "内容量", value: "250ml" },
        { label: "最小ロット", value: "24本〜" },
        { label: "参考上代", value: "600円（税込）" },
      ],
      image: `${IMG}/kyo-remon-craft-cola-rtd.webp`,
      productHref: "/products/kyo-remon-craft-cola",
    },
    collabHeading: "京都地元企業とのコラボレーション商品が続々リリースです！",
    collabProducts: [
      {
        name: "京都ダーティーチャイ",
        shipping: "10月13日〜",
        body: "明治35年創業株式会社美濃与が開発した大豆を焙煎してつくる\"大豆珈琲\"を使い、完全ノンカフェインのコーヒーチャイを商品化致しました。",
        image: `${IMG}/kyoto-dirty-chai.webp`,
        productHref: "/products/kyoto-dirty-chai",
      },
      {
        name: "京バンチャクラフトラテ",
        shipping: "10月13日〜",
        body: "京都・宇治田原にある株式会社協栄製茶のコラボ商品です。自家焙煎された茶葉を使ったラテベースで、番茶の薫香とスパイスが好相性です。",
        image: `${IMG}/kyobancha-craft-latte.webp`,
        productHref: "/products/kyobancha-craft-latte",
      },
      {
        name: "京ホップクラフトソーダ",
        shipping: "10月13日〜",
        body: "京都・合同会社WOWとのコラボ商品。中京区役所の屋上など京都市内で栽培された朝摘みホップを使い、ノンアルソーダ飲料を作りました。",
        image: `${IMG}/kyo-hop-craft-soda.webp`,
        productHref: "/products/kyo-hop-craft-soda",
      },
    ],
    sampleHeading: "いつでもサンプルをお試しいただけます",
    sampleText: "まずはお気軽にお問い合わせください。",
  },
];

export function getNewsBySlug(slug) {
  return news.find((item) => item.slug === slug);
}

// "2026-10-01" → "2026.10.01"
export function formatNewsDate(date) {
  return date.replaceAll("-", ".");
}
