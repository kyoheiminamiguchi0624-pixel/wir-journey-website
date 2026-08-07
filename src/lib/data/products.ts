import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "kyo-remon-sparkling",
    name: "京檸檬クラフトスパークリング",
    nameEn: "Kyo-Remon Craft Sparkling",
    status: "available",
    releaseInfo: "2026年6月4日発売",
    category: "sparkling",
    shortDescription:
      "京都産レモンの香りを閉じ込めた、食中にも寄り添うクラフトスパークリング。",
    description: [
      "京檸檬プロジェクト協議会（宝酒造・日本果汁 運営）と連携し、京都産レモンの果皮まで活かした香り立ちを追求しました。",
      "Hotel Kanra Kyotoのソムリエとの共同開発により、単体でも食中でも成立する酸味設計に仕上げています。",
      "添加物に頼らない製法で、レモン本来の香りと余韻を大切にしています。",
    ],
    benefits: [
      "ノンアルコールでもワインリストのような選択肢を提供でき、客単価向上に寄与",
      "写真映えするラベルとボトル形状で、SNS投稿を通じた店舗の認知拡散が期待できる",
      "食中提案がしやすく、フードペアリングメニューの幅が広がる",
    ],
    recommendedFor: [
      "個人経営カフェ（食事メニューあり）",
      "京町家を活かしたレストラン・バー",
      "ホテルラウンジ・宿泊施設のウェルカムドリンク",
    ],
    pairings: ["京漬物や湯葉などの京料理", "白身魚のカルパッチョ", "柑橘系のデザート"],
    servingScenes: ["食前酒代わりの一杯", "ランチのノンアルコールペアリング", "観光後の休憩シーン"],
    usageExamples: [
      "グラスに注ぎ、京都産レモンのピールを添えて提供",
      "スパークリングウォーターとして食中に通しで提供",
      "季節のフルーツと合わせたシグネチャードリンクのベースに使用",
    ],
    ingredients: "京都府産レモン（京檸檬プロジェクト協議会）ほか",
    partners: "京檸檬プロジェクト協議会（宝酒造・日本果汁）、Hotel Kanra Kyoto",
    imageAlt: "京檸檬クラフトスパークリングのボトルと京都産レモン",
  },
  {
    slug: "kyo-hop-sparkling",
    name: "京ホップクラフトスパークリング（仮）",
    nameEn: "Kyo-Hop Craft Sparkling (tentative)",
    status: "coming-soon",
    releaseInfo: "2026年9月発売予定",
    category: "sparkling",
    shortDescription:
      "京都産ホップの香りを生かした、ノンアルコールのクラフトスパークリング（開発中）。",
    description: [
      "合同会社WOWとの協業により、京都産ホップ（エビバデ京ホップ）を用いて開発を進めています。",
      "商品名・仕様は開発中のため変更となる場合があります。詳細は個別にお問い合わせください。",
    ],
    benefits: [
      "クラフトビール的な香りをノンアルコールで提案できる新しい選択肢",
      "地ホップというストーリー性が、京都らしい体験価値として機能",
    ],
    recommendedFor: ["クラフトビール・ハイボールを扱うバー・カフェ", "夜営業のある飲食店"],
    pairings: ["開発中のため今後公開予定"],
    servingScenes: ["開発中のため今後公開予定"],
    usageExamples: ["開発中のため今後公開予定"],
    ingredients: "京都府産ホップ（エビバデ京ホップ）ほか",
    partners: "合同会社WOW",
    imageAlt: "京ホップクラフトスパークリング開発中のイメージ",
  },
  {
    slug: "ringo-no-cola",
    name: "リンゴノコーラ",
    nameEn: "Ringo no Cola",
    status: "available",
    releaseInfo: "販売中",
    category: "cola",
    shortDescription: "りんごの果実感を活かした、クラフトコーラ。",
    description: [
      "スパイスと柑橘、りんごを組み合わせ、既製コーラにはない奥行きのある甘みと香りに仕上げました。",
      "添加物に頼らず、素材の風味を活かした製法にこだわっています。",
    ],
    benefits: [
      "ドリンクメニューに「よそでは飲めない一杯」を追加できる",
      "ソーダ割り・ウーロン割りなど提供バリエーションが作りやすい",
    ],
    recommendedFor: ["カジュアルカフェ", "町家カフェ", "テイクアウト中心の店舗"],
    pairings: ["スパイスの効いたカレー・エスニック料理", "チーズケーキ等の焼き菓子"],
    servingScenes: ["観光の合間の一杯", "ランチのドリンクセット"],
    usageExamples: ["炭酸水で割ってクラフトコーラソーダとして提供", "ウイスキーハイボールのベースとして提供"],
    ingredients: "りんご果汁、スパイス、柑橘 ほか",
    imageAlt: "リンゴノコーラのボトル",
  },
  {
    slug: "ginger-no-cola",
    name: "ジンジャーノコーラ",
    nameEn: "Ginger no Cola",
    status: "available",
    releaseInfo: "販売中",
    category: "cola",
    shortDescription: "生姜の芯のある辛みが立つ、クラフトコーラ。",
    description: [
      "生姜のシャープな香りとコクを効かせ、食事にもよく合う辛口のクラフトコーラです。",
      "添加物に頼らず、素材の風味を活かした製法にこだわっています。",
    ],
    benefits: [
      "食中提案しやすい辛口テイストで、フードメニューとの相性が良い",
      "冷え対策ドリンクとしても季節を問わず提案しやすい",
    ],
    recommendedFor: ["食事メニューのあるカフェ", "和食・京料理店"],
    pairings: ["揚げ物・肉料理", "京都のおばんざい"],
    servingScenes: ["食中の一杯", "お湯割りでのウェルカムドリンク（冬季）"],
    usageExamples: ["炭酸水で割って提供", "お湯割りにしてホットドリンクとして提供"],
    ingredients: "生姜、スパイス、柑橘 ほか",
    imageAlt: "ジンジャーノコーラのボトル",
  },
  {
    slug: "spice-no-chai",
    name: "スパイスノチャイ",
    nameEn: "Spice no Chai",
    status: "available",
    releaseInfo: "販売中",
    category: "chai",
    shortDescription: "スパイスの香りが層になる、クラフトチャイベース。",
    description: [
      "複数のスパインを重ねてじっくり仕立てたチャイベース。ミルクとの相性を計算した配合です。",
      "添加物に頼らず、素材の風味を活かした製法にこだわっています。",
    ],
    benefits: [
      "ミルク割りで提供でき、カフェメニューに自然に組み込める",
      "秋冬の季節メニューとして打ち出しやすい",
    ],
    recommendedFor: ["カフェ", "喫茶店", "ベーカリーカフェ"],
    pairings: ["焼き菓子・スコーン", "和菓子との意外な相性"],
    servingScenes: ["カフェタイムの一杯", "冬季のホットドリンク"],
    usageExamples: ["温めたミルクで割ってチャイラテとして提供", "アイスミルクで割ってアイスチャイとして提供"],
    ingredients: "紅茶、スパイス（複数種）ほか",
    imageAlt: "スパイスノチャイのボトルとミルク",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
