import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { faq, faqCategories } from "@/lib/data/faq";
import { PRIMARY_CTA } from "@/lib/constants";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import styles from "./faq.module.css";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Wir Journeyへの業務用導入・お取引・OEMに関するよくあるご質問。",
  path: "/faq",
});

// docs/handoff/pages/FAQ.dc.html 248行目準拠(カテゴリごとの交互背景)。
const CATEGORY_TONES = ["white", "surface", "white", "surface", "white"];

export default function FaqPage() {
  const categories = faqCategories
    .map((category, index) => ({
      ...category,
      tone: CATEGORY_TONES[index] || "white",
      items: faq.filter((item) => item.category === category.id),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <>
      <Breadcrumb items={[{ name: "FAQ", path: "/faq" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
      />

      <Section tone="surface">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>FAQ</p>
          <h1 className={styles.heroTitle}>よくあるご質問</h1>
        </div>
      </Section>

      <nav aria-label="FAQカテゴリ" className={styles.categoryNav}>
        {categories.map((category, index) => (
          <a key={category.id} href={`#${category.id}`} className={styles.categoryNavLink}>
            <span className={styles.categoryNavNum}>{String(index + 1).padStart(2, "0")}</span>
            <span>{category.label}</span>
          </a>
        ))}
      </nav>

      {categories.map((category, index) => (
        <Section key={category.id} id={category.id} tone={category.tone} className={styles.categorySection}>
          <div className={styles.categoryHeader}>
            <span className={styles.categoryNum}>{String(index + 1).padStart(2, "0")}</span>
            <h2 className={styles.categoryHeading}>{category.label}</h2>
          </div>
          <Accordion items={category.items} />
        </Section>
      ))}

      <Section tone="cta">
        <div className={styles.ctaBlock}>
          <p className={styles.ctaLead}>解決しない場合は、お気軽にご相談ください。</p>
          <Button href={PRIMARY_CTA.href} className={styles.ctaButton}>
            {PRIMARY_CTA.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
