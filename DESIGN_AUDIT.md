# Wir Journey Design Audit

本ドキュメントは実ファイルの現状確認に基づく棚卸しです。コード・CSS・データ・ページ構成は一切変更していません。

状態の凡例:
**【A】実装・デザインとも概ね完成 / 【B】実装済み・デザイン調整が必要 / 【C】実装済み・コンテンツ不足 / 【D】未実装 / 【E】判断待ち**

## 1. 現在のサイト構成

```
/                HOME
/products        商品一覧(7商品、4シリーズ別)
/products/[slug] 商品詳細(7商品分、静的生成)
/about           ABOUT / OUR STORY(今後 /our-story への整理を検討中、未実施)
/case-studies    CASE STUDIES(今後削除予定、未実施)
/for-business    FOR BUSINESS(今後削除予定、未実施)
/oem             OEM(概要+専用CTAの最小構成)
/faq             よくあるご質問
/contact         お問い合わせフォーム
/contact/thanks  送信完了ページ
/api/contact     フォーム送信API(ログ出力のみ、メール送信未接続)
/robots.txt /sitemap.xml  自動生成
```

技術スタック: Next.js(App Router) + JavaScript + 通常CSS(CSS Modules)。TypeScript・Tailwindは不使用。デザイントークンは`src/app/globals.css`の`:root`CSS変数で一元管理。

## 2. HOME各セクションの状態

HOME実装ファイル: `src/app/page.js`(現在の構成順: Hero → PainPoints → WhyWirJourney → StoreVoices → ProductsOverview → AdoptionFlow → OurStoryExcerpt → FaqExcerpt → ContactCta)

### HERO — 状態: **【B】**
- 実装ファイル: `src/components/sections/Hero.jsx` / `Hero.module.css`
- 使用コンポーネント: `Section`, `PhotoFrame`, `Button`
- 使用画像: なし(`PhotoFrame alt={null}`のプレースホルダーのみ、実写真未設定)
- 使用CSS: `Hero.module.css`(2カラムグリッド、`min-width:900px`でPC2カラム化、それ未満は1カラム)
- Desktop: 左テキスト+右`PhotoFrame`の2カラム
- Mobile: 1カラムに自動収束(画像プレースホルダーが本文下に積まれる)
- 現在の実装状態: タグライン・サブコピー・CTA(`PRIMARY_CTA`)は実装済み。特定商品は訴求しない方針どおり商品情報は含まれない
- デザイン上さらに調整が必要な箇所: 右側の画像領域が完全なプレースホルダー(実写真未確定)。見出しサイズ(`clamp(2rem, 5vw, 3.25rem)`)がdesign4の意図と合っているか要確認
- 明らかな未完成箇所: HERO画像そのものが存在しない

### こんなお悩みはありませんか？ — 状態: **【B】**
- 実装ファイル: `src/components/sections/PainPoints.jsx` / `PainPoints.module.css`
- 使用コンポーネント: `Section`, `SectionTitle`
- 使用画像: **なし**(画像枠自体が存在しない。CSSの`::before`で「?」記号を装飾的に表示しているのみ)
- 使用CSS: `PainPoints.module.css`(単一カラムのリスト、`grid`で縦積み)
- Desktop / Mobile: いずれも同一の縦積みリスト(レスポンシブ切り替えなし、そのままでも破綻はしない)
- 現在の実装状態: 5項目のテキストは確定コピーどおり実装済み
- デザイン上さらに調整が必要な箇所: テキストのみのリストで視覚的な作り込みが最小限。写真・イラスト等を加えるかどうか要判断
- 明らかな未完成箇所: このセクション専用の画像は一切ない

### Wir Journeyが選ばれる理由 — 状態: **【B】**
- 実装ファイル: `src/components/sections/WhyWirJourney.jsx` / `WhyWirJourney.module.css`
- 使用コンポーネント: `Section`, `SectionTitle`
- 使用画像: なし。**自作のインラインSVGアイコン4種**(葉っぱ/フラスコ/ボックス/積み重ねた箱、いずれも簡易的な線画)
- 使用CSS: `WhyWirJourney.module.css`(`grid`、`640px`で2列、`1024px`で4列)
- Desktop: 4カラム / Tablet: 2カラム / Mobile: 1カラム
- 現在の実装状態: 4項目のタイトル・説明文(1・4番目はタイトルのみ、2・3番目はタイトル+説明という仕様どおり)を実装済み
- デザイン上さらに調整が必要な箇所: アイコンが暫定的な自作線画のため、design4のビジュアル言語に合わせて最終化が必要
- 明らかな未完成箇所: なし(コピー・構造は確定仕様どおり)

