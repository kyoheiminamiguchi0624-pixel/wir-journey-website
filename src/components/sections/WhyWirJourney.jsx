import { Section } from "@/components/ui/Section";
import styles from "./WhyWirJourney.module.css";

const points = [
  {
    title: "希少な京都府産素材を活かしたドリンク",
    bodyLines: ["希少な京都府産素材を活かし、地域ならではの味わいを提案。", "他店にはない、京都らしいメニューづくりをサポートします。"],
  },
  {
    title: "他社にはない、ユニークなラインナップ",
    bodyLines: ["クラフトコーラやチャイ、スパークリングなど多彩なラインナップです。定番とは一味違う、海外のお客様からも人気の高いドリンクです。"],
  },
  {
    title: "ロスを抑え、無駄なく仕入れられる",
    bodyLines: ["賞味期限が長く、必要な量だけ使用できるシロップタイプ。", "", "売れ残りや廃棄による仕入ロスを抑えて導入できます。"],
  },
  {
    title: "使いやすく、小さく始められる",
    bodyLines: ["希釈するだけで提供でき、バックヤードなどの保管場所も圧迫しません。", "", "少量からテスト導入でき、無理なく新しいメニューを始められます。"],
  },
].map((p, i) => ({ ...p, num: String(i + 1).padStart(2, "0") }));

export function WhyWirJourney() {
  return (
    <Section maxWidth="1100px">
      <div className={styles.header}>
        <p className={styles.eyebrow}>WHY WIR JOURNEY</p>
        <h2 className={styles.heading}>Wir Journeyが選ばれる理由</h2>
      </div>
      <div className={styles.grid}>
        {points.map((point) => (
          <div key={point.num} className={styles.item}>
            <span className={styles.num}>{point.num}</span>
            <h3 className={styles.title}>{point.title}</h3>
            <p className={styles.body}>
              {point.bodyLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
