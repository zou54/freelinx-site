function Eyebrow({ title }: { title: string }) {
  return (
    <div className="mb-[22px] flex items-center gap-3">
      <div className="h-[22px] w-1 rounded-sm bg-red" />
      <h2 className="text-[23px] font-bold text-navy">{title}</h2>
    </div>
  );
}

const STEPS = [
  {
    title: "Vous trouvez vos missions",
    description: "Vous prospectez, négociez librement vos missions et vos tarifs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M20 20l-4.8-4.8" />
      </svg>
    ),
  },
  {
    title: "Vous signez votre contrat",
    description: "Nous établissons ensemble votre contrat de travail et votre proposition commerciale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M9 12h6M9 16h6" />
      </svg>
    ),
  },
  {
    title: "Nous facturons vos clients",
    description: "Nous émettons les factures et assurons le suivi des paiements.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M17 7.5a5 5 0 100 9" />
        <path d="M4 9.5h9M4 13.5h7" />
      </svg>
    ),
  },
  {
    title: "Nous gérons l'administratif",
    description: "Nous nous occupons de toutes les déclarations et charges sociales.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    title: "Vous percevez votre salaire",
    description: "Vous recevez votre salaire chaque mois, en toute sécurité.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="6.5" width="18" height="13" rx="2" />
        <path d="M3 10.5h18" />
        <circle cx="16" cy="14.5" r="1.3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function PortageSalarialSteps() {
  return (
    <section className="mx-auto max-w-[1120px] rounded-[28px] bg-pink-pale-2 px-6 py-[46px] sm:px-14">
      <Eyebrow title="Comment ça fonctionne ?" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-5">
        {STEPS.map((step, i) => (
          <div key={step.title} className="relative px-2 text-center">
            {i < STEPS.length - 1 && (
              <span className="absolute left-[calc(50%+46px)] right-[calc(-50%+46px)] top-[14px] hidden h-px bg-[linear-gradient(to_right,var(--color-red)_50%,transparent_0%)] bg-[length:6px_1px] bg-repeat-x sm:block" />
            )}
            <div className="relative z-[2] mx-auto mb-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-red text-[12.5px] font-bold text-white shadow-[0_6px_14px_-4px_rgba(232,21,79,0.5)]">
              {i + 1}
            </div>
            <div className="mx-auto mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white text-red [&_svg]:h-7 [&_svg]:w-7">
              {step.icon}
            </div>
            <h5 className="mb-2 text-[14px] font-bold leading-[1.3] text-navy">{step.title}</h5>
            <p className="text-[11.5px] leading-[1.6] text-gray-text">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