### 導入店舗様の声 — 状態: **【B】**
- 実装ファイル: `src/components/sections/StoreVoices.jsx` / `StoreVoices.module.css`、データ: `src/lib/data/storeVoices.js`
- 使用コンポーネント: `Section`, `SectionTitle`, `Button`
- 使用画像: **なし**(店舗写真・顧客写真は一切なし。テキストのみの引用+署名)
- 使用CSS: `StoreVoices.module.css`(単一カラム縦積み、`border-top`区切り、引用文`font-size: clamp(1.15rem, 2.4vw, 1.5rem)`)
- Desktop / Mobile: いずれも1カラムでそのまま縦に流れる構成(横並びカードにはなっていない)
- 現在の実装状態: 実在3店舗(ホテルカンラ京都/すみれ珈琲/GREEN TERRACE)のコメント・店舗名・役職・氏名を変更せず実装済み。末尾に`PRIMARY_CTA`ボタンあり
- デザイン上さらに調整が必要な箇所: 店舗写真を加えるかどうか、引用符の装飾処理(現状はテキストに含まれる「」をそのまま使用し、追加の引用符装飾はしていない)
- 明らかな未完成箇所: 店舗写真なし(架空写真は生成していません)

### PRODUCTS(HOME) — 状態: **【C】**
- 実装ファイル: `src/components/sections/ProductsOverview.jsx` / `ProductsOverview.module.css`
- 使用コンポーネント: `Section`, `SectionTitle`, `Button`
- 使用画像: **なし**
- 使用CSS: `ProductsOverview.module.css`(`768px`で2列、`1024px`で4列)
- Desktop: 4カラム / Mobile: 1カラム
- 現在の実装状態: 4シリーズ名(RTD/クラフトスパークリング/クラフトコーラ/クラフトチャイ)のテキストのみを表示し、「商品一覧を見る」で`/products`へ誘導。個別商品・Featured表示は意図的に含まない
- デザイン上さらに調整が必要な箇所: 現状は罫線+テキストのみの非常にミニマルな4枚のブロックで、商品ラインナップの魅力を伝える視覚要素(写真等)が皆無
- 明らかな未完成箇所: シリーズごとの視覚的な差別化要素(写真・素材色等)が不足

### 取引・導入の流れ — 状態: **【B】**
- 実装ファイル: `src/components/sections/AdoptionFlow.jsx` / `AdoptionFlow.module.css`(HOMEと`/for-business`で共用)
- 使用コンポーネント: `Section`, `SectionTitle`
- 使用画像: なし(01〜05の番号+テキストのみ)
- 使用CSS: `AdoptionFlow.module.css`(`768px`で5カラム、それ未満は1カラム)
- Desktop: 5カラム横並び / Mobile: 縦積み
- 現在の実装状態: Draft 0.8確定の5ステップをそのまま実装済み
- デザイン上さらに調整が必要な箇所: 番号+テキストのみの簡易表現。アイコンや矢印等の視覚的な流れ表現を加えるか要判断
- 明らかな未完成箇所: なし(構造・コピーは完成)

### OUR STORY(HOME抜粋) — 状態: **【B】**
- 実装ファイル: `src/components/sections/OurStoryExcerpt.jsx` / `OurStoryExcerpt.module.css`
- 使用コンポーネント: `Section`, `SectionTitle`, `PhotoFrame`, `Button`
- 使用画像: なし(`PhotoFrame alt={null}`のプレースホルダーのみ)
- 使用CSS: `OurStoryExcerpt.module.css`(`900px`で2カラム)
- Desktop: 写真+テキストの2カラム / Mobile: 1カラム
- 現在の実装状態: Draft 0.8確定原稿の冒頭2文を抜粋し、「続きを読む」で`/about`へ誘導。指示どおり短くまとめている
- デザイン上さらに調整が必要な箇所: 写真プレースホルダーのみで、ブランドの信頼感を補強する実写真が必要
- 明らかな未完成箇所: 実写真なし

