import Image from "next/image";
import Link from "next/link";
import styles from "./OurStoryExcerpt.module.css";

export function OurStoryExcerpt() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageBox}>
            <Image
              src="/images/home/story-photo.webp"
              alt=""
              fill
              sizes="(min-width: 900px) 40vw, 100vw"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>OUR STORY</p>
          <h2 className={styles.heading}>
            祖母のために生まれた
            <br />
            一杯のコーラ
          </h2>
          <p className={styles.body}>
            祖母のための一杯から、Wir Journeyは始まりました。京都・西陣から、地域素材とスパイスを掛け合わせたクラフトドリンクをつくっています。
          </p>
          <Link href="/about" className={styles.link}>
            ABOUT USを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
