// 商品マスタ。tagline/features/taste/ingredients/dilution/businessNote/prelaunchNoteは
// docs/handoff/pages/Product-*.dc.html（完成版Claude Design）の記載をそのまま転記しています。
// 要約・再解釈・改変・言い換えはしないでください。「一杯」等の表現もhandoff記載のまま維持します。
// description(Draft 0.8確定原稿)はSEO/メタデータ用途としてそのまま維持しています。
// 2026年10月発売の4商品(京檸檬クラフトコーラ RTD／京都ダーティーチャイ／京バンチャクラフトラテ／
// 京ホップクラフトソーダ)は、プロジェクト資料「商品マスタ_2026年度_商品詳細シート」と
// 「新商品リリースのご案内(2026年10月)」を出典とし、記載のない項目は推測で補わない。
// recommend: 「おすすめの飲み方・用途」(商品マスタのセールスポイント欄より)。
// businessImage: null の場合、業務用パウチの写真は「画像準備中」表示になる。

// 業務用パウチ共通文言(docs/handoff/pages/Product-*-Business.dc.html、4ページで一字一句共通)。
const BUSINESS_NOTE = [
  "1,000mlの業務用パウチです。全ラインナップにご用意がございます。いずれもシロップタイプで、1パウチあたりおおよそ30杯以上のドリンク提供が可能です。",
  "クラフトスパークリング・クラフトコーラは、炭酸水だけでなく、炭酸が苦手なお客様にはよく冷やしたミネラルウォーターで、または紅茶で割っても美味しくお楽しみいただけます。焼酎やワインなどお酒と割れば、クラフト感のあるオリジナルサワーやサングリアとしてもご提供いただけます。",
  "クラフトチャイは、アイスミルクやホットミルクはもちろん、炭酸で割ってチャイソーダにするなど、他店様ではなかなか見かけない珍しいドリンクとしてもご提供いただけます。",
];
const BUSINESS_TAGLINE = "飲食店様向け業務用パウチ（1,000ml）";
const SHELF_LIFE = "製造日より一年";
const STORAGE = "常温（開封後は10度以下で保存）";
// 商品マスタ記載の保存方法(2026年10月発売商品用)。
const STORAGE_UNOPENED = "未開封時常温保存";
// お取引条件(商品詳細ページ下部に表示)。出典: 商品マスタ_2026年度_商品詳細シート。
// 希望小売価格は本体価格(税抜)。卸価格・粗利率はWebに掲載しない。
export const TRADE_NOTES = {
  shippingLabel: "無料",
  popLabel: "あり",
  // 欄外注記(南口様指定の文面をそのまま使用)。ボトル・パウチ共通で表示する。
  notes: [
    "※1 送料無料の条件：京檸檬クラフトコーラRTDは72本以上、その他の商品は1回のご発注で16,500円（税抜）以上",
    "※2 ロットの混載：シロップタイプのボトルは6本以上から、他のシロップタイプSKUと混載可能（RTDは混載対象外）",
    "※3 POP詳細：商品フライヤー （原本/データ）、商品ラベル画像（データ）ブランドロゴ（データ）、ショップカード（原本/データ） 他",
  ],
};
// 業務用パウチ・シロップボトル共通の最小発注数(商品マスタの納品ロット)
const POUCH_LOT = "1袋〜";
const BOTTLE_LOT = "6本〜";

// 京都 スパイスノチャイと同じ希釈比率(ダーティーチャイ・バンチャラテも同じ、南口様確認済み)。
const CHAI_DILUTION = [
  "シロップ1:牛乳=1:8、または1:9（9または10倍希釈）",
  "シロップ1:豆乳=1:5、または1:6（6または7倍希釈）",
  "シロップ1:炭酸水=1:6、または1:7（7または8倍希釈）",
];

