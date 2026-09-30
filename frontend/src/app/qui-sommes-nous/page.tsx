import type { Metadata } from "next";
import QuiSommesNousHero from "@/components/sections/QuiSommesNousHero";
import QuiSommesNousMission from "@/components/sections/QuiSommesNousMission";
import QuiSommesNousConviction from "@/components/sections/QuiSommesNousConviction";
import QuiSommesNousValues from "@/components/sections/QuiSommesNousValues";
import QuiSommesNousQuote from "@/components/sections/QuiSommesNousQuote";

export const metadata: Metadata = {
  title: "Qui sommes-nous — Freelinx",
  description:
    "Freelinx, un partenaire de confiance à vos côtés pour aller plus loin : notre mission, nos convictions et nos valeurs.",
};

export default function QuiSommesNousPage() {
  return (
    <main>
      <QuiSommesNousHero />
      <QuiSommesNousMission />
      <QuiSommesNousConviction />
      <QuiSommesNousValues />
      <QuiSommesNousQuote />
    </main>
  );
}
