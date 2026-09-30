const CHECK_ICON = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0">
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l3 3 5-6" />
  </svg>
);

type Variant = "red" | "blue" | "green";

const VARIANT_STYLES: Record<Variant, { card: string; title: string; amount: string; list: string; btn: string }> = {
  red: {
    card: "bg-pink-pale-2 border-border",
    title: "text-navy",
    amount: "text-red",
    list: "text-red",
    btn: "border-[1.5px] border-red text-red hover:bg-red hover:text-white",
  },
  blue: {
    card: "bg-white border-transparent shadow-[0_28px_56px_-24px_rgba(11,15,43,0.28)]",
    title: "text-[#2C46B5]",
    amount: "text-[#2C46B5]",
    list: "text-[#3B5BDB]",
    btn: "bg-navy text-white hover:bg-[#161B3D]",
  },
  green: {
    card: "bg-[#EAFAF2] border-[#D3EEDF]",
    title: "text-[#0F7A4E]",
    amount: "text-[#0F7A4E]",
    list: "text-[#189A63]",
    btn: "border-[1.5px] border-[#189A63] text-[#0F7A4E] hover:bg-[#189A63] hover:text-white",
  },
};

const PLANS: {
  variant: Variant;
  badge?: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  rate: string;
  items: string[];
  ctaLabel: string;
}[] = [
  {
    variant: "red",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1" />
      </svg>
    ),
    title: "Essentiel",
    subtitle: "L'essentiel pour bien démarrer",
    rate: "5%",
    items: [
      "Gestion administrative complète",
      "Établissement des bulletins de paie",
      "Déclarations sociales et fiscales",
      "Accès à votre espace consultant",
      "Support par email",
    ],
    ctaLabel: "Découvrir l'offre",
  },
  {
    variant: "blue",
    badge: "Recommandé",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l2.4 5 5.6.5-4.2 3.8 1.3 5.5L12 14l-5.1 2.8 1.3-5.5L4 7.5 9.6 7z" />
      </svg>
    ),
    title: "Confort",
    subtitle: "L'équilibre entre service et performance",
    rate: "+1%",
    items: [
      "Tout ce qui est inclus dans Essentiel",
      "Accompagnement personnalisé",
      "Conseils juridiques et fiscaux",
      "Gestion des frais professionnels",
      "Support prioritaire",
      "Suivi régulier de votre activité",
    ],
    ctaLabel: "Découvrir l'offre",
  },
  {
    variant: "red",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 8l4 3 5-7 5 7 4-3-2 11H5L3 8z" />
      </svg>
    ),
    title: "Premium",
    subtitle: "Un accompagnement premium pour aller plus loin",
    rate: "+3%",
    items: [
      "Tout ce qui est inclus dans Essentiel et Confort",
      "Accompagnement dédié",
      "Optimisation de votre rémunération",
      "Conseils stratégiques personnalisés",
      "Gestion des frais professionnels",
      "Avance de trésorerie",
      "Mise en relation & opportunités",
    ],
    ctaLabel: "Découvrir l'offre",
  },
  {
    variant: "green",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      </svg>
    ),
    title: "Portage commercial",
    subtitle: "Développez votre activité en toute autonomie",
    rate: "5%",
    items: [
      "Mise à disposition d'un contrat de prestation",
      "Facturation et encaissement auprès de votre client",
      "Relance et suivi des paiements",
      "Gestion de la TVA",
      "Support administratif et juridique",
      "Tableaux de bord de suivi",
    ],
    ctaLabel: "Découvrir l'offre",
  },
];

export default function TarifsPricingGrid() {
  return (
    <section className="mx-auto max-w-[1120px] px-14 py-[52px]">
      <div className="mx-auto mb-10 max-w-[700px] text-center">
        <h2 className="mb-2.5 text-[26px] font-bold text-navy">Nos formules de portage salarial</h2>
        <div className="mx-auto mb-[18px] h-[3px] w-11 rounded-sm bg-red" />
        <p className="text-[14px] leading-[1.7] text-gray-text">
          Nous vous proposons une structure tarifaire simple basée sur votre chiffre d&apos;affaires mensuel.
          <br />
          <strong className="font-bold text-navy">
            Nos frais de gestion sont dégressifs pour accompagner votre croissance.
          </strong>
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((plan) => {
          const styles = VARIANT_STYLES[plan.variant];
          return (
            <div
              key={plan.title}
              className={`relative flex h-full flex-col rounded-[20px] border px-[22px] pb-[26px] pt-[30px] ${styles.card}`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy px-[18px] py-[7px] text-[10px] font-extrabold uppercase tracking-[0.5px] text-white">
                  {plan.badge}
                </span>
              )}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-red shadow-[0_10px_22px_-12px_rgba(11,15,43,0.2)]">
                {plan.icon}
              </div>
              <div className={`mb-1.5 text-center text-[14.5px] font-extrabold uppercase tracking-[0.3px] ${styles.title}`}>
                {plan.title}
              </div>
              <div className="mb-[18px] min-h-[30px] text-center text-[11.5px] leading-[1.4] text-gray-text">
                {plan.subtitle}
              </div>
              <div className="mx-auto mb-[18px] h-0.5 w-[30px] bg-[#E3CBD3]" />
              <div className={`mb-1 text-center text-[32px] font-extrabold leading-none ${styles.amount}`}>{plan.rate}</div>
              <div className="mb-[22px] text-center text-[11px] leading-[1.5] text-gray-text">
                de frais de gestion
                <br />
                sur votre chiffre d&apos;affaires HT
              </div>
              <div className="mb-6 flex flex-1 flex-col gap-[11px]">
                {plan.items.map((item) => (
                  <div key={item} className={`flex items-start gap-2 text-[12px] font-medium leading-[1.4] text-navy`}>
                    <span className={styles.list}>{CHECK_ICON}</span>
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="#"
                className={`mt-auto inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-3 text-[13.5px] font-semibold transition-all duration-150 ${styles.btn}`}
              >
                {plan.ctaLabel}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
