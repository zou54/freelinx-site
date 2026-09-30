const CHECKLIST = [
  {
    label: "Accès aux grands comptes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Liberté et autonomie préservées",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 13a5 5 0 007.07 0l1.93-1.93a5 5 0 00-7.07-7.07L10.5 5.5" />
        <path d="M14 11a5 5 0 00-7.07 0L5 12.93a5 5 0 007.07 7.07L13.5 18.5" />
      </svg>
    ),
  },
  {
    label: "Développement de votre chiffre d'affaires",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1" />
      </svg>
    ),
  },
  {
    label: "Sécurisation des paiements",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V7a4 4 0 018 0v4" />
      </svg>
    ),
  },
];

export default function PortageCommercialHero() {
  return (
    <section className="bg-gradient-to-b from-pink-pale-2 to-white pt-10 pb-[70px]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-9 px-6 sm:px-10 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="mb-3.5 text-[31px] leading-[1.22] font-bold text-navy">
            Développez votre activité
            <br />
            en toute autonomie,
            <br />
            <span className="text-red">
              sans contraintes
              <br />
              administratives.
            </span>
          </h1>
          <div className="mb-5 h-1 w-12 rounded-full bg-red" />
          <p className="mb-3 text-[14.5px] leading-[1.7] text-gray-text">
            Le portage commercial est une solution qui permet aux indépendants, consultants et commerciaux de
            travailler avec des entreprises, y compris des grands comptes, sans avoir à gérer la complexité
            administrative ou contractuelle.
          </p>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-gray-text">
            Avec <strong className="font-semibold text-navy">Freelinx</strong>, vous conservez votre indépendance
            tout en bénéficiant d&apos;un cadre structuré, sécurisé et parfaitement adapté aux exigences des
            entreprises modernes.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href="#"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-red px-[18px] py-3 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.5)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark"
            >
              Découvrir nos solutions →
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-[#E3E4EA] bg-white px-[18px] py-3 text-[13.5px] font-semibold text-navy transition-colors duration-150 hover:border-red hover:text-red"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.18 2 2 0 014.11 2h3" />
              </svg>
              Être rappelé par un expert
            </a>
          </div>
        </div>

        <div className="flex min-w-[225px] flex-col gap-4 rounded-2xl bg-white p-[22px] shadow-[0_20px_44px_-20px_rgba(11,15,43,0.25)]">
          {CHECKLIST.map((c) => (
            <div key={c.label} className="flex items-center gap-3">
              <span className="h-[19px] w-[19px] flex-shrink-0 text-red">{c.icon}</span>
              <span className="text-[13px] font-semibold text-navy">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