### FAQ(HOME抜粋) — 状態: **【B】**
- 実装ファイル: `src/components/sections/FaqExcerpt.jsx` / `FaqExcerpt.module.css`
- 使用コンポーネント: `Section`, `SectionTitle`, `Button`
- 使用画像: なし
- 使用CSS: `FaqExcerpt.module.css`(単一カラム縦積み)
- Desktop / Mobile: 同一レイアウト(縦積みのため崩れの心配は少ない)
- 現在の実装状態: 全7件のFAQのうち先頭3件を抜粋表示し、「FAQをすべて見る」で`/faq`へ誘導
- デザイン上さらに調整が必要な箇所: 特になし(シンプルな定義リスト表現)
- 明らかな未完成箇所: なし

### CONTACT(HOME末尾) — 状態: **【A】**
- 実装ファイル: `src/components/sections/ContactCta.jsx` / `ContactCta.module.css`
- 使用コンポーネント: `Section`, `Button`
- 使用画像: なし
- 使用CSS: `ContactCta.module.css`(中央寄せの縦積み、CTAボタン3つを`flex-wrap`で横並び→折り返し)
- Desktop: 3ボタン横並び / Mobile: `flex-wrap`で自動折り返し
- 現在の実装状態: Primary/Secondary/Lead CTAをすべて既存定数から表示。見出し・説明文とも短く簡潔
- デザイン上さらに調整が必要な箇所: 特になし
- 明らかな未完成箇所: なし。ただし4章の方針転換(CONTACTをHOME末尾スクロール型にする)が実施されれば、このセクションの役割・実装自体が見直される可能性あり

## 3. 共通UIの状態

### Header — 状態: **【B】**
- 実装ファイル: `src/components/layout/Header.jsx` / `Header.module.css`
- ロゴは`SITE.fullName`を2行(「京都クラフトドリンクメーカー」/「Wir Journey」)に分割表示、各行`white-space: nowrap`で改行防止
- Desktop(`768px`以上): グローバルナビ+右上CTA表示
- Mobile: ハンバーガーメニュー(開閉は`useState`、クライアントコンポーネント) + 画面下部固定のPrimary CTA
- 現在の実装状態: ナビゲーション・CTA・ブランド表記の改行対策まで実装済み
- デザイン上さらに調整が必要な箇所: design4確定後、ロゴ・ナビ・CTAの余白/サイズバランスを再調整する可能性あり

### Footer — 状態: **【B】**
- 実装ファイル: `src/components/layout/Footer.jsx` / `Footer.module.css`
- `SITE.name`・`SITE.tagline`・`NAV_LINKS`・CONTACTリンクを表示するシンプルな1カラム構成
- Desktop / Mobile: 同一レイアウト(`flex-direction: column`のためどちらも縦積み、ナビ部分のみ`flex-wrap`)
- デザイン上さらに調整が必要な箇所: 現状は情報量が最小限。design4でのFooter構成イメージ次第で拡張の可能性あり

### Navigation — 状態: **【B】**
- `NAV_LINKS`(`src/lib/constants.js`): PRODUCTS / CASE STUDIES / FOR BUSINESS / ABOUT / OEM / FAQ
- Header・Footer双方がこの単一の配列を参照(表記の二重管理なし)
- 4章の方針(CASE STUDIES・FOR BUSINESS削除、/about→/our-story整理)が実施されれば、この配列も更新が必要になる

### CTA / Button — 状態: **【B】**
- 実装ファイル: `src/components/ui/Button.jsx` / `Button.module.css`
- `solid`(黒背景白文字)・`outline`(白背景黒文字黒ボーダー)の2バリアント。Draft 0.8のUI原則(黒×白 or 白×黒×黒ボーダー)に準拠
- 全CTAは`src/lib/constants.js`の`PRIMARY_CTA` / `SECONDARY_CTA` / `LEAD_CTA` / `OEM_CTA`を参照し、ハードコードなし
- デザイン上さらに調整が必要な箇所: 角丸半径(`--radius-control: 2px`)・パディング・ホバー挙動がdesign4と一致するか要確認

