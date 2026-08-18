import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import styles from "./AdoptionFlow.module.css";

// Draft 0.8 セクション16「導入までの流れ」の確定ステップ。
const steps = [
  { step: "01", label: "お問い合わせ" },
  { step: "02", label: "ご希望・用途をヒアリング" },
  { step: "03", label: "商品をご提案" },
  { step: "04", label: "サンプル・お見積り" },
  { step: "05", label: "お取引開始" },
];

export function AdoptionFlow() {
  return (
    <Section>
      <SectionTitle eyebrow="Flow" title="導入までの流れ" />
      <ol className={styles.list}>
        {steps.map((item) => (
          <li key={item.step} className={styles.item}>
            <span className={styles.step}>{item.step}</span>
            <span className={styles.label}>{item.label}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
