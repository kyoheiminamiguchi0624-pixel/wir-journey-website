// お取り扱い店舗一覧(/stores)のデータ。
// 出典: スプレッドシート「卸取引先の役に立ちたいリスト」の「取引先リスト」タブ(非表示行を除く)。
// 店名はGoogle マップの登録名に合わせる(SNSアカウント名・英日の重ね書きは除く)。
// Google マップに登録がない店舗は取引先リストの表記を使う。
// 担当者名・連絡先などの個人情報はここに書かないこと。
export const STORES_AS_OF = "2026年10月";

// Google マイマップ「Wir Journey お取り扱い店舗」(南口様のGoogleアカウント所有)の埋め込みURL。
// 地図の元データ: Google ドライブ「Wir Journey お取り扱い店舗（Webサイト地図用）.kml」(店名・エリア・Google マップへのリンク)。
// 店舗を追加・削除するときは、マイマップと下のstoreGroupsの両方を更新すること。
// null にすると地図ブロックは表示されない。
export const STORE_MAP_EMBED_URL =
  "https://www.google.com/maps/d/embed?mid=1n8o50kV65GNZxemMLo2SFT73zhB7FT4&hl=ja&ll=35.022%2C135.765&z=13";

export const storeGroups = [
  {
    region: "京都市内",
    areas: [
      { area: "北区", stores: ["COTOS KYOTO", "彩文堂"] },
      {
        area: "上京区",
        stores: ["スペースたて680", "西陣麦酒 醸造所 / 京町家タップルーム", "三木都"],
      },
      {
        area: "左京区",
        stores: [
          "三宅八幡茶屋 茶店ぽっぽ",
          "下鴨日和",
          "語り×Café＆Bar Katharsis",
          "riverside café GREEN TERRACE",
          "半々",
        ],
      },
      { area: "中京区", stores: ["ELOVE"] },
      {
        area: "下京区",
        stores: [
          "be there",
          "カフェセレステ",
          "酒 ROKKENN",
          "ホテルカンラ京都",
          "すみれ珈琲",
          "Artisan TEPPAN RESTAURANT",
        ],
      },
      { area: "東山区", stores: ["amer"] },
      { area: "右京区", stores: ["玄米ピザ 月のふね"] },
    ],
  },
  {
    region: "京都市外",
    areas: [
      { area: "宇治市", stores: ["Café sô"] },
      { area: "相楽郡南山城村", stores: ["道の駅 お茶の京都 みなみやましろ村"] },
      { area: "奈良県生駒市", stores: ["An-124 coffee"] },
      { area: "滋賀県湖南市", stores: ["TSUKURU WORKS"] },
    ],
  },
];
