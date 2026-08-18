import styles from "./SectionTitle.module.css";

export function SectionTitle({ eyebrow, title, description, align = "center" }) {
  return (
    <div className={`${styles.wrap} ${align === "left" ? styles.left : styles.center}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