### Section / Container(レイアウト基盤) — 状態: **【A】**
- 実装ファイル: `src/components/ui/Section.jsx`, `Container.jsx`
- `tone="white"|"surface"`の背景切り替え、`narrow`で幅制限、`--container-width: 1200px`・`--space-section: clamp(3.5rem, 7vw, 7rem)`で余白管理
- 全ページ・全セクションがこの2つを土台にしており、構造は安定

### Typography — 状態: **【E】**
- `--font-sans`はシステムフォントスタック(`-apple-system, ..., "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", system-ui, sans-serif`)のみ。Webフォント・特徴的な書体は未導入
- 見出しは`clamp()`による可変サイズ
- design4で特定の書体・サイズスケールが指定される場合、方針決定が必要

### Colors — 状態: **【E】**
- `src/app/globals.css`にコメントで明記: `--color-accent`は**「placeholder value pending official brand color confirmation」**(正式ブランドカラー未確定)
- 白基調(`--color-white` / `--color-surface`)・黒系(`--color-black` / `--color-charcoal` / `--color-gray`)は実装済みだが、具体的なHEX値がdesign4のマスターと一致しているかは未確認

### Icons — 状態: **【D】**
- サイト全体でアイコンが存在するのは「Wir Journeyが選ばれる理由」の4種のみ(自作インラインSVG)
- それ以外のセクション(取引の流れ、こんなお悩みはありませんか？等)にはアイコン・視覚記号がない
- 統一的なアイコンシステムは未構築

### Responsive CSS — 状態: **【B】**
- 各コンポーネントが個別に`@media (min-width: ...)`を持つ(主なブレークポイント: `640px` / `768px` / `900px` / `1024px`)
- モバイル固定CTAの分だけ`body`に`padding-bottom: 4.5rem`を付与(`767px`以下)
- 実ブラウザ・実機での崩れ確認は今回のセッションでは未実施(コード上の実装のみ確認)

## 4. 下層ページの状態

### /products — 状態: **【B】**
- 実装ファイル: `src/app/products/page.js` / `products.module.css`
- 使用コンポーネント: `Breadcrumb`, `Section`, `SectionTitle`, `PhotoFrame`, `Badge`
- 使用画像: なし(7商品すべて`PhotoFrame`プレースホルダー)
- Desktop: `640px`で2列、`1024px`で3列のグリッド / Mobile: 1列
- 現在の実装状態: 4シリーズ別に7商品を一覧表示、COMING SOONバッジのみ(Featuredバッジは削除済み)
- デザイン上さらに調整が必要な箇所: 商品写真なしでは訴求力が弱い

### /products/[slug] — 状態: **【B】**
- 実装ファイル: `src/app/products/[slug]/page.js` / `product.module.css`
- 使用コンポーネント: `Breadcrumb`, `Section`, `PhotoFrame`, `Badge`, `Button`
- 使用画像: なし
- Desktop: `900px`で2カラム(写真+情報) / Mobile: 1カラム
- 現在の実装状態: 商品概要・仕様表・導入シーン・商品別FAQ・CTAまで一通り実装済み。JSON-LD(Product/Breadcrumb)も出力
- デザイン上さらに調整が必要な箇所: 商品写真、仕様表のビジュアル強化

### /our-story(現状は /about) — 状態: **【C】**
- 実装ファイル: `src/app/about/page.js` / `about.module.css`
- 使用コンポーネント: `Breadcrumb`, `Section`, `SectionTitle`, `PhotoFrame`
- 使用画像: なし
- Desktop: `900px`で2カラム / Mobile: 1カラム
- 現在の実装状態: Draft 0.8確定原稿(嘉住商店創業・祖母のエピソード)を1ブロックで掲載するのみの、非常にシンプルな単一セクション構成
- デザイン上さらに調整が必要な箇所・コンテンツ不足: ページとして単一セクションのみで情報量が少なく、「OUR STORY」単独ページとしての作り込みが今後必要。URLを`/our-story`にする場合はルーティング変更も必要(未実施)

