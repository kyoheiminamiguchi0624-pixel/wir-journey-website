import { Container } from "./Container";
import styles from "./Section.module.css";

const TONE_CLASSES = { white: "white", surface: "surface", cta: "cta" };

export function Section({ children, id, tone = "white", narrow = false, maxWidth, className = "" }) {
  const toneClass = styles[TONE_CLASSES[tone] || "white"];
  return (
    <section id={id} className={`${styles.section} ${toneClass} ${className}`}>
      <Container className={narrow ? styles.narrow : ""} maxWidth={maxWidth}>
        {children}
      </Container>
    </section>
  );
}
