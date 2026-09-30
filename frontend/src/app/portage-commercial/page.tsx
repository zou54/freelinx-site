import type { Metadata } from "next";
import PortageCommercialHero from "@/components/sections/PortageCommercialHero";
import PortageCommercialNumberedSections from "@/components/sections/PortageCommercialNumberedSections";
import PortageCommercialFinalCta from "@/components/sections/PortageCommercialFinalCta";

export const metadata: Metadata = {
  title: "Le portage commercial — Freelinx",
  description:
    "Le portage commercial permet aux indépendants, consultants et commerciaux de travailler avec des entreprises, y compris des grands comptes, sans gérer la complexité administrative ou contractuelle.",
};

export default function PortageCommercialPage() {
  return (
    <main>
      <PortageCommercialHero />
      <PortageCommercialNumberedSections />
      <PortageCommercialFinalCta />
    </main>
  );
}
