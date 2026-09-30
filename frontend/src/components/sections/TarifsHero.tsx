const FEATURES = [
  {
    title: "Transparence totale",
    description: "Aucun frais caché",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Sécurité",
    description: "Protection sociale incluse",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5l8-3z" />
      </svg>
    ),
  },
  {
    title: "Compétitivité",
    description: "Des frais de gestion maîtrisés",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2a10 10 0 1010 10H12V2z" />
        <path d="M12 2a10 10 0 019 5.5L12 12V2z" fill="currentColor" stroke="none" opacity="0.15" />
      </svg>
    ),
  },
  {
    title: "Accompagnement",
    description: "Un service réactif et humain",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1" />
      </svg>
    ),
  },
];

export default function TarifsHero() {
  return (
    <section className="bg-gradient-to-r from-pink-pale-2 via-pink-pale-2/90 to-white pb-[70px] pt-16">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-[60px] px-14 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="mb-3.5 text-[12px] font-extrabold uppercase tracking-[0.6px] text-red">Nos tarifs</div>
          <h1 className="mb-[18px] text-[34px] leading-[1.2] text-navy">
            Une tarification claire,
            <br />
            juste et <span className="text-red">sans surprise.</span>
          </h1>
          <div className="mb-5 h-1 w-12 rounded-sm bg-red" />
          <p className="mb-2.5 text-[14.5px] leading-[1.75] text-gray-text">
            Chez <strong className="font-bold text-navy">Freelinx</strong>, nous croyons en une{" "}
            <strong className="font-bold text-navy">tarification transparente et compétitive, sans frais cachés.</strong>
          </p>
          <p className="text-[14.5px] leading-[1.75] text-gray-text">
            Vous savez exactement ce que vous payez, pour vous concentrer sur l&apos;essentiel : votre activité.
          </p>
        </div>

        <div className="rounded-[18px] bg-white px-[26px] py-6 shadow-[0_26px_54px_-20px_rgba(11,15,43,0.28)]">
          {FEATURES.map((f, i) => (
            <div key={f.title} className={`flex items-start gap-3 ${i > 0 ? "mt-[18px]" : ""}`}>
              <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full bg-pink-pale text-red">
                {f.icon}
              </div>
              <div>
                <h6 className="mb-0.5 text-[12.5px] font-bold leading-[1.3] text-navy">{f.title}</h6>
                <p className="text-[10.5px] leading-[1.4] text-gray-text">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
