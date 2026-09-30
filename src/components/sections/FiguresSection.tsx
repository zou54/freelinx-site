import SectionHeader from "@/components/ui/SectionHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import { ExpertiseIcon, RemunerationIcon, CoinIcon, NoFeesIcon, DocumentIcon } from "@/components/icons";

const FIGURES = [
  {
    Icon: ExpertiseIcon,
    big: "10+",
    cap: "ANNÉES D'EXPÉRIENCE",
    description: "Plus de 10 ans d'expertise dans le portage salarial et l'accompagnement des indépendants.",
  },
  {
    Icon: RemunerationIcon,
    big: (
      <>
        100<span className="text-[24px]">%</span>
      </>
    ),
    cap: "DE TRANSPARENCE",
    description: "Une information claire et complète sur votre rémunération, les frais et chaque étape.",
  },
  {
    Icon: CoinIcon,
    big: (
      <>
        5<span className="text-[24px]">%</span>
      </>
    ),
    cap: "DE FRAIS DE GESTION",
    description: "Un taux compétitif et tout inclus pour une gestion complète et un accompagnement de qualité.",
  },
  {
    Icon: NoFeesIcon,
    big: "0€",
    cap: "DE FRAIS CACHÉS",
    description: "Aucune mauvaise surprise. Vous savez exactement ce que vous payez.",
  },
];

export default function FiguresSection() {
  return (
    <section className="mx-auto max-w-[1120px] px-14 py-[90px]">
      <SectionHeader
        pill="FREELINX EN QUELQUES CHIFFRES"
        title="Freelinx en quelques chiffres"
        description="Des résultats qui reflètent notre engagement et la confiance que nous accordent nos consultants au quotidien."
      />

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {FIGURES.map((f) => (
          <div
            key={f.cap}
            className="rounded-[20px] border border-[#F0F0F3] bg-white px-[22px] py-[34px] text-center shadow-[0_4px_20px_-14px_rgba(11,15,43,0.1)]"
          >
            <div className="mx-auto mb-[18px] flex h-[92px] w-[92px] items-center justify-center rounded-full bg-pink-pale">
              <f.Icon />
            </div>
            <div className="mb-1.5 text-[46px] font-extrabold text-navy">{f.big}</div>
            <div className="mb-3.5 text-[11.5px] font-bold tracking-[0.6px] text-red">{f.cap}</div>
            <p className="text-[12.5px] leading-[1.6] text-gray-text">{f.description}</p>
          </div>
        ))}
      </div>

      <CtaBanner
        className="mt-11"
        icon={<DocumentIcon />}
        title="Envie d'en savoir plus ?"
        description="Nos experts sont à votre disposition pour répondre à vos questions et réaliser une simulation personnalisée."
        primaryLabel="Je demande une simulation →"
        secondaryLabel="Être rappelé par un expert"
      />
    </section>
  );
}
