import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhySection />
        <StepsSection />
        <BenefitsSection />
        <CommitmentsSection />
        <FiguresSection />
        <SectorsSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
