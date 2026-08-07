# Wir Journey 公式サイト

京都発クラフトドリンクメーカー「Wir Journey」のブランドサイトです。Next.js（App Router）+ TypeScript + Tailwind CSS v4 で実装しています。

## セットアップ

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # 本番ビルド
npm run lint      # ESLint
```

※ ビルド時に next/font/google が Google Fonts（fonts.googleapis.com）へアクセスします。インターネットに接続できる通常の開発・デプロイ環境（Vercel / Netlify 等）であれば問題ありません。

## 公開前に必ず対応してください（TODO）

実データ・実連携が未確定の箇所は、コード中に TODO コメントまたはプレースホルダー文言として明示しています。

| 項目 | 場所 | 内容 |
|---|---|---|
| サイトURL | src/lib/constants.ts の SITE.url | 実際の独自ドメインに差し替え |
| BASEショップURL | src/lib/constants.ts の SITE.baseShopUrl | 実際のBASEショップURLに差し替え |
| 問い合わせ受信メール | src/lib/constants.ts の SITE.contactEmail、および src/app/api/contact/route.ts | 実際の連絡先に差し替え、メール送信サービス（Resend / SendGrid / nodemailer等）と接続 |
| 導入事例 | src/lib/data/case-studies.ts | 現在すべて isPlaceholder: true のサンプルです。実店舗様の許諾が取れ次第、店舗名・エリア・コメントを実データに差し替えてください |
| 写真 | 各ページの PhotoFrame コンポーネント | src未指定時はキャプション付きプレースホルダー表示になります。実写真のパス/URLを指定してください |
| OGP画像 | src/app/opengraph-image.tsx | 現状はテキストのみの自動生成画像です。実写真を使う場合は本ファイルを差し替えてください |

## ディレクトリ構成

```
src/
  app/                # ルーティング（App Router）。page.tsxはレイアウトのみ記述
  components/
    layout/           # Header, Footer
    sections/         # TOPページ等で使う大ブロック
    ui/                # 汎用UIパーツ（Button, Card, Section, PhotoFrame 等）
    forms/             # フォーム関連
  lib/
    data/              # 商品・導入事例・ブログ・FAQのコンテンツ（将来のCMS移行時はここを差し替え）
    constants.ts       # サイト全体の定数（URL、ナビゲーション、CTA文言）
    seo.ts             # metadata / JSON-LD生成ヘルパー
    cn.ts              # クラス名結合ユーティリティ
  types/               # 型定義
```

## デザインシステム

src/app/globals.css の @theme ブロックに集約しています。

- カラー: paper（和紙白 #F6F3EC）/ ink（墨 #22261F）/ moss（苔・ブランド基調 #4B5D42）/ kyo-gold（京檸檬の金 #B8922E）/ stone（罫線 #C7C0AF）
- 書体: 見出し=Shippori Mincho、本文=Zen Kaku Gothic New、欧文ロゴ=EB Garamond
- シグネチャー要素: BrushDivider（筆致を模した罫線）をセクション区切りに使用
- アニメーション: Revealコンポーネントによるフェードインのみ。prefers-reduced-motionに対応

## 今後の拡張

- CMS導入: src/lib/data/*.ts をAPI/CMS呼び出しに差し替えれば移行可能
- 多言語対応: src/app 配下に [locale] セグメントを追加する形で拡張可能な構成にしています
- 商品・ブログ・導入事例の追加: 各 src/lib/data/*.ts に配列要素を追加するだけで反映されます

## デプロイ

Vercel（Next.js公式）のほか、Netlifyでも運用可能です。
