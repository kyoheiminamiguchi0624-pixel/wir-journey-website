import styles from "./PhotoFrame.module.css";

// docs/handoff/pages/image-slot.jsのデフォルト値(shape="rect", fit="cover",
// aspect-ratio 3:2)に合わせたキーワードエイリアス。個別ページのslotで異なる
// 比率が指定されている場合は、ratioにそのままCSS aspect-ratio文字列("4/5"等)を渡す。
const RATIO_ALIASES = {
  landscape: "4 / 3",
  portrait: "3 / 4",
  square: "1 / 1",
  default: "3 / 2",
};

// src が未指定の間はキャプション付きプレースホルダーを表示する。
// 架空の写真を生成することはしない。
export function PhotoFrame({ src, alt, ratio = "default", fit = "cover", className = "" }) {
  const aspectRatio = RATIO_ALIASES[ratio] || ratio;
  const frameStyle = { aspectRatio };

  if (!src) {
    return (
      <div
        className={`${styles.frame} ${styles.placeholder} ${className}`}
        style={frameStyle}
      >
        <span className={styles.placeholderText}>{alt || "画像準備中"}</span>
      </div>
    );
  }

  return (
    <div className={`${styles.frame} ${className}`} style={frameStyle}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt || ""} className={styles.image} style={{ objectFit: fit }} />
    </div>
  );
}
