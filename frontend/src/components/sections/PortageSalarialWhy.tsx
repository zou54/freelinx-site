function Eyebrow({ title }: { title: string }) {
  return (
    <div className="mb-[22px] flex items-center gap-3">
      <div className="h-[22px] w-1 rounded-sm bg-red" />
      <h2 className="text-[23px] font-bold text-navy">{title}</h2>
    </div>
  );
}

const REASONS = [
  {
    title: "+ 10 ans d'expérience",
    description: "Une expertise solide du portage salarial au service des indépendants.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20v-1a5 5 0 015-5h4a5 5 0 015 5v1" />
        <circle cx="18" cy="8" r="2.4" />
      </svg>
    ),
  },
  {
    title: "Des centaines de consultants accompagnés",
    description: "La confiance de nombreux indépendants dans tous les secteurs d'activité.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 8.5c0-2-1.6-3.5-3.6-3.5-1.3 0-2.5.7-3.1 1.8a3.6 3.6 0 00-3.1-1.8C8.2 5 6.6 6.5 6.6 8.5c0 4 6.7 8 6.7 8s6.7-4 6.7-8z" />
      </svg>
    ),
  },
  {
    title: "Transparence totale",
    description: "Des frais clairs, aucun frais caché, aucune mauvaise surprise.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 018 0v3" />
      </svg>
    ),
  },
  {
    title: "Accompagnement humain",
    description: "Un interlocuteur dédié et réactif à chaque étape de votre activité.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.18 2 2 0 014.11 2h3" />
      </svg>
    ),
  },
  {
    title: "Satisfaction client",
    description: "La satisfaction de nos consultants est notre meilleure fierté.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l2.4 5 5.6.5-4.2 3.8 1.3 5.5L12 14l-5.1 2.8 1.3-5.5L4 7.5 9.6 7z" />
      </svg>
    ),
  },
  {
    title: "Croissance ensemble",
    description: "Nous évoluons avec vous pour soutenir votre réussite et vos ambitions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
];

export default function PortageSalarialWhy() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-[46px] sm:px-14">
      <Eyebrow title="Pourquoi choisir Freelinx ?" />
      <div className="grid grid-cols-2 gap-x-4 gap-y-[30px] sm:grid-cols-3 lg:grid-cols-6">
        {REASONS.map((r) => (
          <div key={r.title} className="text-center">
            <div className="mx-auto mb-3.5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-pink-pale text-red [&_svg]:h-[23px] [&_svg]:w-[23px]">
              {r.icon}
            </div>
            <h5 className="mb-1.5 text-[13px] font-bold leading-[1.3] text-navy">{r.title}</h5>
            <p className="text-[11px] leading-[1.55] text-gray-text">{r.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
