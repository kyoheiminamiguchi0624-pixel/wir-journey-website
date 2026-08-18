import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { OEM_CTA } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import styles from "./oem.module.css";

export const metadata = buildMetadata({
  title: "OEM",
  description: "Wir JourneyのOEMに関するお問い合わせはこちらから。",
  path: "/oem",
});

export default function OemPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "OEM", path: "/oem" }]} />
      <Section narrow>
        <SectionTitle
          eyebrow="OEM"
          title="OEMについて"
          description="Wir JourneyではOEMに関するご相談も承っております。詳細な内容については、まずはお問い合わせください。"
          align="left"
        />
        <div className={styles.ctaWrap}>
          <Button href={OEM_CTA.href}>{OEM_CTA.label}</Button>
        </div>
      </Section>
    </>
  );
}
