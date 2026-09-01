// 商品マスタ。tagline/features/taste/ingredients/dilution/businessNote/prelaunchNoteは
// docs/handoff/pages/Product-*.dc.html（完成版Claude Design）の記載をそのまま転記しています。
// 要約・再解釈・改変・言い換えはしないでください。「一杯」等の表現もhandoff記載のまま維持します。
// description(Draft 0.8確定原稿)はSEO/メタデータ用途としてそのまま維持しています。

// 業務用パウチ共通文言(docs/handoff/pages/Product-*-Business.dc.html、4ページで一字一句共通)。
const BUSINESS_NOTE = [
  "1,000mlの業務用パウチです。全ラインナップにご用意がございます。いずれもシロップタイプで、1パウチあたりおおよそ30杯以上のドリンク提供が可能です。",
  "クラフトスパークリング・クラフトコーラは、炭酸水だけでなく、炭酸が苦手なお客様にはよく冷やしたミネラルウォーターで、または紅茶で割っても美味しくお楽しみいただけます。焼酎やワインなどお酒と割れば、クラフト感のあるオリジナルサワーやサングリアとしてもご提供いただけます。",
  "クラフトチャイは、アイスミルクやホットミルクはもちろん、炭酸で割ってチャイソーダにするなど、他店様ではなかなか見かけない珍しいドリンクとしてもご提供いただけます。",
];
const BUSINESS_TAGLINE = "飲食店様向け業務用パウチ（1,000ml）";
const SHELF_LIFE = "製造日より一年";
const STORAGE = "常温（開封後は10度以下で保存）";

