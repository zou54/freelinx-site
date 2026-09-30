function Eyebrow({ title }: { title: string }) {
  return (
    <div className="mb-[22px] flex items-center gap-3">
      <div className="h-[22px] w-1 rounded-sm bg-red" />
      <h2 className="text-[23px] font-bold text-navy">{title}</h2>
    </div>
  );
}

function TriLink({ from, to }: { from: string; to: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <span className="whitespace-nowrap text-[11px] font-bold text-red">{from}</span>
      <div className="flex w-full items-center gap-1">
        <span className="h-0 w-0 flex-shrink-0 border-y-[4px] border-r-[6px] border-y-transparent border-r-red" />
        <div className="h-px flex-1 bg-[linear-gradient(to_right,var(--color-red)_45%,transparent_0%)] bg-[length:6px_1px] bg-repeat-x" />
        <span className="h-0 w-0 flex-shrink-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-red" />
      </div>
      <span className="whitespace-nowrap text-[11px] font-bold text-red">{to}</span>
    </div>
  );
}

export default function PortageSalarialTripartite() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-[46px] sm:px-14">
      <Eyebrow title="Qu'est-ce que le portage salarial ?" />
      <div className="grid grid-cols-1 items-center gap-11 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <p className="mb-3.5 text-[14.5px] leading-[1.75] text-gray-text">
            Le portage salarial est une relation tripartite entre vous, la société de portage (Freelinx) et vos
            clients. Vous réalisez vos missions en toute autonomie, nous nous occupons du reste.
          </p>
          <p className="text-[14.5px] leading-[1.75] text-gray-text">
            Vous bénéficiez ainsi du meilleur des deux mondes&nbsp;: la liberté d&apos;un indépendant et la
            sécurité d&apos;un salarié.
          </p>
        </div>

        <div className="rounded-[22px] bg-pink-pale-2 px-6 py-[30px] sm:px-7">
          <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[auto_1fr_auto_1fr_auto]">
            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_-10px_rgba(11,15,43,0.15)]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E8154F" strokeWidth="1.6">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1" />
                </svg>
              </div>
              <h5 className="mt-1 text-[13.5px] font-bold tracking-[0.3px] text-navy">VOUS</h5>
              <p className="text-[11.5px] leading-[1.4] text-gray-text">Consultant indépendant</p>
            </div>

            <TriLink from="Contrat de travail" to="Salaire mensuel" />

            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-red text-white shadow-[0_12px_28px_-8px_rgba(232,21,79,0.5)]">
                <span className="text-[20px] font-extrabold">F</span>
              </div>
              <h5 className="mt-1 text-[13.5px] font-bold tracking-[0.3px] text-navy">FREELINX</h5>
              <p className="text-[11.5px] leading-[1.4] text-gray-text">Société de portage salarial</p>
            </div>

            <TriLink from="Contrat de prestation" to="Facturation de la mission" />

            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_-10px_rgba(11,15,43,0.15)]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E8154F" strokeWidth="1.6">
                  <rect x="3" y="7" width="18" height="14" rx="2" />
                  <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
              </div>
              <h5 className="mt-1 text-[13.5px] font-bold tracking-[0.3px] text-navy">VOS CLIENTS</h5>
              <p className="text-[11.5px] leading-[1.4] text-gray-text">Entreprises, PME, grands comptes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
