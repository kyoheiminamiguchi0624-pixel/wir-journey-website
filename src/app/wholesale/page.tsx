import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Card } from "@/components/ui/Card";
import { Flow } from "@/components/sections/Flow";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "お取扱いをご検討の方へ",
  description:
    "京都市内のカフェ・飲食店様へ。Wir Journeyのクラフトドリンクお取扱いについてのご案内。対象エリア・導入メリット・お取引の流れ。",
  path: "/wholesale",
});

export default function WholesalePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "お取扱いをご検討の方へ", path: "/wholesale" }]} />

      <Section tone="paper">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="For Café Owners"
              title="貴店のメニューに、京都という物語を。"
              description="Wir Journeyは、京都市内で外国人観光客の多いエリアの個人経営カフェ・飲食店様を中心に、クラフトドリンクの卸販売を行っています。価格ではなく、世界観やストーリーを大切にされる店舗様にこそ、お届けしたいと考えています。"
            />
          </div>
          <PhotoFrame alt="木のカウンターでWir Journeyのドリンクを提供する様子" ratio="landscape" />
        </div>
      </Section>

      <Section tone="deep">
        <SectionTitle eyebrow="Service Area" title="主な対象エリア" align="left" />
        <div className="mt-8 flex flex-wrap gap-3">
          {SITE.areas.map((area) => (
            <span key={area} className="rounded-[4px] border border-stone px-4 py-2 text-sm text-ink-soft">
              {area}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-ink-soft">
          上記エリア以外の店舗様も対応可能です。まずはお問い合わせください。
        </p>
      </Section>

      <Section tone="paper">
        <SectionTitle eyebrow="What We Offer" title="お取扱いいただく店舗様へ" align="left" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="font-serif-jp text-lg">柔軟なご相談</h3>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              数量・価格・納品方法は、店舗の規模やメニュー構成に応じて個別にご相談いただけます。
            </p>
          </Card>
          <Card>
            <h3 className="font-serif-jp text-lg">業態に合わせた商品提案</h3>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              客層やメニュー構成をお伺いした上で、最適な商品・提供方法をご提案します。
            </p>
          </Card>
        </div>
      </Section>

      <Flow />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
