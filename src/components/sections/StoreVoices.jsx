import Image from "next/image";
import { storeVoices } from "@/lib/data/storeVoices";
import styles from "./StoreVoices.module.css";

export function StoreVoices() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>VOICES</p>
          <h2 className={styles.heading}>導入店舗様の声</h2>
        </div>
        {storeVoices.map((voice) => (
          <div
            key={voice.storeName}
            className={styles.item}
            style={{ flexDirection: voice.direction }}
          >
            <div className={styles.imageBox}>
              <Image
                src={voice.image}
                alt=""
                fill
                sizes="(min-width: 900px) 32vw, 100vw"
                className={styles.image}
              />
            </div>
            <div className={styles.textBox}>
              <p className={styles.quote}>「{voice.comment}」</p>
              <div className={styles.source}>
                <p className={styles.storeName}>{voice.storeName}</p>
                <p className={styles.person}>
                  {[voice.role, voice.name].filter(Boolean).join(" ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
