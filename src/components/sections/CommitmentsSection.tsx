import SectionHeader from "@/components/ui/SectionHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import { RemunerationIcon, GrowthIcon, SupportIcon, ExpertiseIcon, MissionIcon } from "@/components/icons";

const COMMITMENTS = [
  {
    Icon: RemunerationIcon,
    title: "Transparence",
    description:
      "Vous connaissez précisément votre rémunération, les frais appliqués et chaque étape de votre activité. Aucune mauvaise surprise.",
  },
  {
    Icon: GrowthIcon,
    title: "Réactivité",
    description: "Nos équipes répondent rapidement à chacune de vos demandes. Parce que votre activité ne peut pas attendre.",
  },
  {
    Icon: SupportIcon,
    title: "Proximité",
    description:
      "Vous bénéficiez d'un interlocuteur dédié qui connaît votre activité et vous accompagne à chaque étape de votre parcours.",
  },
  {
    Icon: ExpertiseIcon,
    title: "Expertise",
    description: "Plus de 10 ans d'expérience dans le portage salarial et l'accompagnement des indépendants.",
  },
];

export default function CommitmentsSection() {
  return (
    <section className="mx-auto max-w-[1120px] px-14 py-[90px]">
      <SectionHeader
        pill="NOS ENGAGEMENTS"
        title="Nos engagements, votre tranquillité d'esprit"
        description={
          <>
            Chez <strong className="font-bold text-red">Freelinx</strong>, nous avons construit notre
            accompagnement autour de quatre engagements forts.
          </>
        }
      />

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {COMMITMENTS.map((c) => (
          <div key={c.title} className="rounded-[20px] border border-[#F0F0F3] bg-white px-[26px] pb-[26px] pt-[30px] text-center">
            <div className="mx-auto mb-4 flex h-[92px] w-[92px] items-center justify-center rounded-full bg-pink-pale">
              <c.Icon />
            </div>
            <h3 className="mb-2 text-[15px] font-bold text-navy">{c.title}</h3>
            <p className="text-[12.5px] leading-[1.6] text-gray-text">{c.description}</p>
          </div>
        ))}
      </div>

      <CtaBanner
        className="mt-11"
        icon={<MissionIcon />}
        title="Un partenaire engagé à vos côtés"
        description="Notre réussite dépend de la vôtre. Nous mettons tout en œuvre pour vous aider à aller plus loin."
        primaryLabel="Découvrir nos services →"
        secondaryLabel="Être rappelé par un expert"
      />
    </section>
  );
}
