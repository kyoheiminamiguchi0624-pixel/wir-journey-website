import styles from "./SectionTitle.module.css";

export function SectionTitle({ eyebrow, title, description, align = "center", titleAs: TitleTag = "h2" }) {
  return (
    <div className={`${styles.wrap} ${align === "left" ? styles.left : styles.center}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <TitleTag className={styles.title}>{title}</TitleTag>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
