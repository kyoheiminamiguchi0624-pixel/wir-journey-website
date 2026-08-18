import styles from "./Badge.module.css";

export function Badge({ children, tone = "outline" }) {
  const toneClass = tone === "accent" ? styles.accent : styles.outline;
  return <span className={`${styles.badge} ${toneClass}`}>{children}</span>;
}