### /faq — 状態: **【A】**
- 実装ファイル: `src/app/faq/page.js` / `faq.module.css`
- 使用コンポーネント: `Breadcrumb`, `Section`, `SectionTitle`
- 使用画像: なし(テキストのみで問題ない性質のページ)
- Desktop / Mobile: 同一の縦積みレイアウト
- 現在の実装状態: カテゴリ別(お取引について/商品について/OEMについて/その他)にFAQPage JSON-LD付きで実装済み。「法人向けFAQ」表現は使用していない

### /contact — 状態: **【E】**
- 実装ファイル: `src/app/contact/page.js` / `contact.module.css`、フォーム本体: `src/components/forms/ContactForm.jsx`
- 使用コンポーネント: `Breadcrumb`, `Section`, `SectionTitle`, `ContactForm`
- 使用画像: なし
- Desktop / Mobile: `narrow`指定で幅を制限した1カラムフォーム、`ContactForm.module.css`で`640px`以上は2カラム(メール/電話番号のみ)
- 現在の実装状態: 会社名・担当者名・メール・電話・業種・相談内容・希望商品・導入シーン・導入希望時期・本文のバリデーション付きフォームが実装済み。送信は`/api/contact`へPOST(メール通知は未接続、ログ出力のみ)
- 判断待ちの理由: 4章の方針により、今後CONTACTを独立ページからHOME末尾のページ内スクロールへ変更する可能性があり、独立ページとしての作り込みを続けるかどうかは方針確定待ち

## 5. 画像一覧

プロジェクト全体(`node_modules`・`.next`・`.git`を除く)を検索した結果、**JPG/JPEG/PNG/WEBP/SVGファイルは1点も存在しません**。`public/`ディレクトリも空です。

| ファイル名 | 使用箇所 | 未使用か | 何の画像か判断できるか |
|---|---|---|---|
| `src/app/favicon.ico` | Next.jsの標準favicon(自動的に`<link rel="icon">`として使用) | 使用中(自動適用) | 旧プロトタイプ由来のファイルで、正式なWir Journeyロゴかどうか未確認 |

サイト内に見える視覚要素は以下の2種類のみです。

1. **`PhotoFrame`コンポーネントによるプレースホルダー**(実写真が入る予定の枠。各所で`src`未指定のため、キャプション付きの点線ボックスとして表示される)
2. **`WhyWirJourney.jsx`内の自作インラインSVGアイコン4種**(コード内に直接記述されたパスデータ、外部ファイルなし)

**外部の画像ファイル(実写真・ロゴ・アイコンファイル等)はプロジェクト内に一切存在しません。**

## 6. 不足している画像

### HERO
- メインビジュアル(現状`PhotoFrame`プレースホルダーのみ、写真かイラストか等の方向性も未確定)

### こんなお悩みはありませんか？
- 画像枠自体が実装されていない。装飾は CSS の「?」記号のみ。写真・イラストを入れるかどうかの判断が必要

### 導入店舗様の声
- 3店舗(ホテルカンラ京都/すみれ珈琲/GREEN TERRACE)いずれも店舗写真・商品提供シーンの写真なし(架空写真は生成していません)

### PRODUCTS(HOME)
- 4シリーズそれぞれの商品写真・素材写真が一切なし(現状はテキストラベルのみ)

上記に加え、`/products`・`/products/[slug]`の7商品写真、`/about`(OUR STORY)のブランドストーリー関連写真も未設定です。

## 7. CASE STUDIES / FOR BUSINESSの依存関係

### CASE STUDIES
- **現在存在するページ**: `/case-studies`(`src/app/case-studies/page.js`)。データは`src/lib/data/caseStudies.js`(実データなし、空配列)
- **Header / Footerからのリンク**: `NAV_LINKS`(`src/lib/constants.js`)経由でHeader・Footer両方に表示中
- **HOMEからのリンク**: **なし**(HOME上の「CASE STUDIES」セクション・リンクは既に削除済み)
- **sitemapへの登録**: `src/app/sitemap.js`の`staticPaths`に`/case-studies`が含まれている
- **他ページからの参照**: `case-studies/page.js`自身以外に、`caseStudies`データやこのページへの直接リンクを行っている箇所はなし
- **削除した場合に影響する箇所**: `NAV_LINKS`(Header/Footer両方に表示が消える)、`sitemap.js`の`staticPaths`。`src/lib/data/caseStudies.js`はこのページ専用のため、ページ削除時は同時に整理可能

