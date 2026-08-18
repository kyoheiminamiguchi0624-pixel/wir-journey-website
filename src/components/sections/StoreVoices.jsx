import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA } from "@/lib/constants";
import { storeVoices } from "@/lib/data/storeVoices";
import styles from "./StoreVoices.module.css";

export function StoreVoices() {
  return (
    <Section>
      <SectionTitle
        eyebrow="Voice"
        title="導入店舗様の声"
        description="Wir Journeyを実際にご導入いただいている店舗様から、評価の声をいただいています。"
      />
      <div className={styles.list}>
        {storeVoices.map((voice) => (
          <figure key={voice.storeName} className={styles.item}>
            <blockquote className={styles.quote}>
              <p>{voice.comment}</p>
            </blockquote>
            <figcaption className={styles.source}>
              <span className={styles.storeName}>{voice.storeName}</span>
              <span className={styles.person}>
                {voice.role} {voice.name}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className={styles.ctaRow}>
        <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
      </div>
    </Section>
  );
}
