import type { Metadata } from "next";
import FaqHero from "@/components/sections/FaqHero";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaBannerFromData from "@/components/ui/CtaBannerFromData";
import { getFaq, DEFAULT_FAQ } from "@/lib/content/faq";

export const metadata: Metadata = {
  title: "FAQ — Freelinx",
  description:
    "Toutes les réponses à vos questions sur le portage salarial, votre rémunération et nos services Freelinx.",
};

export default async function FaqPage() {
  const faq = (await getFaq()) ?? DEFAULT_FAQ;
  const questions = faq.questions ?? [];

  return (
    <main>
      <FaqHero data={faq.heroSection} />
      <FaqAccordion items={questions} />
      <section className="mx-auto max-w-[1120px] px-14 pb-[90px]">
        <CtaBannerFromData data={faq.cta} />
      </section>
    </main>
  );
}
