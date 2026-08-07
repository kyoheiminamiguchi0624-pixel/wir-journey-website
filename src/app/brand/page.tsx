import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { BrushDivider } from "@/components/ui/BrushDivider";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "ブランドストーリー",
  description:
    "京都素材を活かしたクラフトドリンクメーカー Wir Journey のブランドストーリー。添加物に頼らない製法と、京都の生産者とのつながりについて。",
  path: "/brand",
});

const partners = [
  {
    name: "京檸檬プロジェクト協議会",
    note: "宝酒造・日本果汁が運営。京都産レモンの調達で連携。",
  },
  {
    name: "エビバデ京ホップ（合同会社WOW）",
    note: "京都産ホップの調達で協業。",
  },
  {
    name: "須知高校",
    note: "クロモジの調達で連携。",
  },
];

export default function BrandPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ブランド", path: "/brand" }]} />

      <Section tone="paper">
        <SectionTitle
          eyebrow="Brand Story"
          title="京都という土地の記憶を、ボトルの中に。"
          description="Wir Journeyは、京都素材を活かしたクラフトドリンクメーカーです。私たちが届けているのは飲み物そのものではなく、京都という土地の風土と、そこに生きる生産者・職人の物語です。"
        />
      </Section>

      <Section tone="deep">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Craftsmanship"
              title="添加物に頼らない、という選択"
              description="味の均一化のために添加物に頼るのではなく、素材そのものの個性を活かす製法にこだわっています。年によって微妙に変わる風味も、素材が生きている証だと捉えています。"
            />
            <BrushDivider className="mt-8" />
          </div>
          <PhotoFrame alt="添加物に頼らない製法で仕込まれるクラフトドリンクの様子" ratio="landscape" />
        </div>
      </Section>

      <Section tone="paper">
        <SectionTitle eyebrow="Sourcing" title="京都の生産者とともに" align="left" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner.name} className="border-t border-stone pt-5">
              <h3 className="font-serif-jp text-lg">{partner.name}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{partner.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <PhotoFrame alt="運営者である南口恭兵が生産者と対話する様子" ratio="portrait" className="order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <SectionTitle
              eyebrow="Operator"
              title="合同会社Hobby Works"
              description="Wir Journeyは、京都を拠点とする合同会社Hobby Worksが運営するクラフトドリンクメーカーです。新規事業開発の実務経験を活かし、店舗様の業態に合わせた提案から、継続的なお取引までを一貫してサポートします。"
            />
          </div>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
