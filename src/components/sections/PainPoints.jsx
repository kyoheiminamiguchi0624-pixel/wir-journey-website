import Image from "next/image";
import styles from "./PainPoints.module.css";

const painPoints = [
  "京都らしさを感じられるドリンクを取り入れたい",
  "他店にはない、店ならではのメニューをつくりたい",
  "ノンアルコールの魅力的な選択肢を増やしたい",
  "オリジナルドリンクをつくりたいが、商品開発まで手が回らない",
  "まずは少量から、新しいドリンクを試してみたい",
];

export function PainPoints() {
  return (
    <section className={styles.section}>
      <div className={styles.split}>
        <div className={styles.imageCol}>
          <div className={styles.imageBox}>
            <Image
              src="/images/home/painpoints-photo.webp"
              alt=""
              fill
              sizes="(min-width: 900px) 40vw, 100vw"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.textCol}>
          <div className={styles.textInner}>
            <p className={styles.eyebrow}>ISSUES</p>
            <h2 className={styles.heading}>
              こんなお悩みは
              <br />
              ありませんか？
            </h2>
            <div className={styles.list}>
              {painPoints.map((point) => (
                <div key={point} className={styles.item}>
                  <span aria-hidden="true" className={styles.dash}>
                    —
                  </span>
                  <span className={styles.text}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
