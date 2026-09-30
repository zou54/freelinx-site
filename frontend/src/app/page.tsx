import Hero from "@/components/sections/Hero";
import WhySection from "@/components/sections/WhySection";
import StepsSection from "@/components/sections/StepsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CommitmentsSection from "@/components/sections/CommitmentsSection";
import FiguresSection from "@/components/sections/FiguresSection";
import SectorsSection from "@/components/sections/SectorsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { getHomepage } from "@/lib/strapi";
import { DEFAULT_HOMEPAGE } from "@/lib/default-content";

export default async function Home() {
  const homepage = (await getHomepage<typeof DEFAULT_HOMEPAGE>()) ?? DEFAULT_HOMEPAGE;

  return (
    <main>
      <Hero data={homepage.hero} />
      <WhySection data={homepage.whySection} />
      <StepsSection data={homepage.stepsSection} />
      <BenefitsSection data={homepage.benefitsSection} />
      <CommitmentsSection data={homepage.commitmentsSection} />
      <FiguresSection data={homepage.figuresSection} />
      <SectorsSection data={homepage.sectorsSection} />
      <TestimonialsSection data={homepage.testimonialsSection} />
      <FaqSection data={homepage.faqSection} />
      <FinalCtaSection data={homepage.finalCtaSection} />
    </main>
  );
}