### FOR BUSINESS
- **現在存在するページ**: `/for-business`(`src/app/for-business/page.js`)
- **Header / Footerからのリンク**: `NAV_LINKS`経由でHeader・Footer両方に表示中
- **HOMEからのリンク**: **なし**(HOME上に専用セクションは存在しない)
- **sitemapへの登録**: `src/app/sitemap.js`の`staticPaths`に`/for-business`が含まれている
- **他ページからの参照**: なし。ただし`for-business/page.js`は共通コンポーネント`AdoptionFlow`(`src/components/sections/AdoptionFlow.jsx`)をHOMEと共用している。**`AdoptionFlow`自体はHOMEでも使用されているため、`/for-business`ページを削除しても`AdoptionFlow`コンポーネントは削除してはいけません**
- **削除した場合に影響する箇所**: `NAV_LINKS`、`sitemap.js`の`staticPaths`。`for-business.module.css`・`infoBlocks`の内容はこのページ専用のため削除時に同時に整理可能

**今回はいずれも削除・変更していません。**

## 8. デザイン上の未完了事項

- HOME全体のビジュアル最終化(design4との突き合わせ未実施)
- アクセントカラーのHEX値が「暫定値」であることがコード上に明記されており、正式カラーが未確定
- タイポグラフィがシステムフォントのみで、特徴的な書体の採用有無が未確定
- サイト全体で写真素材が1点も存在しない(全ページでプレースホルダー運用)
- アイコンが「Wir Journeyが選ばれる理由」の4点のみで、統一的なアイコンシステムがない
- 実ブラウザ・実機でのレスポンシブ崩れチェックが未実施
- ロゴ・favicon(`favicon.ico`)が正式なブランドアセットかどうか未確認(旧プロトタイプ由来のファイル)
- `/about`→`/our-story`のURL整理、`/case-studies`・`/for-business`の削除、CONTACTのHOME内スクロール化はいずれも方針決定のみで未実装

## 9. 明日Claude Designで優先して決めること

1. HEROのビジュアル方向性(写真の有無・構図・雰囲気)の確定
2. カラーパレットの正式HEX確定(特にアクセントカラーは現状プレースホルダー明記)
3. タイポグラフィ(書体・サイズスケール)の確定
4. 「導入店舗様の声」に店舗写真を加えるか、テキストのみで通すかの決定
5. PRODUCTS(HOME)セクションの視覚的な作り込み方針(現状は文字のみの4ブロック)
6. 「こんなお悩みはありませんか？」セクションに視覚要素(画像・アイコン)を加えるかの決定
7. アイコンシステムの方向性(「Wir Journeyが選ばれる理由」の4アイコンの最終化、他セクションへの展開有無)
8. Header/Footerの最終ビジュアル(ロゴ配置・CTAボタンの見え方)
9. `/about`(OUR STORY)単独ページの構成拡充方針
10. CASE STUDIES・FOR BUSINESSページの削除タイミング、CONTACTのHOME内スクロール化の実装方針

## 10. VS Code実装時に注意すること

- Claude Design(design4)をデザインの正とし、VS Code側の既存実装を理由なく初期状態へ戻さないこと
- 技術方針(JavaScript + 通常CSS、TypeScript/Tailwind不使用)は維持すること
- 商品データ(`src/lib/data/products.js`)・導入店舗様の声(`storeVoices.js`)・OUR STORY原稿など、これまで確定した実データ・コピーは要約・改変しないこと
- 架空の商品・店舗・導入実績・顧客の声・写真を新たに作成しないこと。画像が必要な箇所は`PhotoFrame`のプレースホルダー運用を継続すること
- CTAは`src/lib/constants.js`の`PRIMARY_CTA`等の定数を参照し、文言をハードコードしないこと
- `CASE STUDIES` / `FOR BUSINESS`の削除、`/about`→`/our-story`のURL変更、CONTACTのHOME内スクロール化は、いずれも本セッションでは未着手の方針決定事項であり、実装時は影響範囲(7章参照)を踏まえて対応すること
