import type { Metadata } from "next";
import QuiSommesNousHero from "@/components/sections/QuiSommesNousHero";
import QuiSommesNousMission from "@/components/sections/QuiSommesNousMission";
import QuiSommesNousConviction from "@/components/sections/QuiSommesNousConviction";
import QuiSommesNousValues from "@/components/sections/QuiSommesNousValues";
import QuiSommesNousQuote from "@/components/sections/QuiSommesNousQuote";
import { getQuiSommesNous } from "@/lib/content/qui-sommes-nous";
import { DEFAULT_QUI_SOMMES_NOUS } from "@/lib/content/qui-sommes-nous";

export const metadata: Metadata = {
  title: "Qui sommes-nous — Freelinx",
  description:
    "Freelinx, un partenaire de confiance à vos côtés pour aller plus loin : notre mission, nos convictions et nos valeurs.",
};

export default async function QuiSommesNousPage() {
  const data = (await getQuiSommesNous()) ?? DEFAULT_QUI_SOMMES_NOUS;

  return (
    <main>
      <QuiSommesNousHero data={data.heroSection} />
      <QuiSommesNousMission data={data.missionSection} />
      <QuiSommesNousConviction data={data.convictionSection} />
      <QuiSommesNousValues data={data.valuesSection} />
      <QuiSommesNousQuote data={data.quoteSection} />
    </main>
  );
}
