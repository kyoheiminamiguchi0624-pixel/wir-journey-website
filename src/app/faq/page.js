import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { faq } from "@/lib/data/faq";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import styles from "./faq.module.css";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Wir Journeyへのお取引・商品・OEMに関するよくあるご質問。",
  path: "/faq",
});

const categoryLabels = {
  business: "お取引について",
  product: "商品について",
  oem: "OEMについて",
  general: "その他",
};

export default function FaqPage() {
  const categories = Object.keys(categoryLabels).filter((key) => faq.some((item) => item.category === key));

  return (
    <>
      <Breadcrumb items={[{ name: "FAQ", path: "/faq" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
      />
      <Section>
        <SectionTitle eyebrow="FAQ" title="よくあるご質問" />
        <div className={styles.categories}>
          {categories.map((category) => (
            <div key={category} className={styles.categoryBlock}>
              <h3>{categoryLabels[category]}</h3>
              <dl className={styles.list}>
                {faq
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div key={item.question} className={styles.item}>
                      <dt>{item.question}</dt>
                      <dd>{item.answer}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
