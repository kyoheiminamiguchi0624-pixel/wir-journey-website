# Wir Journey Webサイト 次回再開メモ

作成日: 本セッション終了時点の基準点として作成。以降の実装はこのメモを起点に再開してください。

## 1. 現在の状態

- 技術スタック: Next.js(App Router) + JavaScript + 通常CSS(CSS Modules)。TypeScript・Tailwind CSSは不使用(`legacy-blog/`配下にのみ、削除せず温存した旧TSXブログファイルが残っています)。
- `npm run lint` / `npm run build` とも成功する状態(22ルート生成、エラー・警告なし)。
- Git: 未commit・未push。GitHubへの反映は行っていません。
- 開発サーバーはリクエストがあった際にその都度起動する運用(常時起動はしていません)。

### 現在実装されているページ一覧

| URL | 内容 |
|---|---|
| `/` | HOME |
| `/products` | 商品一覧(7商品、シリーズ別) |
| `/products/[slug]` | 商品詳細(7商品分) |
| `/about` | ABOUT / OUR STORY |
| `/case-studies` | 導入事例(今後のサイト構成からは削除予定。現状は存在) |
| `/for-business` | FOR BUSINESS(今後のサイト構成からは削除予定。現状は存在) |
| `/oem` | OEM(概要+専用CTAの最小構成) |
| `/faq` | よくあるご質問 |
| `/contact` | お問い合わせフォーム |
| `/contact/thanks` | 送信完了ページ |
| `/api/contact` | フォーム送信API(メール送信サービスは未接続、ログ出力のみ) |
| `/robots.txt` / `/sitemap.xml` | 自動生成 |

### Header / Footer / Navigation

- `src/components/layout/Header.jsx`: ロゴは`SITE.fullName`(「京都クラフトドリンクメーカー」/「Wir Journey」の2行、途中改行なし)。`NAV_LINKS`をグローバルナビとして表示。デスクトップ右上と、モバイルは画面下部固定でPrimary CTAを表示。
- `src/components/layout/Footer.jsx`: `SITE.name`・`SITE.tagline`・`NAV_LINKS`・CONTACTリンクを表示。
- `NAV_LINKS`(`src/lib/constants.js`): PRODUCTS / CASE STUDIES / FOR BUSINESS / ABOUT / OEM / FAQ(USE CASEは既に除外済み)。

### PRODUCTS

- `/products`: 4シリーズ(RTD・クラフトスパークリング・クラフトコーラ・クラフトチャイ)ごとに7商品を掲載。
- `/products/[slug]`: 商品概要・商品仕様(小売用/業務用/希釈/提供杯数)・導入シーン・FAQ・CTA。
- Featured Product(特定商品を強調する表示・バッジ・コピー)は**HOME・`/products`・`/products/[slug]`すべてから削除済み**。商品データ上の`featuredProduct`フィールド自体は7商品とも維持(表示ロジックのみ削除)。

### OUR STORY

- 現在は`/about`ページ(コンポーネント名は`OurStoryExcerpt`がHOMEに、独立ページ本体は`src/app/about/page.js`)。
- 内容はDraft 0.8確定原稿(嘉住商店創業・祖母のエピソード)をそのまま使用。改変していません。

### FAQ

- `/faq`ページと、HOME末尾の`FaqExcerpt`(抜粋3件+「FAQをすべて見る」)。
- データは`src/lib/data/faq.js`。「法人向けFAQ」という表現は使用していません。

### CONTACT

- 現状は独立ページ`/contact`(フォーム)+`/contact/thanks`(完了ページ)。
- HOME末尾に`ContactCta`セクションがあり、Primary/Secondary/Lead CTAボタンを表示。
- 今後の方針(未実装): CONTACTをHOME末尾へのページ内スクロールを基本とする(4章参照)。

### 導入店舗様の声

- `src/components/sections/StoreVoices.jsx` + `StoreVoices.module.css`、データは`src/lib/data/storeVoices.js`。
- HOME内、Wir Journeyが選ばれる理由の直後・PRODUCTSの直前に配置。
- 3店舗(ホテルカンラ京都/すみれ珈琲/GREEN TERRACE)の実データを使用(詳細は2章参照)。
- レイアウトは横並びカードではなく縦1カラム、引用文を大きく主役に、店舗名・役職・氏名を引用文直下に配置。セクション末尾に既存`PRIMARY_CTA`を使用したCTAボタン。

### その他主要コンポーネント

- HOMEセクション(`src/components/sections/`): `Hero` / `PainPoints`(こんなお悩みはありませんか？) / `WhyWirJourney`(Wir Journeyが選ばれる理由、4項目+アイコン) / `StoreVoices` / `ProductsOverview`(HOME用、4シリーズ名のみ表示) / `AdoptionFlow`(取引・導入の流れ、01〜05) / `OurStoryExcerpt` / `FaqExcerpt` / `ContactCta`。
- 汎用UI(`src/components/ui/`): `Section` / `SectionTitle` / `Container` / `Button` / `Badge` / `Breadcrumb` / `PhotoFrame`(実素材未設定時はプレースホルダー表示)。
- フォーム: `src/components/forms/ContactForm.jsx`。
- データ層(`src/lib/data/`): `products.js`(7商品) / `storeVoices.js`(導入店舗の声) / `faq.js` / `useCases.js`(商品詳細ページの「導入シーン」表示専用、`/use-case`独立ページは既に削除済み) / `caseStudies.js`(実データなし、空配列)。
- 共通設定: `src/lib/constants.js`(`SITE` / `NAV_LINKS` / CTA定数群) / `src/lib/seo.js`(メタデータ・JSON-LD生成)。

### 現在のCTA

