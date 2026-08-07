import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/forms/ContactForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "お取扱いについて相談する",
  description: "Wir Journeyのお取扱い・OEM・その他お問い合わせはこちらのフォームからご連絡ください。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "お問い合わせ", path: "/contact" }]} />
      <Section tone="paper" narrow>
        <SectionTitle
          eyebrow="Contact"
          title="お取扱いについて相談する"
          description="お取扱い・OEMのご相談、その他お問い合わせは、以下のフォームよりご連絡ください。1〜2営業日を目安にご返信いたします。"
        />
        <div className="mt-12">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
