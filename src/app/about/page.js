import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { buildMetadata } from "@/lib/seo";
import styles from "./about.module.css";

export const metadata = buildMetadata({
  title: "ABOUT / OUR STORY",
  description: "Wir Journeyのブランドストーリー。",
  path: "/about",
});

// Draft 0.8 セクション18の確定原稿。改変・創作はしない。
const storyText =
  "妻の祖父は京都・西陣で昭和16年に「嘉住商店」を創業し、清涼飲料水を扱っていた。祖父の仕事・想いを受け継ぎたいという思いがWir Journeyの原点。また、祖母がコーラを好きだったものの高齢になり一本を最後まで飲み切ることが難しくなったことから、「祖母が最後までおいしく飲めるコーラをつくりたい」という思いが生まれ、「リンゴノコーラ」の開発につながった。その後、京都府産素材とスパイスを掛け合わせたクラフトドリンク開発へ発展している。";

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ABOUT", path: "/about" }]} />
      <Section>
        <SectionTitle eyebrow="Our Story" title="Wir Journeyのはじまり" />
        <div className={styles.body}>
          <PhotoFrame alt={null} ratio="landscape" />
          <p className={styles.story}>{storyText}</p>
        </div>
      </Section>
    </>
  );
}
