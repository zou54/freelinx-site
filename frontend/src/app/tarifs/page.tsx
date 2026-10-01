import TarifsHero from "@/components/sections/TarifsHero";
import TarifsPricingGrid from "@/components/sections/TarifsPricingGrid";
import TarifsTransparency from "@/components/sections/TarifsTransparency";
import TarifsSimulateBar from "@/components/sections/TarifsSimulateBar";
import { getTarifs, DEFAULT_TARIFS } from "@/lib/content/tarifs";

export default async function TarifsPage() {
  const tarifs = (await getTarifs()) ?? DEFAULT_TARIFS;

  return (
    <main>
      <TarifsHero data={tarifs.heroSection} />
      <TarifsPricingGrid data={tarifs.pricingSection} />
      <TarifsTransparency data={tarifs.transparencySection} />
      <TarifsSimulateBar data={tarifs.simulateBar} />
    </main>
  );
}
