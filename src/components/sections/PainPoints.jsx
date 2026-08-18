import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import styles from "./PainPoints.module.css";

const painPoints = [
  "京都らしいドリンクを取り入れたいけれど、選択肢が少ない。",
  "定番のドリンクでは、他店との差別化が難しい。",
  "ノンアルコールのお客様にも、もっと魅力的な選択肢を用意したい。",
  "オリジナルのドリンクを作りたいけれど、自社で開発するほどの負担はかけられない。",
  "新しい商品を取り入れたいけれど、大きなロットで仕入れるのは難しい。",
];

export function PainPoints() {
  return (
    <Section tone="surface">
      <SectionTitle title="こんなお悩みはありませんか？" align="left" />
      <ul className={styles.list}>
        {painPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Section>
  );
}
