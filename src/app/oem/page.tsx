import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "OEM",
  description: "京都素材を活かしたオリジナルクラフトドリンクのOEM開発。企画から製造までご相談いただけます。",
  path: "/oem",
});

export default function OemPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "OEM", path: "/oem" }]} />
      <Section tone="paper">
        <SectionTitle
          eyebrow="OEM"
          title="京都素材で、貴社だけのオリジナルドリンクを。"
          description="Wir Journeyでは、京都の素材を活かしたクラフトドリンクの企画・製造ノウハウを活かし、OEMでのオリジナル商品開発のご相談を承っています。ホテル・商業施設・企業様のウェルカムドリンクやノベルティなど、幅広い用途に対応可能です。"
        />
        <div className="mt-10">
          <PhotoFrame alt="オリジナルドリンクの試作を検討する打ち合わせの様子" ratio="landscape" />
        </div>
      </Section>

      <Section tone="deep">
        <SectionTitle eyebrow="Flow" title="ご相談からのおおまかな流れ" align="left" />
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          <li className="border-t border-stone pt-5">
            <span className="font-display-en text-sm italic text-kyo-gold">Step 1</span>
            <h3 className="mt-2 font-serif-jp text-lg">ご相談</h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">用途・数量・イメージなどをお伺いします。</p>
          </li>
          <li className="border-t border-stone pt-5">
            <span className="font-display-en text-sm italic text-kyo-gold">Step 2</span>
            <h3 className="mt-2 font-serif-jp text-lg">企画・試作</h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">素材選定からレシピ設計まで、企画段階からご相談いただけます。</p>
          </li>
          <li className="border-t border-stone pt-5">
            <span className="font-display-en text-sm italic text-kyo-gold">Step 3</span>
            <h3 className="mt-2 font-serif-jp text-lg">製造・納品</h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">条件のすり合わせの上、製造・納品までサポートします。</p>
          </li>
        </ol>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          対応可能な数量・費用感は企画内容により異なります。まずはお問い合わせフォームよりご相談ください。
        </p>
      </Section>

      <ContactCTA />
    </>
  );
}