export const products = [
  {
    slug: "kyo-remon-craft-cola",
    series: "rtd",
    seriesLabel: "RTD",
    name: "京檸檬クラフトコーラ",
    // 一覧ページ(/products)の容量表記「炭酸飲料・250ml」に使用(RTDはシロップではなく炭酸飲料のため)。
    format: "炭酸飲料",
    retailSize: "250ml",
    businessSize: null,
    shelfLife: null,
    storage: null,
    dilution: null,
    servings: null,
    status: "coming-soon",
    featuredProduct: true,
    description:
      "京都で育った「京檸檬」を使った、Wir Journeyのクラフトコーラ。京檸檬の個性とスパイスの奥行きを活かし、ボトルからそのまま提供できるRTDタイプに仕上げています。ホテルの宴会やラウンジ、レストランなど、サービスの中で手軽に提供できるノンアルコールドリンクとして、新しい選択肢を提案します。現在、発売に向けて準備中です。",
    specNote: null,
    imageAlt: null,
    // docs/handoff/pages/Product-KyoRemonCraftCola.dc.html準拠(小売用ボトル、発売前の簡略ページ)。
    tagline: "小売用ボトル",
    features: null,
    taste: null,
    ingredients: null,
    businessTagline: null,
    businessNote: null,
    prelaunchNote:
      "2026年10月の発売を予定しています。商品仕様や販売開始時期などの詳細は、追ってご案内いたします。",
  },
  {
    slug: "kyo-remon-craft-sparkling",
    series: "sparkling",
    seriesLabel: "クラフトスパークリング",
    name: "京檸檬クラフトスパークリング",
    format: "シロップ",
    retailSize: "500ml",
    businessSize: "1Lパウチ",
    shelfLife: SHELF_LIFE,
    storage: STORAGE,
    dilution: ["シロップ1:炭酸水=1:6、または1:7（7または8倍希釈）"],
    servings: "約30杯以上",
    status: "available",
    featuredProduct: false,
    description:
      "京都で育った「京檸檬」を使った、食事とともに楽しむクラフトスパークリング。京檸檬の爽やかな香りと味わいに、複数のスパイスを組み合わせ、甘さだけに頼らない奥行きのある味わいに仕上げています。炭酸水で割ることで、食事と一緒に楽しめるノンアルコールドリンクに。ホテルやレストランでのドリンクメニュー、ラウンジでの提供、ウェルカムドリンクなど、京都らしさを取り入れたいシーンに提案できます。",
    specNote: null,
    imageAlt: null,
    // docs/handoff/pages/Product-KyoRemonCraftSparkling(.dc.html/-Business.dc.html)準拠。
    tagline: "完全無添加・無着色。希少地域素材 京檸檬果汁100%使用。",
    features:
      "京檸檬は、京田辺や久御山などで栽培されているブランド檸檬です。冬が訪れる前に早摘みされ、控えめな酸味と瑞々しい香り、上品な苦味が特徴のグリーンレモン。このこだわりの果汁にスパイスときび砂糖を掛け合わせた、ノンアルコールの上位ラインのペアリングドリンクです。",
    taste: "京檸檬の個性を引き立てる、相性の良いスパイスをブレンド。苦味、酸味、甘さが心地よく調和した味わいに仕上げました。",
    ingredients: "京檸檬果汁、きび砂糖、蜂蜜、カルダモン、シナモン、オールスパイス、クローブ、ブラックペッパー",
    businessTagline: BUSINESS_TAGLINE,
    businessNote: BUSINESS_NOTE,
    prelaunchNote: null,
  },
  {
    slug: "kyoto-ringo-no-cola",
    series: "cola",
    seriesLabel: "クラフトコーラ",
    name: "京都 リンゴノコーラ",
    format: "シロップ",
    retailSize: "250ml",
    businessSize: "1Lパウチ",
    shelfLife: SHELF_LIFE,
    storage: STORAGE,
    dilution: ["シロップ1:炭酸水=1:4、または1:5（5または6倍希釈）"],
    servings: "約30杯以上",
    status: "available",
    featuredProduct: false,
    description:
      "長野県信州産の完熟りんご100％果汁とスパイスから生まれた、フルーティーなクラフトコーラ。りんごのやさしい甘みと香りに、複数のスパイスを重ね、果実感とスパイスの奥行きを楽しめる味わいに仕上げています。炭酸水で割ってクラフトコーラとして楽しむのはもちろん、店舗オリジナルのアレンジドリンクやデザートとの組み合わせなど、さまざまな使い方ができます。",
    specNote: null,
    imageAlt: null,
    // docs/handoff/pages/Product-KyotoRingoNoCola(.dc.html/-Business.dc.html)準拠。
    tagline: "完全無添加・無着色。長野県産リンゴ果汁100%ストレート果汁使用。",
    features:
      "長野県・信州北部の飯綱町。豊かな自然の中、有機質肥料と減農薬栽培にこだわり育てられたりんごの100%ストレート果汁を使用しています。相性の良い蜂蜜やシナモンなど複数のスパイスを配合し、初めてのクラフトコーラにもおすすめの優しいスパイス感が特徴です。",
    taste: "甘口でフルーティー。優しいスパイス感とりんごの風味をしっかり味わえ、後味はさっぱり。お子様にも一番人気のフレーバーです。",
    ingredients: "きび砂糖、りんご果汁、シナモン、蜂蜜、カルダモン、檸檬果汁、オールスパイス、クローブ、ブラックペッパー",
    businessTagline: BUSINESS_TAGLINE,
    businessNote: BUSINESS_NOTE,
    prelaunchNote: null,
  },
  {
    slug: "kyoto-ginger-no-cola",
    series: "cola",
    seriesLabel: "クラフトコーラ",
    name: "京都 ジンジャーノコーラ",
    format: "シロップ",
    retailSize: "250ml",
    businessSize: "1Lパウチ",
    shelfLife: SHELF_LIFE,
    storage: STORAGE,
    dilution: ["シロップ1:炭酸水=1:4、または1:5（5または6倍希釈）"],
    servings: "約30杯以上",
    status: "available",
    featuredProduct: false,
    description:
      "ジンジャーとスパイスの風味をしっかり楽しめる、クラフトコーラ。ジンジャーの存在感と複数のスパイスを組み合わせ、甘さだけではない、奥行きのある味わいに仕上げています。炭酸水で割るスタンダードなクラフトコーラとしてはもちろん、アレンジドリンクや食事との組み合わせにも。カフェやレストラン、バーなど、オリジナルドリンクを提案したい店舗にも取り入れやすいシロップです。",
    specNote: null,
    imageAlt: null,
    // docs/handoff/pages/Product-KyotoGingerNoCola(.dc.html/-Business.dc.html)準拠。
    tagline: "完全無添加・無着色。スパイスの名産地インドケーララ州のジンジャー使用。",
    features:
      "世界有数のスパイス産地として知られるインド・ケーララ州産のジンジャーを使用。豊かな香りとしっかりとした辛味が特徴で、スパイスとの調和により、本格的な味わいでありながら飲みやすさも兼ね備えたクラフトコーラに仕上げました。",
    taste:
      "キレのある爽やかな飲み口で、甘さの中にスパイスの豊かな香りが広がります。すっきりとした後味の中にスパイスの余韻が心地よく続き、最後にジンジャーの心地よい辛味が追いかけてくる味わいです。",
    ingredients: "きび砂糖、ジンジャー、檸檬果汁、カルダモン、シナモン、蜂蜜、オールスパイス、クローブ、ブラックペッパー",
    businessTagline: BUSINESS_TAGLINE,
    businessNote: BUSINESS_NOTE,
    prelaunchNote: null,
  },
  {
    slug: "kyoto-spice-no-chai",
    series: "chai",
    seriesLabel: "クラフトチャイ",
    name: "京都 スパイスノチャイ",
    format: "シロップ",
    retailSize: "250ml",
    businessSize: "1Lパウチ",
    shelfLife: SHELF_LIFE,
    storage: STORAGE,
    // 牛乳/豆乳/炭酸水で異なる希釈率があるため配列で保持(docs/handoff/pages/Product-KyotoSpiceNoChai(.dc.html/-Business.dc.html)準拠)。
    dilution: [
      "シロップ1:牛乳=1:8、または1:9（9または10倍希釈）",
      "シロップ1:豆乳=1:5、または1:6（6または7倍希釈）",
      "シロップ1:炭酸水=1:6、または1:7（7または8倍希釈）",
    ],
    servings: "約30杯以上",
    status: "available",
    featuredProduct: false,
    description:
      "アッサム茶葉とスパイスを組み合わせた、Wir Journeyのクラフトチャイ。紅茶のコクとスパイスの香りを楽しめる、濃厚で奥行きのある味わいです。ミルクで割ってチャイラテとして提供する定番の楽しみ方に加え、店舗オリジナルのアレンジドリンクにも活用できます。カフェやホテルラウンジ、レストランなど、コーヒーや紅茶とは異なるドリンクメニューを提案したいシーンに。",
    specNote: null,
    imageAlt: null,
    tagline: "完全無添加・無着色。紅茶の名産地インド北東部アッサム地方の茶葉使用。",
    features:
      "世界有数の紅茶産地、インド北東部アッサム地方産の茶葉を使用。クラフトコーラで培ったスパイスの知識と、本場インド・スリランカでチャイを味わった経験を詰め込んだチャイシロップです。",
    // 「一杯」はdocs/handoff/pages/Product-KyotoSpiceNoChai.dc.html記載のまま維持(言い換え禁止)。
    taste:
      "南アジアらしい、しっかりとした甘さとコクを再現。甘さの中に複雑なスパイスの風味を感じる、優しい味わいに仕上げました。HOTでもICEでも美味しくお楽しみいただける、バランスの良い一杯です。",
    ingredients:
      "きび砂糖（国内製造）、レモン果汁、ジンジャー、茶葉、シナモン、カルダモン、クローブ、ブラックペッパー、スターアニス、ナツメグ",
    businessTagline: BUSINESS_TAGLINE,
    businessNote: BUSINESS_NOTE,
    prelaunchNote: null,
  },
  {
    slug: "kyoto-dirty-chai",
    series: "chai",
    seriesLabel: "クラフトチャイ",
    name: "京都ダーティーチャイ",
    format: "シロップ",
    retailSize: "250ml",
    businessSize: "1Lパウチ",
    shelfLife: null,
    storage: null,
    dilution: null,
    servings: null,
    status: "coming-soon",
    featuredProduct: false,
    description:
      "クラフトチャイの新たな楽しみ方を提案する、Wir Journeyの新商品。チャイをベースに、より個性的なドリンク体験を提案します。現在、発売に向けて準備中です。",
    specNote: "詳細仕様は発売時に更新。",
    imageAlt: null,
    // docs/handoff/にはこの商品の詳細ページが存在しないため、tagline以下は未確定(推測で補完しない)。
    tagline: null,
    features: null,
    taste: null,
    ingredients: null,
    businessTagline: null,
    businessNote: null,
    prelaunchNote: null,
  },
  {
    slug: "kyobancha-craft-chai",
    series: "chai",
    seriesLabel: "クラフトチャイ",
    name: "京番茶 クラフトチャイ",
    format: "シロップ",
    retailSize: "250ml",
    businessSize: "1Lパウチ",
    shelfLife: null,
    storage: null,
    dilution: null,
    servings: null,
    status: "coming-soon",
    featuredProduct: false,
    description:
      "京都の茶文化とクラフトチャイを掛け合わせた、新しいクラフトドリンク。京番茶ならではの個性とチャイのスパイスを組み合わせ、京都ならではのドリンク体験を提案します。現在、発売に向けて準備中です。",
    specNote: "詳細仕様は発売時に更新。",
    imageAlt: null,
    // docs/handoff/にはこの商品の詳細ページが存在しないため、tagline以下は未確定(推測で補完しない)。
    tagline: null,
    features: null,
    taste: null,
    ingredients: null,
    businessTagline: null,
    businessNote: null,
    prelaunchNote: null,
  },
];

export const PRODUCT_SERIES = [
  { key: "rtd", label: "RTD" },
  { key: "sparkling", label: "クラフトスパークリング" },
  { key: "cola", label: "クラフトコーラ" },
  { key: "chai", label: "クラフトチャイ" },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsBySeries(series) {
  return products.filter((p) => p.series === series);
}
