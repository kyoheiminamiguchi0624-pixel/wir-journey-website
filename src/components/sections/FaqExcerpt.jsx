import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { faq } from "@/lib/data/faq";
import styles from "./FaqExcerpt.module.css";

export function FaqExcerpt() {
  return (
    <Section>
      <SectionTitle eyebrow="FAQ" title="よくあるご質問" align="left" />
      <dl className={styles.list}>
        {faq.slice(0, 3).map((item) => (
          <div key={item.question} className={styles.item}>
            <dt>{item.question}</dt>
            <dd>{item.answer}</dd>
          </div>
        ))}
      </dl>
      <div className={styles.more}>
        <Button href="/faq" variant="outline">
          FAQをすべて見る
        </Button>
      </div>
    </Section>
  );
}
