# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Wir Journey BtoB Webサイト 開発ルール

## 1. プロジェクトの目的

Wir Journeyの商品を導入・仕入れしたい法人からの問い合わせ獲得を最上位目的とするBtoB営業サイト。

BtoC ECサイトではない。

## 2. コアターゲット

京都市内の事業者。

重点ターゲット：
- ホテル宴会
- ホテルラウンジ
- 少人数で運営する高級レストラン

対象範囲：
- ホテル
- 旅館
- レストラン
- カフェ
- バー
- 小売店
- ギフトショップ
- 道の駅・地域産品販売施設等

## 3. 顧客インサイト

京都らしく、他店とは違うドリンクを取り入れたい。

しかし、京都産素材を使ったドリンクを探しても選択肢が多くない。
あったとしても抹茶や柚子など定番素材に偏りやすく、ドリンクのバリエーションを増やしにくい。

一方、自社で商品開発を行うには、
- 素材選定
- レシピ開発
- 商品化
- パッケージ
- デザイン
- 製造

などの負担が大きい。

さらに、1社だけで商品開発すると、大きな製造ロットや在庫を単独で抱えるリスクもある。

## 4. 提供価値

京都の素材とクラフトの発想から生まれた完成されたクラフトドリンクを提供することで、事業者の商品開発にかかる負担を軽減する。

京都市内を中心に、小ロットから対応できることも重要な提供価値とする。

## 5. 差別化

以下を組み合わせた価値を提供する。

- 京都素材を使ったドリンクの選択肢
- クラフトドリンクとしての商品開発力
- 完成された商品として導入できること
- 小ロットから対応できること
- 京都市内を中心とした地域密着型の対応

自社開発と一般的な既製品の間にあるニーズを満たす。

## 6. 正式タグライン

「京都のドリンクに、もっと選択肢を。」

このタグラインを正式なタグラインとして扱う。

## 7. 商品方針

京檸檬クラフトコーラ（RTD）をFeatured Productとして強く訴求する。

ただし、WebサイトをRTD専用サイトにはしない。

シロップ商品も含め、Wir Journeyの商品ラインナップとして一体的に扱う。

RTDとシロップを別事業のように完全分断しない。

業務用商品として1Lパウチも展開している。

業務用商品は約30杯を提供できる仕様として扱う。

ただし、個別の商品仕様については正式な商品仕様資料を優先し、推測しない。

## 8. 小ロット

外向きのWebサイトでは具体的な最低発注数量（MOQ）を推測して掲載しない。

基本表現は「小ロットから対応」。

## 9. 表現ルール

外向きのWebサイトでは「NB商品」という専門用語を使用しない。

「一杯」という表現を使用しない。

## 10. デザイン

白を基調とする。

白の余白、写真、タイポグラフィ、素材感によって、上質さ・クラフト感・京都らしさを表現する。

典型的な和風装飾や観光地的な京都表現には寄せない。

「京都らしいけれど、京都っぽすぎない」表現を目指す。

優先順位：
1. 分かりやすさ
2. 信頼感
3. 商品の魅力
4. ブランド世界観
5. 装飾性

## 11. 技術方針

正式版は以下で構築する。

- Next.js
- App Router
- JavaScript
- 通常のCSS
- Git
- GitHub
- Vercel

使用しない：
- TypeScript
- Tailwind CSS
- CMS

現在のリポジトリに存在するTypeScript + Tailwind CSSの実装はプロトタイプであり、正式版の技術方針ではない。

必要であれば既存コードを削除・置換してよい。

## 12. コンテンツルール

存在しないものを創作しない。

特に以下は禁止：
- 架空の商品
- 架空の店舗
- 架空の導入実績
- 架空の顧客の声
- 架空の商品仕様
- 架空の数字
- 架空のブランドストーリー

不明な情報は推測せず、設計書または正式資料を確認する。

## 13. 設計書

「Wir Journey BtoB Webサイト設計書 Draft 0.8」を正式なサイト設計の原本として扱う。

設計書に記載された内容を勝手に変更・追加・削除しない。

実装上判断が必要で設計書に記載がない場合は、勝手に重要な仕様を決定せず、確認する。

## 14. 開発方針

既存サイトを維持することを目的としない。

現在のコードはプロトタイプとして参考にする。

正式版はDraft 0.8に基づいて必要な部分を作り直す。

ただし、既存コードの中に再利用価値の高い構造や実装があれば、内容を確認した上で利用してよい。

## 15. Git

大きな変更を行う前にGitの状態を確認する。

重要なマイルストーンではcommitする。

ユーザーの指示なくGitHubへのpushは行わない。

## 16. 実装前のルール

実装前に設計書と現在のコードを確認する。

大規模な変更を行う場合は、まず変更計画を提示する。

ユーザーの確認が必要な重要な仕様を勝手に決定しない。

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
