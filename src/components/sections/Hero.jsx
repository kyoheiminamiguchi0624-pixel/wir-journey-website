import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA, SITE } from "@/lib/constants";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <Section>
      <div className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>{SITE.fullName}</p>
          <h1 className={styles.headline}>{SITE.tagline}</h1>
          <p className={styles.subcopy}>
            京都の素材とクラフトの発想から生まれた完成されたクラフトドリンクを、ホテル・レストラン・カフェ・小売店などの事業者様へ。小ロットから対応しています。
          </p>
          <div className={styles.ctaRow}>
            <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
          </div>
        </div>
        <div>
          <PhotoFrame alt={null} ratio="portrait" />
        </div>
      </div>
    </Section>
  );
}
