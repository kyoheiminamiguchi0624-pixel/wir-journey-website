import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
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
      <Section narrow>
        <SectionTitle
          eyebrow="Contact"
          title="お問い合わせ"
          description="業務用のお取引・商品・サンプル・OEMについて、お気軽にご相談ください。"
          align="left"
        />
        <div className={styles.formWrap}>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
