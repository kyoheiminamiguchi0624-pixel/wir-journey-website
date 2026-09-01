"use client";

import { useState } from "react";
import styles from "./Accordion.module.css";

// docs/handoff/pages/FAQ.dc.html 99-114行目準拠。同一グループ内で開くのは1つのみ
// (openKey方式、100-113行目)。
export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={styles.item}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className={styles.questionRow}>
                <span className={styles.qMark}>Q.</span>
                <span className={styles.question}>{item.question}</span>
              </span>
              <span aria-hidden="true" className={styles.glyph}>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className={styles.answerRow}>
                <span className={styles.aMark}>A.</span>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
