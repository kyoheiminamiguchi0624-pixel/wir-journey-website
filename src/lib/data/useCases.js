// Draft 0.8 セクション13の業態リストをそのまま使用。matchedSeries は各商品の
// Draft 0.8確定コピーが実際に言及している利用シーンからのみ紐づけています
// (新しい訴求文は作成していません)。
export const useCases = [
  {
    slug: "hotel-banquet-lounge",
    label: "ホテル宴会・ラウンジ・ウェルカムドリンク",
    matchedSeries: ["rtd", "sparkling"],
  },
  {
    slug: "restaurant-non-alcohol",
    label: "レストラン・ノンアルコールメニュー・食中ドリンク",
    matchedSeries: ["rtd", "sparkling", "cola"],
  },
  {
    slug: "cafe-original-drink",
    label: "カフェ・オリジナルドリンク",
    matchedSeries: ["cola", "chai"],
  },
  {
    slug: "bar-arrange-drink",
    label: "バー・アレンジドリンク",
    matchedSeries: ["cola"],
  },
  {
    slug: "retail-gift-shop",
    label: "小売・ホテル売店・ギフトショップ",
    matchedSeries: ["sparkling", "cola", "chai"],
  },
  {
    slug: "roadside-station",
    label: "道の駅・地域産品販売施設",
    matchedSeries: ["sparkling", "cola", "chai"],
  },
  {
    slug: "event",
    label: "イベント等",
    matchedSeries: [],
  },
];
