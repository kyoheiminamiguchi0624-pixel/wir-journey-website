import { Container } from "./Container";
import styles from "./Section.module.css";

export function Section({ children, tone = "white", narrow = false, maxWidth, className = "" }) {
  const toneClass = tone === "surface" ? styles.surface : styles.white;
  return (
    <section className={`${styles.section} ${toneClass} ${className}`}>
      <Container className={narrow ? styles.narrow : ""} maxWidth={maxWidth}>
        {children}
      </Container>
    </section>
  );
}
