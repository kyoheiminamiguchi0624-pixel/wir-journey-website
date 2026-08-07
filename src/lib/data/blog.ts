import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "kyo-remon-story",
    title: "京檸檬クラフトスパークリングができるまで",
    category: "商品開発",
    tags: ["京檸檬", "スパークリング", "コラボレーション"],
    publishedAt: "2026-06-04",
    excerpt:
      "京檸檬プロジェクト協議会、そしてHotel Kanra Kyotoのソムリエとともに歩んだ、開発の背景をご紹介します。",
    imageAlt: "京檸檬クラフトスパークリングの開発風景",
    bodyHtml: `
      <p>2026年6月4日、Wir Journeyは新作「京檸檬クラフトスパークリング」を発売しました。</p>
      <h2>京都産レモンという選択</h2>
      <p>本商品は、宝酒造・日本果汁が運営する京檸檬プロジェクト協議会と連携し、京都産レモンの香りを最大限に生かす製法を追求しました。果皮の香り成分をどう活かすかが、開発初期からの大きなテーマでした。</p>
      <h2>ソムリエとの共同開発</h2>
      <p>Hotel Kanra Kyotoのソムリエの方にご協力いただき、単体で飲んでも、食事と合わせても成立する酸味のバランスを設計しています。ノンアルコールでありながら、食中酒のような役割を担えることを目指しました。</p>
      <h2>店舗での提案について</h2>
      <p>商品の詳しい導入メリットや提供シーンについては、商品ページをご覧ください。お取扱いにご関心をお持ちの店舗様は、お気軽にお問い合わせください。</p>
    `,
  },
  {
    slug: "kyoto-ingredient-story",
    title: "京都の生産者とつくる、という選択",
    category: "ブランドストーリー",
    tags: ["京都", "生産者", "サステナビリティ"],
    publishedAt: "2026-05-20",
    excerpt:
      "京檸檬プロジェクト協議会、エビバデ京ホップ、須知高校。Wir Journeyが京都の生産者と歩む理由を綴ります。",
    imageAlt: "京都の生産地の風景",
    bodyHtml: `
      <p>Wir Journeyは、京都の素材そのものが持つ物語を大切にしています。</p>
      <h2>顔の見える調達</h2>
      <p>レモンは京檸檬プロジェクト協議会、ホップはエビバデ京ホップ（合同会社WOW）、クロモジは須知高校からと、それぞれ京都の生産者・団体と直接つながりながら素材を調達しています。</p>
      <h2>添加物に頼らない製法へのこだわり</h2>
      <p>味の均一化のために添加物に頼るのではなく、素材そのものの個性を活かす製法を選んでいます。年によって微妙に変わる風味も、Wir Journeyにとっては素材が生きている証だと捉えています。</p>
      <h2>これからの展開</h2>
      <p>2026年9月には、合同会社WOWと共同開発中の「京ホップクラフトスパークリング（仮）」の発売も予定しています。詳細は商品ページで随時更新します。</p>
    `,
  },
  {
    slug: "wholesale-onboarding-flow",
    title: "お取扱い開始までの流れと、よくあるご質問",
    category: "お取引について",
    tags: ["卸", "導入フロー", "FAQ"],
    publishedAt: "2026-05-05",
    excerpt:
      "初めてお取扱いをご検討いただく店舗様向けに、ご相談からご提供開始までの流れを整理しました。",
    imageAlt: "商談の様子",
    bodyHtml: `
      <p>「興味はあるけれど、何から始めればいいか分からない」というお声を多くいただきます。この記事では、Wir Journeyのお取扱い開始までの一般的な流れをご紹介します。</p>
      <h2>まずはご相談から</h2>
      <p>お問い合わせフォームより、店舗の業態や気になる商品をお知らせください。折り返しご連絡し、詳細をお伺いします。</p>
      <h2>サンプルのご案内</h2>
      <p>店舗の業態やメニュー構成に応じて、おすすめの商品をご提案します。</p>
      <h2>条件のすり合わせ</h2>
      <p>数量・価格・納品方法などについて、店舗様の状況に合わせてご相談します。</p>
      <p>より詳しい流れは「お取扱いをご検討の方へ」ページ、よくある質問は「FAQ」ページもあわせてご覧ください。</p>
    `,
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2) {
  const current = getPostBySlug(slug);
  if (!current) return [];
  return blogPosts
    .filter((p) => p.slug !== slug)
    .filter((p) => p.category === current.category || p.tags.some((t) => current.tags.includes(t)))
    .slice(0, limit)
    .concat(blogPosts.filter((p) => p.slug !== slug))
    .filter((v, i, arr) => arr.findIndex((x) => x.slug === v.slug) === i)
    .slice(0, limit);
}
