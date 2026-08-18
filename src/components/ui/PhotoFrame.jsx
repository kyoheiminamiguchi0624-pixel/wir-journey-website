import styles from "./PhotoFrame.module.css";

// src が未指定の間はキャプション付きプレースホルダーを表示する。
// 架空の写真を生成することはしない。
export function PhotoFrame({ src, alt, ratio = "landscape", className = "" }) {
  const ratioClass = ratio === "portrait" ? styles.portrait : styles.landscape;

  if (!src) {
    return (
      <div className={`${styles.frame} ${styles.placeholder} ${ratioClass} ${className}`}>
        <span className={styles.placeholderText}>{alt || "画像準備中"}</span>
      </div>
    );
  }

  return (
    <div className={`${styles.frame} ${ratioClass} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt || ""} className={styles.image} />
    </div>
  );
}
