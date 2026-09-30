const CHECKS = [
  "Gestion administrative",
  "Déclarations sociales et fiscales",
  "Gestion comptable",
  "Assurance responsabilité civile",
  "Gestion de la paie",
  "Protection sociale complète",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-red">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  );
}

export default function TarifsTransparency() {
  return (
    <section className="mx-auto max-w-[1120px] px-14 py-[52px]">
      <div className="grid grid-cols-1 items-stretch gap-9 lg:grid-cols-2">
        <div>
          <h3 className="mb-2.5 text-[19px] font-bold text-navy">Transparence &amp; simplicité</h3>
          <div className="mb-4 h-[3px] w-9 rounded-sm bg-red" />
          <p className="mb-[18px] text-[13.5px] leading-[1.7] text-gray-text">
            Nos frais de gestion couvrent l&apos;ensemble des services nécessaires à la gestion de votre activité en
            toute sérénité.
          </p>
          <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {CHECKS.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[13px] font-medium text-navy">
                <CheckIcon />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden rounded-[20px] bg-pink-pale px-[34px] py-9">
          <div className="mb-3 text-[50px] font-extrabold leading-none text-red">&ldquo;</div>
          <p className="relative z-[1] mb-3.5 text-[15px] leading-[1.6] text-navy">
            Aucun frais d&apos;entrée, aucun abonnement, aucun frais caché.
          </p>
          <p className="relative z-[1] text-[15px] font-bold leading-[1.6] text-navy">
            Vous ne payez que nos frais de gestion sur votre chiffre d&apos;affaires.
          </p>
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-8 -right-1.5 select-none text-[150px] font-extrabold leading-none text-red/[0.08]"
          >
            €
          </div>
        </div>
      </div>
    </section>
  );
}
