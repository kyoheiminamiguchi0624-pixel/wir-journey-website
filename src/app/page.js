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
import { SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: SITE.fullName,
  description: SITE.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <WhyWirJourney />
      <StoreVoices />
      <ProductsOverview />
      <Flow />
      <OurStoryExcerpt />
      <FaqExcerpt />
      <ContactCta />
    </>
  );
}
