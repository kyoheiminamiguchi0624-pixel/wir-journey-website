import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { companyProfile } from "@/lib/data/company";
import styles from "./about.module.css";

export const metadata = buildMetadata({
  title: "ABOUT US",
  description: "Wir Journeyのブランドストーリー。祖母のために生まれた一杯のコーラから始まった、京都・西陣のクラフトドリンクメーカーです。",
  path: "/about",
});

// docs/handoff/pages/About.dc.html 94-100行目準拠(確定原稿、要約・改変禁止)。
const STORY_PARAGRAPHS = [
  "祖父が昭和16年に創業した「嘉住商店」は、清涼飲料水を取り扱っていた歴史があります。そんな環境で暮らしていた祖母は、コーラが大好きで、よく市販のコーラを口にしていました。",
  "しかし、年齢を重ねるにつれ、一本を飲み切ることが難しくなり、ひと口だけ飲んでは残してしまうようになりました。",
  "その姿を見て、「祖母の好きなものを使って、最後までおいしく飲めるコーラをつくりたい。」そう思ったことが、Wir Journeyのものづくりの原点です。",
  "そして私たちは、祖父が清涼飲料水を通じて地域に親しまれてきた想いを受け継ぎ、京都・西陣の地から、京都府産の素材とスパイスを掛け合わせた新しい味わいづくりに挑戦しています。",
  "誰かのために作り始めた一杯が、世代を問わず、多くの方の日常に寄り添い、京都の新たな魅力を伝える一杯となること。そして、京都で生まれたブランドとして、世界へ京都の魅力を届けていくこと。",
  "そんな願いを込めて、私たちは今日も京都から一つひとつ丁寧にものづくりを続けています。",
];

// docs/handoff/pages/About.dc.html 224-226行目準拠。
const STRENGTHS = [
  {
    title: "原材料の強み",
    body: "市場に出回らない希少な地域素材を、独自のルートで調達。地域に根ざしたメーカーならではの素材の調達力が強みです。",
    image: "/images/about/strength-material-photo.webp",
  },
  {
    title: "商品開発の強み",
    body: "クラフトコーラ黎明期から培ってきた確かな商品開発力。スパイスと果汁の掛け合わせを得意とし、独自のノウハウを培っています。",
    image: "/images/about/strength-development-photo.webp",
  },
  {
    title: "商品供給体制と運用のしやすさ",
    body: "最小1個から仕入れ可能。シロップ型でバックヤードを圧迫せず、割るだけで提供できるため、現場でも扱いやすい設計です。",
    image: "/images/about/strength-supply-photo.webp",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ABOUT US", path: "/about" }]} />

      <Section tone="surface">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>ABOUT US</p>
          <h1 className={styles.heroTitle}>Wir Journeyについて</h1>
        </div>
      </Section>

      <Section>
        <div className={styles.whyIntro}>
          <div className={styles.whyImage}>
            <PhotoFrame src="/images/about/why-visual.webp" alt="創業当時、または現在のものづくりの様子" ratio="4 / 3" />
          </div>
          <div>
            <p className={styles.eyebrow}>WHY WIR JOURNEY</p>
            <h2 className={styles.sectionHeading}>
              祖母のために生まれた、
              <br />
              一杯のコーラ
            </h2>
            <p className={styles.pullQuote}>
              私たちが最初の商品として「リンゴノコーラ」を開発したきっかけは、祖母の存在でした。
            </p>
          </div>
        </div>
        <div className={styles.storyBody}>
          {STORY_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <p className={styles.eyebrow}>STRENGTHS</p>
        <h2 className={styles.sectionHeading}>Wir Journeyの強み</h2>
        <div className={styles.strengthsGrid}>
          {STRENGTHS.map((item, index) => (
            <div key={item.title} className={styles.strengthItem}>
              <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.strengthImage}>
                <PhotoFrame src={item.image} alt="" ratio="4 / 3" />
              </div>
              <h3 className={styles.strengthTitle}>{item.title}</h3>
              <p className={styles.strengthBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className={styles.foundersBlock}>
          <p className={styles.eyebrow}>ABOUT US</p>
          <h2 className={styles.sectionHeading}>私たちについて</h2>
          <p className={styles.foundersLead}>
            Wir Journeyを運営しているのは、私たち夫婦です。祖父から受け継いだ想いと、祖母のために生まれた一杯から始まったものづくりを、京都・西陣の地で続けています。
          </p>
          <div className={styles.foundersImage}>
            <PhotoFrame src="/images/about/about-founders-photo.webp" alt="Wir Journeyを運営する夫婦の写真" ratio="3 / 2" />
          </div>
        </div>
      </Section>

      <Section narrow>
        <div className={styles.companyBlock}>
          <p className={styles.eyebrow}>COMPANY</p>
          <h2 className={styles.sectionHeading}>会社概要</h2>
          <dl className={styles.companyList}>
            {companyProfile
              .filter((row) => (Array.isArray(row.value) ? row.value.length > 0 : row.value))
              .map((row) => (
                <div key={row.label} className={styles.companyRow}>
                  <dt className={styles.companyLabel}>{row.label}</dt>
                  <dd className={styles.companyValue}>
                    {Array.isArray(row.value)
                      ? row.value.map((line) => <span key={line} className={styles.companyLine}>{line}</span>)
                      : row.value}
                  </dd>
                </div>
              ))}
          </dl>
        </div>
      </Section>

      <Section tone="cta">
        <div className={styles.ctaBlock}>
          <Button href={PRIMARY_CTA.href} className={styles.ctaButton}>
            {PRIMARY_CTA.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
