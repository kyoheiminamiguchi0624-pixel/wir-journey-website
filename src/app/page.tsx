import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BrandStory } from "@/components/sections/BrandStory";
import { Benefits } from "@/components/sections/Benefits";
import { Products } from "@/components/sections/Products";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Flow } from "@/components/sections/Flow";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: SITE.fullName,
  description: SITE.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Benefits />
      <Products />
      <CaseStudies />
      <Flow />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
