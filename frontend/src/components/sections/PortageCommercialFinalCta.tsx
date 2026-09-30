const CHECKS = [
  "Accès aux grands comptes",
  "Sécurisation juridique",
  "Facturation & recouvrement",
  "Paiement rapide et sécurisé",
];

export default function PortageCommercialFinalCta() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-11 sm:px-10">
      <div className="grid grid-cols-1 items-center gap-7 rounded-[22px] bg-pink-pale p-6 sm:p-[34px] lg:grid-cols-3">
        <div>
          <h3 className="mb-2 text-[20px] font-bold text-navy">
            Prêt à développer votre activité en toute autonomie&nbsp;?
          </h3>
          <div className="mb-2.5 h-[3px] w-[38px] rounded-full bg-red" />
          <p className="max-w-[380px] text-[13px] text-gray-text">
            FREELINX vous ouvre les portes des grands comptes. Concentrez-vous sur vos missions, nous nous occupons
            du reste.
          </p>
        </div>

        <div className="flex flex-col gap-3 justify-self-start lg:justify-self-center">
          {CHECKS.map((c) => (
            <div key={c} className="flex items-center gap-2 whitespace-nowrap text-[12.5px] font-semibold text-navy">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-red">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12l3 3 5-6" />
              </svg>
              {c}
            </div>
          ))}
        </div>

        <div className="flex min-w-[245px] flex-col gap-3 justify-self-start lg:justify-self-end">
          <a
            href="/simulateur"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red px-[22px] py-3 text-[14px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.5)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark"
          >
            Demander une simulation →
          </a>
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-[1.5px] border-[#E3E4EA] bg-white px-[22px] py-3 text-[14px] font-semibold text-navy transition-colors duration-150 hover:border-red hover:text-red"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.18 2 2 0 014.11 2h3" />
            </svg>
            Être rappelé par un expert
          </a>
        </div>
      </div>
    </section>
  );
}
