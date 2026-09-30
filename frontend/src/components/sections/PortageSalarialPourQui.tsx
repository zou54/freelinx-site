function Eyebrow({ title }: { title: string }) {
  return (
    <div className="mb-[22px] flex items-center gap-3">
      <div className="h-[22px] w-1 rounded-sm bg-red" />
      <h2 className="text-[23px] font-bold text-navy">{title}</h2>
    </div>
  );
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={18} height={18} className="flex-shrink-0 text-red">
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l3 3 5-6" />
  </svg>
);

const PROFILES = [
  "Consultants et experts IT",
  "Indépendants et freelances",
  "Managers de transition",
  "Formateurs et coachs",
  "Experts en marketing, finance, RH, organisation…",
  "Ingénieurs et experts métiers",
];

export default function PortageSalarialPourQui() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-[46px] sm:px-14">
      <Eyebrow title="Pour qui ?" />
      <div className="grid grid-cols-1 items-start gap-[50px] lg:grid-cols-2">
        <div>
          <p className="mb-3.5 text-[14.5px] leading-[1.75] text-gray-text">
            Le portage salarial s&apos;adresse à tous les professionnels indépendants qui souhaitent développer
            leur activité en toute autonomie tout en bénéficiant d&apos;un cadre sécurisé.
          </p>
          <p className="text-[14.5px] leading-[1.75] text-gray-text">
            Que vous soyez consultant IT, expert en stratégie, directeur de projet, formateur, ingénieur,
            traducteur, graphiste ou dans tout autre domaine d&apos;expertise, le portage salarial est fait pour
            vous&nbsp;!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-7 gap-y-3.5 sm:grid-cols-2">
          {PROFILES.map((p) => (
            <div key={p} className="flex items-center gap-2.5 text-[13.5px] font-medium text-navy">
              <CheckIcon />
              {p}
            </div>
          ))}
          <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-navy sm:col-span-2">
            <CheckIcon />
            Et bien d&apos;autres professions&nbsp;!
          </div>
        </div>
      </div>
    </section>
  );
}
