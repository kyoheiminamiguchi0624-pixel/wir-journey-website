import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";
import styles from "./OurStoryExcerpt.module.css";

// Draft 0.8 セクション18確定原稿からの抜粋(冒頭2文)。改変はしていません。
const excerpt =
  "妻の祖父は京都・西陣で昭和16年に「嘉住商店」を創業し、清涼飲料水を扱っていた。祖父の仕事・想いを受け継ぎたいという思いがWir Journeyの原点。";

export function OurStoryExcerpt() {
  return (
    <Section tone="surface">
      <SectionTitle eyebrow="Our Story" title="Wir Journeyのはじまり" align="left" />
      <div className={styles.layout}>
        <PhotoFrame alt={null} ratio="landscape" />
        <div>
          <p className={styles.excerpt}>{excerpt}</p>
          <div className={styles.more}>
            <Button href="/about" variant="outline">
              続きを読む
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
