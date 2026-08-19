import Link from "next/link";
import styles from "./ContactCta.module.css";

export function ContactCta() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>CONTACT</p>
        <h2 className={styles.heading}>
          業務用のお取引について、
          <br />
          お気軽にご相談ください。
        </h2>
        <p className={styles.body}>
          業態や提供スタイルをお聞かせください。
          <br />
          相性の良い商品をご案内します。
        </p>
        <div className={styles.ctaRow}>
          <Link href="/contact" className={styles.ctaPrimary}>
            業務用のお取引について相談する
          </Link>
          <Link href="/products" className={styles.ctaSecondary}>
            商品を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
