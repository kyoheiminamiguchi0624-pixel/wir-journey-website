import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import styles from "./WhyWirJourney.module.css";

// Wir Journey側の解決策・強み(今回のチャットで確定した内容)。
// 1番目・4番目はタイトルのみ、2番目・3番目はタイトル+説明が指定されている。
const points = [
  {
    title: "京都の素材を活かしたドリンク",
    body: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21c-4-3-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-3 8-7 11Z" />
        <path d="M12 10v8" />
      </svg>
    ),
  },
  {
    title: "ユニークな素材と製法",
    body: "無添加・無着色にこだわり、生のスパイスを活用。素材本来の風味を活かした、ひと味違うクラフトドリンクを。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3h6" />
        <path d="M10 3v6l-5.5 9.5A1 1 0 0 0 5.4 20h13.2a1 1 0 0 0 .9-1.5L14 9V3" />
        <path d="M7.5 15h9" />
      </svg>
    ),
  },
  {
    title: "商品開発の手間をかけずに、まるでオリジナルのようなドリンクを。",
    body: "素材選びやレシピ開発などの負担をかけずに、店ならではのメニューとしてクラフトドリンクを取り入れられます。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
        <path d="M4 7.5 12 12l8-4.5" />
        <path d="M12 12v9" />
      </svg>
    ),
  },
  {
    title: "小ロットから対応",
    body: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="10" width="7" height="7" rx="0.5" />
        <rect x="13" y="7" width="7" height="10" rx="0.5" />
      </svg>
    ),
  },
];

export function WhyWirJourney() {
  return (
    <Section>
      <SectionTitle eyebrow="Why Wir Journey" title="Wir Journeyが選ばれる理由" align="left" />
      <div className={styles.grid}>
        {points.map((point) => (
          <div key={point.title} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              {point.icon}
            </span>
            <h3>{point.title}</h3>
            {point.body && <p>{point.body}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
