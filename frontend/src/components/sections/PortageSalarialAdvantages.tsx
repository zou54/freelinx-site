function Eyebrow({ title }: { title: string }) {
  return (
    <div className="mb-[22px] flex items-center gap-3">
      <div className="h-[22px] w-1 rounded-sm bg-red" />
      <h2 className="text-[23px] font-bold text-navy">{title}</h2>
    </div>
  );
}

const ADVANTAGES = [
  {
    title: "Une protection sociale complète",
    description:
      "Assurance maladie, retraite, chômage, prévoyance : vous bénéficiez des mêmes droits qu'un salarié.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5l8-3z" />
      </svg>
    ),
  },
  {
    title: "Zéro gestion administrative",
    description:
      "Nous prenons en charge la facturation, le recouvrement, les déclarations et toutes les formalités légales.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M9 12h6M9 16h6" />
      </svg>
    ),
  },
  {
    title: "Rémunération optimisée",
    description: "Un salaire calculé de manière transparente et des frais de gestion compétitifs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 9a3.5 3.5 0 00-3-1.7c-2 0-3.5 1.7-3.5 4.7s1.5 4.7 3.5 4.7a3.5 3.5 0 003-1.7" />
      </svg>
    ),
  },
  {
    title: "Un accompagnement sur-mesure",
    description: "Un interlocuteur dédié vous conseille et vous accompagne à chaque étape de votre activité.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1" />
      </svg>
    ),
  },
  {
    title: "Liberté totale",
    description: "Choisissez vos missions, vos clients, vos tarifs et organisez votre temps comme vous le souhaitez.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 3l7 7-8 8-7-7 8-8z" />
        <path d="M6 18l-3 3" />
      </svg>
    ),
  },
  {
    title: "Sérénité et sécurité",
    description: "Vous êtes payé chaque mois, même en cas de retard de paiement de votre client.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 11v9M7 11a3 3 0 013-3h6.5a1.5 1.5 0 010 3H12M7 11H4a1 1 0 00-1 1v6a1 1 0 001 1h3" />
      </svg>
    ),
  },
];

export default function PortageSalarialAdvantages() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-[46px] sm:px-14">
      <Eyebrow title="Les avantages du portage salarial" />
      <div className="grid grid-cols-1 gap-x-[30px] gap-y-[26px] sm:grid-cols-3">
        {ADVANTAGES.map((a) => (
          <div key={a.title} className="flex gap-4">
            <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-pink-pale text-red [&_svg]:h-[23px] [&_svg]:w-[23px]">
              {a.icon}
            </div>
            <div>
              <h4 className="mb-1 text-[14.5px] font-bold text-navy">{a.title}</h4>
              <p className="text-[12.5px] leading-[1.55] text-gray-text">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
