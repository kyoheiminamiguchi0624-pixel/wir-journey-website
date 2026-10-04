import styles from "./StoreMap.module.css";

// Google マイマップの埋め込み。loading="lazy" で、地図が画面に近づいたときに読み込む。
export function StoreMap({ src }) {
  return (
    <div className={styles.frame}>
      <iframe
        src={src}
        title="Wir Journey お取り扱い店舗の地図"
        className={styles.iframe}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