export const products = [
  {
    slug: "kyo-remon-craft-cola",
    series: "rtd",
    seriesLabel: "RTD",
    name: "京檸檬クラフトコーラ RTD",
    // 一覧ページ(/products)の容量表記「炭酸飲料・250ml」に使用(RTDはシロップではなく炭酸飲料のため)。
    format: "炭酸飲料",
    retailSize: "250ml",
    businessSize: null,
    shelfLife: "製造日より9ヶ月",
    storage: STORAGE_UNOPENED,
    dilution: null,
    servings: null,
    // お取引条件(商品マスタより)。価格は希望小売価格・本体価格(税抜)。
    retailPrice: "556円",
    retailLot: "24本〜",
    businessPrice: null,
    businessLot: null,
    status: "available",
    featuredProduct: true,
    description:
      "京都で育った「京檸檬」を使った、Wir Journey初のRTDタイプのクラフトコーラ。京檸檬果汁にスパイスを掛け合わせ、栓を開けてそのまま楽しめる250mlの飲み切りやすいボトル型炭酸飲料です。割る手間がなく、冷やして開けるだけで飲めるため、小売店・観光施設・イベントでの物販に最適です。",
    specNote: null,
    imageAlt: null,
    // 商品一覧(/products)では業務用カードがないため、横長の写真を2カラム分の幅で表示する。
    listImage: "/images/products/product-kyo-remon-craft-cola-list.webp",
    listImageRatio: "1562 / 1007",
    // 出典: 新商品リリース(2026年10月)・商品マスタ。RTDは無添加ではないため「無添加」表記は入れない。
    tagline: "すぐ飲める、炭酸充填済みタイプ",
    features:
      "京檸檬は、京田辺や久御山などで栽培されるブランド檸檬。冬が訪れる前に早摘みされ、控えめな酸味と瑞々しい香り、上品な苦味が特徴のグリーンレモンです。京檸檬果汁にスパイスを掛け合わせ、栓を開けてそのまま楽しめる250mlの飲み切りやすいボトル型炭酸飲料です。",
    taste: null,
    recommend: "割る手間がなく、冷やして開けるだけで飲めるため、小売店・観光施設・イベントでの物販に最適です。",
    howToServe: "希釈不要。冷やして開けるだけでお召し上がりいただけます。",
    ingredients: null,
    businessTagline: null,
    businessNote: null,
    prelaunchNote: null,
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
    // お取引条件(商品マスタより)。価格は希望小売価格・本体価格(税抜)。
    retailPrice: "5,500円",
    retailLot: BOTTLE_LOT,
    businessPrice: "6,500円",
    businessLot: POUCH_LOT,
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
    // お取引条件(商品マスタより)。価格は希望小売価格・本体価格(税抜)。
    retailPrice: "2,315円",
    retailLot: BOTTLE_LOT,
    businessPrice: "5,500円",
    businessLot: POUCH_LOT,
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
    // お取引条件(商品マスタより)。価格は希望小売価格・本体価格(税抜)。
    retailPrice: "2,315円",
    retailLot: BOTTLE_LOT,
    businessPrice: "5,500円",
    businessLot: POUCH_LOT,
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
    slug: "kyo-hop-craft-soda",
    series: "cola",
    seriesLabel: "クラフトコーラ",
    name: "京ホップクラフトソーダ",
    format: "シロップ",
    retailSize: "250ml",
    businessSize: "1Lパウチ",
    shelfLife: SHELF_LIFE,
    storage: STORAGE_UNOPENED,
    dilution: ["シロップ1:炭酸水=1:7（8倍希釈）"],
    servings: "約30杯以上",
    // お取引条件(商品マスタより)。価格は希望小売価格・本体価格(税抜)。
    retailPrice: "2,315円",
    retailLot: BOTTLE_LOT,
    businessPrice: "5,500円",
    businessLot: POUCH_LOT,
    status: "available",
    featuredProduct: false,
    description:
      "エビバデ京ホップ（合同会社WOW）とのコラボ商品。中京区役所の屋上など京都市内で栽培された朝摘みホップを使った、IPAのような華やかな香りと程よい苦味・甘味のノンアルコールのクラフトソーダ。炭酸水で割るだけで提供できます。",
    specNote: null,
    imageAlt: null,
    // 出典: 新商品リリース(2026年10月)・商品マスタ。小売用写真はリリース資料から切り出した暫定画像。
    businessImage: null,
    tagline: "エビバデ京ホップ（合同会社WOW）とのコラボレーション商品",
    features:
      "京都・合同会社WOWとのコラボ商品。中京区役所の屋上など京都市内で栽培された朝摘みホップを使い、ノンアルソーダ飲料を作りました。",
    taste: "IPAのような華やかな香りのあとに、程よい苦味と甘味が続くノンアルコールのクラフトソーダです。",
    recommend: "炭酸水で割ってグラスで。お酒を飲まない方にも、特別感のある大人の一杯を。1本で約6〜8杯分。",
    howToServe: null,
    ingredients: null,
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
    // お取引条件(商品マスタより)。価格は希望小売価格・本体価格(税抜)。
    retailPrice: "2,315円",
    retailLot: BOTTLE_LOT,
    businessPrice: "5,500円",
    businessLot: POUCH_LOT,
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
    shelfLife: SHELF_LIFE,
    storage: STORAGE_UNOPENED,
    dilution: CHAI_DILUTION,
    servings: "約30杯以上",
    // お取引条件(商品マスタより)。価格は希望小売価格・本体価格(税抜)。
    retailPrice: "2,315円",
    retailLot: BOTTLE_LOT,
    businessPrice: "5,500円",
    businessLot: POUCH_LOT,
    status: "available",
    featuredProduct: false,
    description:
      "明治35年創業の株式会社美濃与が開発した、大豆を焙煎してつくる「大豆珈琲」を使った、完全ノンカフェインのコーヒーチャイ。牛乳や豆乳で割るだけで、時間を問わず、カフェインを控えながら楽しめるチャイに。",
    specNote: null,
    imageAlt: null,
    // 業務用パウチの写真は未着(既存画像は「COMING SOON」の仮画像だったため使わない)。
    businessImage: null,
    // 出典: 新商品リリース(2026年10月)・商品マスタ。
    tagline: "株式会社美濃与とのコラボレーション商品",
    features:
      "明治35年創業株式会社美濃与が開発した大豆を焙煎してつくる\"大豆珈琲\"を使い、完全ノンカフェインのコーヒーチャイを商品化致しました。大豆珈琲を焙煎する時に発生する大豆微粉末のアップサイクル素材を活かしています。",
    taste: null,
    recommend: "牛乳や豆乳で割るだけで、時間を問わず、カフェインを控えながら楽しめるチャイに。1本で約6〜8杯分。",
    howToServe: null,
    ingredients: null,
    businessTagline: BUSINESS_TAGLINE,
    businessNote: BUSINESS_NOTE,
    prelaunchNote: null,
  },
  {
    slug: "kyobancha-craft-latte",
    series: "chai",
    seriesLabel: "クラフトチャイ",
    name: "京バンチャクラフトラテ",
    format: "シロップ",
    retailSize: "250ml",
    businessSize: "1Lパウチ",
    shelfLife: SHELF_LIFE,
    storage: STORAGE_UNOPENED,
    dilution: CHAI_DILUTION,
    servings: "約30杯以上",
    // お取引条件(商品マスタより)。価格は希望小売価格・本体価格(税抜)。
    retailPrice: "2,315円",
    retailLot: BOTTLE_LOT,
    businessPrice: "5,500円",
    businessLot: POUCH_LOT,
    status: "available",
    featuredProduct: false,
    description:
      "京都・宇治田原にある株式会社協栄製茶とのコラボ商品。自家焙煎された京番茶の茶葉を使ったラテベースで、京番茶のスモーキーで香ばしい香りとスパイスが好相性です。牛乳や豆乳で割るだけで、京都らしい一杯に。",
    specNote: null,
    imageAlt: null,
    // 業務用パウチの写真は未着(既存画像は「COMING SOON」の仮画像だったため使わない)。
    businessImage: null,
    // 出典: 新商品リリース(2026年10月)・商品マスタ。旧名称「京番茶 クラフトチャイ」(旧URL /products/kyobancha-craft-chai はnext.config.mjsでリダイレクト)。
    tagline: "株式会社協栄製茶とのコラボレーション商品",
    features:
      "京都・宇治田原にある株式会社協栄製茶のコラボ商品です。自家焙煎された茶葉を使ったラテベースで、番茶の薫香とスパイスが好相性です。",
    taste: "京都で日常的に親しまれてきた京番茶の、スモーキーで香ばしい香りを活かしたクラフトラテです。",
    recommend: "牛乳や豆乳で割るだけで、京都らしい一杯に。1本で約6〜8杯分。",
    howToServe: null,
    ingredients: null,
    businessTagline: BUSINESS_TAGLINE,
    businessNote: BUSINESS_NOTE,
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