- `PRIMARY_CTA`(`src/lib/constants.js`): `{ label: "業務用のお取引について相談する", href: "/contact" }`
- Header・Hero・StoreVoices・for-business・商品詳細ページなど、すべてこの定数を参照(ハードコードなし)。

### 商品データ

`src/lib/data/products.js`に7商品(Draft 0.8確定原稿を正文として使用、要約・改変なし)。

| 商品名 | シリーズ | status |
|---|---|---|
| 京檸檬クラフトコーラ | RTD | coming-soon |
| 京檸檬クラフトスパークリング | クラフトスパークリング | available |
| 京都 リンゴノコーラ | クラフトコーラ | available |
| 京都 ジンジャーノコーラ | クラフトコーラ | available |
| 京都 スパイスノチャイ | クラフトチャイ | available |
| 京都ダーティーチャイ | クラフトチャイ | coming-soon |
| 京番茶 クラフトチャイ | クラフトチャイ | coming-soon |

## 2. 本日確定した仕様

### HOME

```
HERO
↓
こんなお悩みはありませんか？
↓
Wir Journeyが選ばれる理由
↓
導入店舗様の声
↓
PRODUCTS
↓
取引・導入の流れ
↓
OUR STORY
↓
FAQ
↓
CONTACT
```

上記の順序で実装済み(`src/app/page.js`)。

### 削除するもの(本日HOMEから削除済み)

- CASE STUDIES(HOME上のセクション。`/case-studies`ページ自体は現状維持)
- FOR BUSINESS(HOME上には元々独立セクションはなし。ページ自体は現状維持。4章の今後方針でページ自体の削除を予定)
- 「導入することで生まれる価値」(セクションごと削除、専用コンポーネント・CSSも削除済み)

### 導入店舗様の声(確定データ、変更禁止)

**ホテルカンラ京都**
「間違いなくノンアルコールの中で一番おかわりが出るドリンクです」
— ホテルカンラ京都 ソムリエ 津幡様

**すみれ珈琲**
「お客様からオーダー率の高いドリンクで、リピーター率も高いドリンクです」
— すみれ珈琲 店主 小野寺様

**GREEN TERRACE**
「スパイスの香りが良く、本格的な味わいで美味しい」といったお声を多くいただきます。
— GREEN TERRACE 店長 玉木様

店舗名・役職・氏名・コメントは変更しないこと。架空の店舗・コメントを追加しないこと。

### CTA

Primary CTAは「業務用のお取引について相談する」に統一。既存の`PRIMARY_CTA`定数(`src/lib/constants.js`)を使用し、新規ハードコードはしないこと。

## 3. デザイン方針

**Claude Designの「design4」をデザイン上のマスターとして扱う。**

重要な役割分担:
- **Claude Design(design4)がデザインの正**。VS Code側はそれを実装する場所として扱う。
- **VS Code側でデザインを勝手に初期状態へ戻さないこと。**

design4で維持する要素:
- 白基調
- 上品さ
- 清潔感
- 十分な余白
- 写真を活用
- タイポグラフィ
- 食品・飲料メーカーとしての品の良さ
- BtoBとしての分かりやすさ
- 情報整理
- UCCや新食工業のようなBtoBサイトとしての明快さ
- 過剰なカードUIを避ける
- SaaS的なデザインを避ける

現状のVS Code実装(`src/app/globals.css`のCSS変数によるトークン管理)は、この方針に沿う暫定実装として存在しますが、design4を正としたデザイン確定・差分調整は未実施です(7章参照)。

## 4. 今後のサイト構成(方針決定のみ、未実装)

独立ページとして残すもの:
- `/products`
- `/our-story`(現状の`/about`に相当。URLの正式名称は今後確定)
- `/faq`

HOMEを営業導線の中心とする。CONTACTはHOME末尾へのページ内スクロールを基本とする方針(現状は`/contact`独立ページのまま)。

CASE STUDIESとFOR BUSINESSは今後のサイト構成から削除する方針(現状は`/case-studies`・`/for-business`ページともまだ存在)。

**この章の内容は方針決定のみであり、本日はページ削除・URL変更等のコード実装は行っていません。**

## 5. 現在残っている未完了事項

- **HOMEの最終デザイン**: design4を正としたビジュアル確定が未実施
- **実画像の配置**: 商品写真・店舗写真等はすべて`imageAlt: null`のプレースホルダー
- **HERO画像**: 現状プレースホルダーのみ
- **「こんなお悩みはありませんか？」の画像**: 現状は画像なし(テキストのみのリスト表示)
- **導入店舗様の写真**: 現状テキストのみ(顧客写真なし、架空写真の生成もしていません)
- **PRODUCTSのビジュアル**: 商品写真未設定
- **レスポンシブデザインの最終確認**: 実ブラウザでの崩れチェックは未実施
- **Claude DesignからVS Codeへの最終実装**: design4の確定後、VS Code側への反映が未着手
- **Claude Designとlocalhostのデザイン差分調整**: 未着手
- **サイト構成の変更**(4章): `/case-studies`・`/for-business`の削除、`/about`→`/our-story`への整理、CONTACTのページ内スクロール化は、いずれも方針決定のみで未実装
- メール送信サービスの選定・接続(`/api/contact`は現状ログ出力のみ)
- ドメイン・問い合わせ先メールアドレスの正式値(現状プレースホルダー)
- カラーのHEX値・ロゴ/faviconの正式確定(現状は暫定値)

## 6. 次回最初にやるべき作業

**Claude Designでdesign4をベースにHOMEの最終デザインを詰める。**

その後、確定したデザインをVS Code側(このNext.jsプロジェクト)へ実装として反映する。
