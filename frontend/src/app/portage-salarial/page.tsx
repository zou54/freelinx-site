import type { Metadata } from "next";
import PortageSalarialHero from "@/components/sections/PortageSalarialHero";
import PortageSalarialTripartite from "@/components/sections/PortageSalarialTripartite";
import PortageSalarialAdvantages from "@/components/sections/PortageSalarialAdvantages";
import PortageSalarialSteps from "@/components/sections/PortageSalarialSteps";
import PortageSalarialPourQui from "@/components/sections/PortageSalarialPourQui";
import PortageSalarialWhy from "@/components/sections/PortageSalarialWhy";
import PortageSalarialFinalCta from "@/components/sections/PortageSalarialFinalCta";

export const metadata: Metadata = {
  title: "Le portage salarial — Freelinx",
  description:
    "Le portage salarial est une solution qui permet aux professionnels indépendants de développer leur activité librement tout en bénéficiant du statut de salarié.",
};

export default function PortageSalarialPage() {
  return (
    <main>
      <PortageSalarialHero />
      <PortageSalarialTripartite />
      <PortageSalarialAdvantages />
      <PortageSalarialSteps />
      <PortageSalarialPourQui />
      <PortageSalarialWhy />
      <PortageSalarialFinalCta />
    </main>
  );
}
