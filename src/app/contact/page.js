import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { buildMetadata } from "@/lib/seo";
import styles from "./contact.module.css";

export const metadata = buildMetadata({
  title: "CONTACT",
  description: "Wir Journeyの商品導入・OEM・サンプルに関するお問い合わせはこちらから。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "CONTACT", path: "/contact" }]} />

      <Section tone="surface">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>CONTACT</p>
          <h1 className={styles.heroTitle}>お問い合わせ</h1>
          <p className={styles.heroLead}>
            業務用のお取引はもちろん、商品やサンプル、OEMについてなど、まだご相談内容が明確でない場合もお気軽にお問い合わせください。
          </p>
        </div>
      </Section>

      <Section id="form" narrow className={styles.formSection}>
        <ContactForm />
      </Section>
    </>
  );
}
