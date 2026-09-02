import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { WhyWirJourney } from "@/components/sections/WhyWirJourney";
import { StoreVoices } from "@/components/sections/StoreVoices";
import { ProductsOverview } from "@/components/sections/ProductsOverview";
import { Flow } from "@/components/sections/Flow";
import { OurStoryExcerpt } from "@/components/sections/OurStoryExcerpt";
import { FaqExcerpt } from "@/components/sections/FaqExcerpt";
import { ContactCta } from "@/components/sections/ContactCta";
import { buildMetadata } from "@/lib/seo";
import { SITE, SHOW_HOME_CASE_STUDIES } from "@/lib/constants";

// Google検索結果でのtitle/description表示切れ対策(全角30文字/90文字程度目安)。
// SITE.tagline/SITE.descriptionは正式タグライン・他箇所共用の文言のため変更せず、
// HOMEのSEO用title/descriptionのみここで個別に指定する。
export const metadata = buildMetadata({
  title: `${SITE.fullName}｜卸・OEMのご相談`,
  description:
    "添加物に頼らない京都発クラフトドリンク。ホテル・レストラン・カフェへの卸取引、OEM開発をご相談いただけます。まずはお気軽にお問い合わせください。",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <WhyWirJourney />
      {SHOW_HOME_CASE_STUDIES && <StoreVoices />}
      <ProductsOverview />
      <Flow />
      <OurStoryExcerpt />
      <FaqExcerpt />
      <ContactCta />
    </>
  );
}
