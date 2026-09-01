import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { caseStudies } from "@/lib/data/caseStudies";
import { buildMetadata } from "@/lib/seo";
import styles from "./case-studies.module.css";

export const metadata = buildMetadata({
  title: "CASE STUDIES",
  description: "Wir Journeyを導入いただいている店舗様・施設様の事例をご紹介します。",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "CASE STUDIES", path: "/case-studies" }]} />
      <Section>
        <SectionTitle
          eyebrow="Case Studies"
          title="導入事例"
          titleAs="h1"
          description={
            caseStudies.length === 0
              ? "現在、掲載できる導入事例を準備中です。実店舗様の許諾が取れ次第、順次公開いたします。"
              : "京都市内を中心とした導入事例をご紹介します。"
          }
        />

        {caseStudies.length > 0 && (
          <div className={styles.list}>
            {caseStudies.map((item) => (
              <article key={item.slug} className={styles.card}>
                <PhotoFrame alt={item.imageAlt} ratio="landscape" />
                <p className={styles.meta}>
                  {item.area} / {item.category}
                </p>
                <h3>{item.storeName}</h3>
                <dl className={styles.body}>
                  <dt>課題</dt>
                  <dd>{item.challenge}</dd>
                  <dt>導入</dt>
                  <dd>{item.adoption}</dd>
                  <dt>利用</dt>
                  <dd>{item.usage}</dd>
                  <dt>結果</dt>
                  <dd>{item.result}</dd>
                </dl>
                {item.customerVoice && <blockquote className={styles.voice}>{item.customerVoice}</blockquote>}
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
