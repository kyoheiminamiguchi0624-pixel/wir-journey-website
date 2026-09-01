import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { AdoptionFlow } from "@/components/sections/AdoptionFlow";
import { faq } from "@/lib/data/faq";
import { PRIMARY_CTA, LEAD_CTA, SMALL_LOT_MESSAGE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import styles from "./for-business.module.css";

export const metadata = buildMetadata({
  title: "FOR BUSINESS",
  description:
    "京都市内の事業者様へ。Wir Journeyの商品の導入理由、商品形態、小ロット対応、導入までの流れをご案内します。",
  path: "/for-business",
});

const infoBlocks = [
  {
    title: "商品形態",
    body: "小売用ボトルと業務用1Lパウチをご用意しています。業務用1Lパウチは商品によって希釈・提供杯数が異なります。詳細は各商品ページをご確認ください。",
  },
  {
    title: "最小発注数量",
    body: `${SMALL_LOT_MESSAGE}。具体的な数量はお問い合わせ内容に応じてご案内します。`,
  },
  {
    title: "納期",
    body: "ご相談内容に応じてご案内します。まずはお問い合わせください。",
  },
  {
    title: "配送",
    body: "ご相談のうえ手配いたします。",
  },
  {
    title: "サンプル相談",
    body: "サンプルについてもご相談いただけます。お問い合わせフォームで「サンプルについて相談する」をお選びください。",
  },
];

export default function ForBusinessPage() {
  const businessFaq = faq.filter((item) => item.category === "business");

  return (
    <>
      <Breadcrumb items={[{ name: "FOR BUSINESS", path: "/for-business" }]} />

      <Section>
        <SectionTitle
          eyebrow="For Business"
          title="Wir Journeyを導入する"
          description="京都の素材とクラフトの発想から生まれた完成されたクラフトドリンクを、事業者様の商品開発の負担なく導入いただけます。小ロットから対応しています。"
          titleAs="h1"
        />
      </Section>

      <Section tone="surface">
        <SectionTitle eyebrow="Details" title="お取引について" align="left" />
        <div className={styles.grid}>
          {infoBlocks.map((block) => (
            <div key={block.title} className={styles.card}>
              <h3>{block.title}</h3>
              <p>{block.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <AdoptionFlow />

      {businessFaq.length > 0 && (
        <Section tone="surface">
          <SectionTitle eyebrow="FAQ" title="よくあるご質問" align="left" />
          <dl className={styles.faqList}>
            {businessFaq.map((item) => (
              <div key={item.question} className={styles.faqItem}>
                <dt>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      <Section>
        <div className={styles.ctaBlock}>
          <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
          <Button href={LEAD_CTA.href} variant="outline">
            {LEAD_CTA.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
