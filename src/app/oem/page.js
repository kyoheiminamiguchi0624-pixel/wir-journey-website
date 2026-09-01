import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";
import { OEM_CTA } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import styles from "./oem.module.css";

export const metadata = buildMetadata({
  title: "OEM",
  description:
    "Wir JourneyのOEMは、御社ブランドの商品を企画・開発・製造まで一貫して担う仕組みです。20L〜の小ロットからご相談いただけます。",
  path: "/oem",
});

// docs/handoff/pages/OEM.dc.html 271-297行目準拠(確定原稿)。
const STRENGTHS = [
  {
    title: "クラフトドリンク専門の開発力",
    body: "創業以来、無添加・無着色で体にやさしく、ご家族で安心して楽しめるクラフトシロップの開発を行ってきました。培ってきた知見を活かし、味、香り、飲みやすさのバランスまで設計します。",
  },
  {
    title: "業界最高レベルの小ロット対応",
    body: "一般的にクラフトシロップの開発は50L〜が最小ロットとされることが多い中、私たちは20L〜の小ロット製造を実現。初めての商品開発やテスト販売にも取り組みやすい環境をご提供します。",
  },
  {
    title: "女性目線・トレンドを意識した味設計",
    body: "開発者自身がアルコールを飲まないこと、また女性である視点を活かし、ノンアルコール需要や現代の嗜好に寄り添った、やさしく飲みやすい味わい設計を得意としています。",
  },
  {
    title: "地域素材、ストーリーの企画提案",
    body: "開発者は農業に携わる家庭で育ち、農業高校出身の背景があります。生産者様の想いや背景を大切にしながら、素材の魅力を最大限に引き出す商品開発を行います。",
  },
];

const USE_CASES = [
  {
    title: "人気メニューの物販化",
    desc: "飲食店などの人気メニューを、店頭・EC・ギフトなどで販売できる商品へ。",
    image: "/images/oem/oem-usecase-retail.webp",
  },
  {
    title: "地域素材や個性を活かした商品化",
    desc: "地域素材や農産物、生産者のストーリーなどを活かしたオリジナル商品へ。",
    image: "/images/oem/oem-usecase-local.webp",
  },
  {
    title: "お土産・ギフト商品",
    desc: "特産品や記念品など、地域やブランドの価値を伝える商品へ。",
    image: "/images/oem/oem-usecase-gift.webp",
  },
];

const FLOW_STEPS = [
  { label: "相談・ヒアリング", desc: "作りたい商品のイメージや用途をお聞きします。" },
  { label: "商品設計・試作", desc: "素材・味・仕様を設計し、試作を重ねます。" },
  { label: "仕様決定・発注", desc: "内容を確定し、お見積り・ご発注へ進みます。" },
  { label: "製造・納品", desc: "製造後、納品まで進めます。" },
];

const SCENES = [
  "カフェのオリジナルドリンクメニュー",
  "ホテルのウェルカムドリンク",
  "観光地向けのお土産商品",
  "季節限定、イベント限定商品",
  "コラボ商品（キャラクターコラボや生産者様との連携）など",
];

export default function OemPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "OEM", path: "/oem" }]} />

      <Section>
        <div className={styles.intro}>
          <div className={styles.introImage}>
            <PhotoFrame src="/images/oem/oem-story-photo.webp" alt="スパイス・素材を調合する商品開発の様子" ratio="4 / 3" />
          </div>
          <div>
            <p className={styles.eyebrow}>ABOUT OEM</p>
            <h1 className={styles.sectionHeading}>Wir JourneyのOEMとは？</h1>
            <p className={styles.introBody}>
              御社ブランドの商品を、Wir Journeyが企画・開発・製造まで一貫して担う仕組みです。ブランド独自の世界観はそのままに、設備投資や製造体制を持たずに、オリジナルのクラフトドリンクを展開いただけます。
            </p>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <p className={styles.eyebrow}>STRENGTHS</p>
        <h2 className={styles.sectionHeading}>Wir Journeyの強み</h2>
        <div className={styles.strengthsGrid}>
          {STRENGTHS.map((item, index) => (
            <div key={item.title} className={styles.strengthItem}>
              <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.strengthTitle}>{item.title}</h3>
              <p className={styles.strengthBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <p className={styles.eyebrow}>WHAT WE CAN MAKE</p>
        <h2 className={styles.sectionHeading}>こんな商品開発に</h2>
        <div className={styles.useCaseGrid}>
          {USE_CASES.map((item, index) => (
            <div key={item.title}>
              <div className={styles.useCaseImage}>
                <PhotoFrame src={item.image} alt="" ratio="4 / 3" />
              </div>
              <span className={styles.numSmall}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.useCaseTitle}>{item.title}</h3>
              <p className={styles.useCaseDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <p className={styles.eyebrow}>FLOW</p>
        <h2 className={styles.sectionHeading}>商品開発の流れ</h2>
        <p className={styles.flowLead}>初めてのOEMでも、相談から納品までの流れをイメージしていただけます。</p>
        <div className={styles.flowGrid}>
          {FLOW_STEPS.map((item, index) => (
            <div key={item.label} className={styles.flowItem}>
              <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.flowLabel}>{item.label}</h3>
              <p className={styles.flowDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
        <p className={styles.flowNote}>
          開発期間の目安：企画・試作 約1〜3ヶ月／製造準備 約1〜2ヶ月／製造・納品 約2〜4週間。原料や試作回数、時期により前後します。
        </p>
      </Section>

      <Section tone="surface">
        <div className={styles.scenesBlock}>
          <div className={styles.scenesImage}>
            <PhotoFrame src="/images/oem/oem-usecase-photo.webp" alt="活用シーンを象徴する写真" ratio="4 / 3" />
          </div>
          <div>
            <p className={styles.eyebrow}>SCENES</p>
            <h2 className={styles.sectionHeadingSm}>活用シーン</h2>
            <div className={styles.scenesList}>
              {SCENES.map((scene) => (
                <div key={scene} className={styles.scenesItem}>
                  {scene}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className={styles.smallLot}>
          <p className={styles.eyebrow}>SMALL LOT</p>
          <h2 className={styles.sectionHeadingSm}>
            まず小さく、
            <br />
            試してみる。
          </h2>
          <p className={styles.smallLotBody}>
            Wir JourneyのOEMは、20L〜を目安にご相談いただけます。初めてのOEM、テスト販売、限定商品など、小さく始めたい事業者様にもご相談いただきやすい規模です。
          </p>
          <p className={styles.smallLotNote}>20Lの場合、250mlボトルで約80本が目安です（容器・仕様により変動します）。</p>
        </div>
      </Section>

      <Section className={styles.faqLinkSection}>
        <div className={styles.faqLink}>
          <p className={styles.faqLinkLead}>価格・最小ロット・納期など、具体的な条件についてはFAQでもご案内しています。</p>
          <a href="/faq" className={styles.faqLinkAnchor}>
            OEMについてよくあるご質問
          </a>
        </div>
      </Section>

      <Section tone="cta">
        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaHeading}>OEMについて相談する</h2>
          <p className={styles.ctaBody}>まだ具体的な商品が決まっていない段階でも、お気軽にご相談ください。</p>
          <Button href={OEM_CTA.href} className={styles.ctaButton}>
            {OEM_CTA.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
