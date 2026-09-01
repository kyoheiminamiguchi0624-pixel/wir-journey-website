import Image from "next/image";
import { PRIMARY_CTA } from "@/lib/constants";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageLayer}>
        <Image
          src="/images/home/hero-visual.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <div className={styles.inner}>
          <h1 className={styles.headline}>
            京都のドリンクに、
            <br />
            もっと選択肢を。
          </h1>
          <p className={styles.subcopy}>
            京都・西陣のノンアルコール専業クラフトドリンクメーカー。
            <br />
            ホテル・レストラン・カフェ・小売店様へ、無添加・無着色のドリンクをお届けしています。
          </p>
          <div className={styles.ctaRow}>
            <a href="#contact" className={styles.ctaPrimary}>
              {PRIMARY_CTA.label}
            </a>
            <a href="#products" className={styles.ctaSecondary}>
              商品を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
