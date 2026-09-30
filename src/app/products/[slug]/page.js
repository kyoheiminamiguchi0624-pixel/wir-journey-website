import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { products, getProductBySlug } from "@/lib/data/products";
import { PRIMARY_CTA } from "@/lib/constants";
import { buildMetadata, productJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./product.module.css";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

// Google検索結果でのdescription表示切れ対策(全角90文字以内)。products.js内の
// description(Draft 0.8確定原稿、本文表示にも使用)は変更せず、meta description
// 専用の要約文をここに個別保持する。各要約はproducts.jsのdescriptionに書かれている
// 情報のみを用いて圧縮したもの(新しい効能・数値・キャッチコピーは追加していない)。
// 該当スラッグがここに無い場合はproduct.descriptionをそのまま使用する
// (kyoto-dirty-chaiは元のdescriptionが既に全角90文字以内のため未掲載)。
const PRODUCT_META_DESCRIPTIONS = {
  "kyo-remon-craft-cola":
    "京檸檬を使ったWir Journey初のRTDクラフトコーラ。割らずに冷やして開けるだけで飲める250mlボトルで、小売店・観光施設・イベントでの物販に。",
  "kyo-remon-craft-sparkling":
    "京都育ちの京檸檬を使った、食事に合うクラフトスパークリング。炭酸水で割るノンアルコールドリンクで、ホテル・レストランのメニューやウェルカムドリンクに。",
  "kyoto-ringo-no-cola":
    "長野県信州産の完熟りんご100%果汁とスパイスから生まれたフルーティーなクラフトコーラ。炭酸水で割るほか、アレンジドリンクやデザートにも使えます。",
  "kyoto-ginger-no-cola":
    "ジンジャーとスパイスの風味を楽しむクラフトコーラ。炭酸水で割るほか、アレンジドリンクにも。カフェやレストラン、バーに取り入れやすいシロップです。",
  "kyoto-spice-no-chai":
    "アッサム茶葉とスパイスのクラフトチャイ。ミルクで割るチャイラテが定番で、アレンジドリンクにも。カフェやホテルラウンジ向けの新しいドリンクメニューに。",
  "kyobancha-craft-latte":
    "協栄製茶とのコラボ商品。京番茶のスモーキーで香ばしい香りを活かしたクラフトラテのシロップ。牛乳や豆乳で割るだけで、京都らしいカフェメニューに。",
  "kyo-hop-craft-soda":
    "エビバデ京ホップ（合同会社WOW）とのコラボ商品。京都市内で栽培されたホップを使った、華やかな香りのノンアルコールクラフトソーダのシロップ。",
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.name,
    description: PRODUCT_META_DESCRIPTIONS[product.slug] ?? product.description,
    path: `/products/${product.slug}`,
  });
}

