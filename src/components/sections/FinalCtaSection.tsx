import { ExpertiseIcon, MissionIcon, SecurePaymentIcon, GrowthIcon, DocumentIcon, ShieldIcon, BarsIcon } from "@/components/icons";

const ICON_ITEMS = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
        <path d="M12 2l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Sécurité",
    description: "Le statut salarié et une protection sociale complète.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
        <path d="M7 11v9H4a1 1 0 01-1-1v-7a1 1 0 011-1h3zM7 11l4-7a2 2 0 012 2v4h5.5a2 2 0 011.98 2.3l-1.1 7A2 2 0 0117.4 21H9a2 2 0 01-2-2v-8z" />
      </svg>
    ),
    title: "Simplicité",
    description: "Zéro gestion administrative, nous nous occupons de tout.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1" />
      </svg>
    ),
    title: "Accompagnement",
    description: "Un interlocuteur dédié, disponible et à l'écoute.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 9a3.5 3.5 0 00-3-1.7c-2 0-3.5 1.7-3.5 4.7s1.5 4.7 3.5 4.7a3.5 3.5 0 003-1.7M8 11h5M8 13h4" />
      </svg>
    ),
    title: "Transparence",
    description: "Des frais clairs, aucun frais caché, aucune surprise.",
  },
];

const STAT_ITEMS = [
  { Icon: ExpertiseIcon, text: <>Plus de <strong className="text-red">10 ans</strong> d&apos;expérience au service des consultants.</> },
  { Icon: MissionIcon, text: <>Des <strong className="text-red">centaines</strong> de consultants nous font déjà confiance.</> },
  { Icon: SecurePaymentIcon, text: <>Paiement <strong className="text-red">sécurisé</strong> et confidentialité garantie.</> },
  { Icon: GrowthIcon, text: <>Une équipe <strong className="text-red">réactive</strong> et à votre écoute.</> },
];

export default function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-[1120px] px-14 pb-[90px] pt-[30px]">
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-red to-red-dark p-6 text-white sm:p-14">
        <div className="grid grid-cols-1 items-start gap-[50px] lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="mb-[22px] inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-white bg-white px-[18px] py-[7px] text-[12.5px] font-bold tracking-[0.6px] text-red">
              PRÊT À PASSER À L&apos;ACTION ?
            </span>
            <h2 className="mb-[18px] text-[34px] font-bold leading-[1.2]">
              Prêt à développer votre activité en toute sérénité ?
            </h2>
            <div className="mb-[22px] h-[3px] w-[46px] rounded-full bg-white" />
            <p className="mb-[18px] max-w-[440px] text-[15.5px] leading-[1.7] opacity-[0.92]">
              Notre équipe d&apos;experts vous accompagne à chaque étape et réalise une simulation
              personnalisée de votre future rémunération.
            </p>
            <p className="mb-[34px] text-[15.5px] font-semibold italic">
              Votre liberté d&apos;entreprendre, <u className="decoration-white/60">notre expertise à vos côtés.</u>
            </p>

            <div className="grid grid-cols-2 gap-[18px]">
              {ICON_ITEMS.map((item) => (
                <div key={item.title} className="text-left">
                  <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-white/18">
                    {item.icon}
                  </div>
                  <h5 className="mb-1.5 text-[14.5px] font-bold">{item.title}</h5>
                  <p className="text-[12.5px] leading-[1.5] opacity-[0.88]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="relative flex aspect-[4/3.1] w-full items-center justify-center overflow-hidden rounded-[24px] border-[6px] border-white/25 bg-gradient-to-br from-white/30 to-white/[0.08]">
                <div aria-hidden className="absolute -left-[30px] -top-[30px] h-[140px] w-[140px] rounded-full bg-white/15" />
                <div className="relative z-[1] flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white/22">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1" />
                  </svg>
                </div>
              </div>
              <div className="absolute -top-4 right-9 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                <BarsIcon width={34} height={34} />
              </div>
              <div className="absolute -bottom-4 -left-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                <ShieldIcon width={34} height={34} />
              </div>
            </div>

            <div className="mt-[26px] flex flex-col gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-between gap-2.5 rounded-full bg-white px-[22px] py-[15px] text-[14.5px] font-semibold text-red transition-transform duration-150 hover:-translate-y-px"
              >
                <span className="flex items-center gap-2.5">
                  <DocumentIcon width={18} height={18} />
                  DEMANDER UNE SIMULATION
                </span>
                →
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-between gap-2.5 rounded-full border-[1.5px] border-white/50 bg-transparent px-[22px] py-[15px] text-[14.5px] font-semibold text-white transition-transform duration-150 hover:-translate-y-px"
              >
                <span className="flex items-center gap-2.5">
                  <ShieldIcon width={18} height={18} className="[&_path]:fill-white" />
                  ÊTRE RAPPELÉ
                </span>
                →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-[18px] rounded-[20px] bg-white p-6 sm:grid-cols-2 lg:grid-cols-4">
          {STAT_ITEMS.map((s, i) => (
            <div key={i} className="flex items-center gap-3.5">
              <div className="flex h-[62px] w-[62px] flex-shrink-0 items-center justify-center rounded-full bg-pink-pale">
                <s.Icon width={30} height={30} />
              </div>
              <p className="text-[13.5px] leading-[1.4] text-navy">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
