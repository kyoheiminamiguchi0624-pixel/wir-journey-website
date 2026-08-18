import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA, SECONDARY_CTA, LEAD_CTA } from "@/lib/constants";
import styles from "./ContactCta.module.css";

export function ContactCta() {
  return (
    <Section tone="surface">
      <div className={styles.wrap}>
        <h2>まずはお気軽にご相談ください</h2>
        <p>業務用のお取引・商品・サンプルについて、お問い合わせフォームより承っております。</p>
        <div className={styles.ctaRow}>
          <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
          <Button href={SECONDARY_CTA.href} variant="outline">
            {SECONDARY_CTA.label}
          </Button>
          <Button href={LEAD_CTA.href} variant="outline">
            {LEAD_CTA.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