// docs/handoff/pages/Product-*.dc.html準拠。1商品につき小売用・業務用の2ページが
// handoffには存在するが、Next.js側はスラッグ1本のページに両方をまとめて表示する
// (docs/handoff/PROJECT_STRUCTURE.mdのページ対応表準拠)。
export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const retailImage = `/images/products/product-${product.slug}-retail.webp`;
  // businessImage: null の商品は業務用パウチの写真が未着のため「画像準備中」表示にする。
  const businessImage = product.businessImage === null ? undefined : `/images/products/product-${product.slug}-business.webp`;

  return (
    <>
      <Breadcrumb items={[{ name: "PRODUCTS", path: "/products" }, { name: product.name, path: `/products/${product.slug}` }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            productJsonLd(product),
            breadcrumbJsonLd([
              { name: "PRODUCTS", path: "/products" },
              { name: product.name, path: `/products/${product.slug}` },
            ]),
          ]),
        }}
      />

      <Section tone="surface" className={styles.heroSection}>
        <p className={styles.eyebrow}>{product.seriesLabel}</p>
        <h1 className={styles.name}>{product.name}</h1>
        {product.tagline && <p className={styles.tagline}>{product.tagline}</p>}
      </Section>

      <Section>
        <div className={styles.detail}>
          <div className={styles.imageBox}>
            <PhotoFrame
              src={product.status === "available" ? retailImage : undefined}
              alt={`${product.name}（小売用）の商品写真`}
              ratio="4 / 5"
            />
          </div>
          <div className={styles.detailBody}>
            {product.features ? (
              <>
                <p className={styles.label}>特徴</p>
                <p className={styles.text}>{product.features}</p>
                {product.taste && (
                  <>
                    <p className={styles.label}>味わい</p>
                    <p className={styles.text}>{product.taste}</p>
                  </>
                )}
                {product.recommend && (
                  <>
                    <p className={styles.label}>おすすめの飲み方・用途</p>
                    <p className={styles.text}>{product.recommend}</p>
                  </>
                )}
                <div className={styles.specGrid}>
                  <div className={styles.specCard}>
                    <p className={styles.specLabel}>内容量</p>
                    <p className={styles.specValue}>{product.retailSize}</p>
                  </div>
                  <div className={styles.specCard}>
                    <p className={styles.specLabel}>賞味期限</p>
                    <p className={styles.specValue}>{product.shelfLife}</p>
                  </div>
                  <div className={styles.specCard}>
                    <p className={styles.specLabel}>保存方法</p>
                    <p className={styles.specValue}>{product.storage}</p>
                  </div>
                </div>
                {product.ingredients && (
                  <>
                    <p className={styles.label}>原材料</p>
                    <p className={styles.ingredients}>{product.ingredients}</p>
                  </>
                )}
                {product.dilution && (
                  <>
                    <p className={styles.label}>推奨希釈比率</p>
                    {product.dilution.map((line) => (
                      <p key={line} className={styles.text}>
                        {line}
                      </p>
                    ))}
                  </>
                )}
                {product.howToServe && (
                  <>
                    <p className={styles.label}>飲み方</p>
                    <p className={styles.text}>{product.howToServe}</p>
                  </>
                )}
              </>
            ) : product.prelaunchNote ? (
              <p className={styles.text}>{product.prelaunchNote}</p>
            ) : (
              <>
                <div className={styles.badges}>
                  <Badge>COMING SOON</Badge>
                </div>
                <p className={styles.text}>{product.description}</p>
                {product.specNote && <p className={styles.specNote}>{product.specNote}</p>}
              </>
            )}
          </div>
        </div>
      </Section>

      {product.businessNote && (
        <Section tone="surface">
          <p className={styles.eyebrowBusiness}>業務用パウチ</p>
          <h2 className={styles.name}>{product.name}（業務用）</h2>
          {product.businessTagline && <p className={styles.tagline}>{product.businessTagline}</p>}
          <div className={styles.detail}>
            <div className={styles.imageBox}>
              <PhotoFrame
                src={businessImage}
                alt={businessImage ? `${product.name}（業務用）の商品写真` : "画像準備中"}
                ratio="4 / 5"
              />
            </div>
            <div className={styles.detailBody}>
              {product.businessNote.map((paragraph) => (
                <p key={paragraph} className={styles.text}>
                  {paragraph}
                </p>
              ))}
              <div className={styles.specGrid}>
                <div className={styles.specCard}>
                  <p className={styles.specLabel}>内容量</p>
                  <p className={styles.specValue}>1,000ml</p>
                </div>
                <div className={styles.specCard}>
                  <p className={styles.specLabel}>賞味期限</p>
                  <p className={styles.specValue}>{product.shelfLife}</p>
                </div>
                <div className={styles.specCard}>
                  <p className={styles.specLabel}>保存方法</p>
                  <p className={styles.specValue}>{product.storage}</p>
                </div>
              </div>
              {product.dilution && (
                <>
                  <p className={styles.label}>推奨希釈比率</p>
                  {product.dilution.map((line) => (
                    <p key={line} className={styles.text}>
                      {line}
                    </p>
                  ))}
                </>
              )}
            </div>
          </div>
        </Section>
      )}

      <Section tone="cta">
        <div className={styles.ctaBlock}>
          <p className={styles.ctaText}>
            業務用のお取引について、
            <br />
            お気軽にご相談ください。
          </p>
          <Button href={PRIMARY_CTA.href} className={styles.ctaButton}>
            {PRIMARY_CTA.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
