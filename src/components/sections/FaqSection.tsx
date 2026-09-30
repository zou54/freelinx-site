import SectionHeader from "@/components/ui/SectionHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import { StrokeBadgeIcon, DocumentIcon, ShieldIcon, ClockIcon, CoinIcon, SupportIcon, PhoneIcon } from "@/components/icons";

const FAQS = [
  {
    Icon: StrokeBadgeIcon,
    question: "Est-ce que je reste indépendant ?",
    answer: "Oui, vous restez totalement autonome dans le choix de vos missions, de vos clients, de votre organisation et de vos tarifs.",
  },
  {
    Icon: DocumentIcon,
    question: "Comment est calculé mon salaire ?",
    answer: "Votre salaire dépend de votre chiffre d'affaires, de vos frais professionnels et des charges sociales. Utilisez notre simulateur.",
  },
  {
    Icon: ShieldIcon,
    question: "Puis-je bénéficier du chômage ?",
    answer: "Oui, vous bénéficiez de l'assurance chômage sous conditions, comme tout salarié.",
  },
  {
    Icon: ClockIcon,
    question: "Quand suis-je payé ?",
    answer: "Vous êtes payé chaque mois, même en cas de retard de paiement de votre client, si vous optez pour l'avance de trésorerie.",
  },
  {
    Icon: CoinIcon,
    question: "Quels frais sont appliqués ?",
    answer: "Nos frais de gestion sont transparents et compétitifs : à partir de 5 % de votre chiffre d'affaires. Aucun frais caché.",
  },
  {
    Icon: SupportIcon,
    question: "Qui peut bénéficier du portage salarial ?",
    answer: "Le portage salarial s'adresse aux experts, consultants, ingénieurs, managers de transition et indépendants qualifiés.",
  },
];

export default function FaqSection() {
  return (
    <section className="mx-auto max-w-[1120px] px-14 py-[90px]">
      <SectionHeader
        pill="QUESTIONS FRÉQUENTES"
        title="Vous avez des questions ? Nous avons les réponses."
        description={
          <>
            Retrouvez ici les réponses aux questions les plus courantes sur le portage salarial avec{" "}
            <strong className="font-bold text-red">Freelinx</strong>.
          </>
        }
      />

      <div className="grid grid-cols-1 gap-x-5 gap-y-[38px] md:grid-cols-3">
        {FAQS.map((f) => (
          <div
            key={f.question}
            className="rounded-[20px] border border-[#F0F0F3] bg-white p-[26px] shadow-[0_4px_20px_-14px_rgba(11,15,43,0.1)]"
          >
            <div className="mb-3 flex items-start gap-4">
              <div className="flex h-[68px] w-[68px] flex-shrink-0 items-center justify-center rounded-full bg-pink-pale">
                <f.Icon width={32} height={32} />
              </div>
              <h4 className="flex-1 text-[15.5px] font-bold leading-[1.35] text-navy">{f.question}</h4>
              <span className="text-[18px] font-bold text-red">›</span>
            </div>
            <p className="text-[13.5px] leading-[1.6] text-gray-text">{f.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-[30px] text-center">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#E3E4EA] bg-white px-[22px] py-3 text-[14.5px] font-semibold text-navy transition-all duration-150 hover:-translate-y-px hover:border-red hover:text-red"
        >
          Voir toutes les questions →
        </a>
      </div>

      <CtaBanner
        className="mt-11"
        icon={<PhoneIcon width={42} height={42} />}
        title="Une question spécifique ?"
        description="Nos experts sont à votre écoute pour vous accompagner et vous apporter des réponses personnalisées."
        primaryLabel="Être rappelé par un expert"
        secondaryLabel="Envoyer un message"
      />
    </section>
  );
}
