export default function PortageSalarialHero() {
  const checklist = [
    {
      label: "Sécurité du statut salarié",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      label: "Simplicité administrative",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 3h7l4 4v14H7z" />
          <path d="M9 12h6M9 16h6" />
        </svg>
      ),
    },
    {
      label: "Liberté et autonomie",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 3l7 7-8 8-7-7 8-8z" />
          <path d="M6 18l-3 3" />
        </svg>
      ),
    },
    {
      label: "Accompagnement personnalisé",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-pale-2 to-white to-70% pb-[70px] pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[140px] -right-[180px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(232,21,79,0.10)_0%,rgba(232,21,79,0)_70%)]"
      />
      <div className="relative mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-9 px-6 sm:px-14 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="mb-3.5 text-[32px] leading-[1.22] font-bold text-navy lg:text-[38px]">
            Le portage salarial, la liberté d&apos;entreprendre en toute sécurité.
          </h1>
          <div className="mb-5 h-1 w-12 rounded-full bg-red" />
          <p className="mb-3 text-[14.5px] leading-[1.7] text-gray-text">
            Le portage salarial est une solution qui permet aux professionnels indépendants de développer leur
            activité librement tout en bénéficiant du statut de salarié et d&apos;une protection sociale
            complète.
          </p>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-gray-text">
            Chez <strong className="font-semibold text-navy">Freelinx</strong>, nous simplifions votre quotidien
            administratif pour que vous puissiez vous concentrer sur l&apos;essentiel&nbsp;: vos missions et vos
            clients.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href="#"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-red px-[18px] py-3 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.5)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark"
            >
              Découvrir le portage salarial →
            </a>
            <a
              href="/simulateur"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-[#E3E4EA] bg-white px-[18px] py-3 text-[13.5px] font-semibold text-navy transition-all duration-150 hover:-translate-y-px hover:border-red hover:text-red"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M8 2v4M16 2v4M4 10h16" />
              </svg>
              Demander une simulation
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl bg-white px-6 py-[22px] shadow-[0_20px_44px_-20px_rgba(11,15,43,0.25)]">
          {checklist.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="h-[19px] w-[19px] flex-shrink-0 text-red">{item.icon}</span>
              <span className="text-[13px] font-semibold text-navy">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
