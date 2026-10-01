import type { Metadata } from "next";
import PortageCommercialHero from "@/components/sections/PortageCommercialHero";
import PortageCommercialNumberedSections from "@/components/sections/PortageCommercialNumberedSections";
import PortageCommercialFinalCta from "@/components/sections/PortageCommercialFinalCta";
import { getPortageCommercial } from "@/lib/content/portage-commercial";
import { DEFAULT_PORTAGE_COMMERCIAL } from "@/lib/content/portage-commercial";

export const metadata: Metadata = {
  title: "Le portage commercial — Freelinx",
  description:
    "Le portage commercial permet aux indépendants, consultants et commerciaux de travailler avec des entreprises, y compris des grands comptes, sans gérer la complexité administrative ou contractuelle.",
};

export default async function PortageCommercialPage() {
  const data = (await getPortageCommercial()) ?? DEFAULT_PORTAGE_COMMERCIAL;

  return (
    <main>
      <PortageCommercialHero data={data.heroSection} />
      <PortageCommercialNumberedSections
        numberedIntro={data.numberedIntro}
        numberedWhy={data.numberedWhy}
        numberedHow={data.numberedHow}
        numberedBenefits={data.numberedBenefits}
      />
      <PortageCommercialFinalCta data={data.finalCtaSection} />
    </main>
  );
}
