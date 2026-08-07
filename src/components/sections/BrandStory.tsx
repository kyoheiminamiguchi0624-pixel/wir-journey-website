import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { BrushDivider } from "@/components/ui/BrushDivider";
import { Reveal } from "@/components/ui/Reveal";

export function BrandStory() {
  return (
    <Section tone="paper">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <PhotoFrame
            alt="京都の生産者の手元と、収穫されたばかりの京檸檬"
            ratio="landscape"
          />
        </Reveal>
        <Reveal delay={120}>
          <SectionTitle
            eyebrow="Our Philosophy"
            title="売っているのは、飲み物ではなく体験です。"
            description="Wir Journeyは、京都の素材と、それを育む生産者の物語を大切にしています。添加物に頼らず、風土そのものの香りと味を、一杯の中に閉じ込める。それは、貴店を訪れるお客様にとって、京都という土地の記憶に残る体験になると考えています。"
          />
          <BrushDivider className="mt-8" />
        </Reveal>
      </div>
    </Section>
  );
}
