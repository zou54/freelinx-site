import TarifsHero from "@/components/sections/TarifsHero";
import TarifsPricingGrid from "@/components/sections/TarifsPricingGrid";
import TarifsTransparency from "@/components/sections/TarifsTransparency";
import TarifsSimulateBar from "@/components/sections/TarifsSimulateBar";

export default function TarifsPage() {
  return (
    <main>
      <TarifsHero />
      <TarifsPricingGrid />
      <TarifsTransparency />
      <TarifsSimulateBar />
    </main>
  );
}
