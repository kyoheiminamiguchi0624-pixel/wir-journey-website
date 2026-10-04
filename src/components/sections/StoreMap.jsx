import styles from "./StoreMap.module.css";

// Google マイマップの埋め込み。loading="lazy" で、地図が画面に近づいたときに読み込む。
// PC用とスマホ用で初期ズームを変えるため2つ置き、CSSで片方だけ表示する
// (非表示側は遅延読み込みのため読み込まれない)。
export function StoreMap({ src }) {
  return (
    <>
      <div className={`${styles.frame} ${styles.pc}`}>
        <iframe
          src={src.pc}
          title="Wir Journey お取り扱い店舗の地図"
          className={styles.iframe}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className={`${styles.frame} ${styles.sp}`}>
        <iframe
          src={src.sp}
          title="Wir Journey お取り扱い店舗の地図"
          className={styles.iframe}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
