const FEATURES = [
  {
    num: 1,
    title: "Vous développez votre activité",
    description: "Prospectez, trouvez vos missions et choisissez librement vos clients.",
  },
  {
    num: 2,
    title: "Nous gérons votre administratif",
    description:
      "Contrats, facturation, paie, déclarations sociales, suivi administratif… nous prenons tout en charge.",
  },
  {
    num: 3,
    title: "Vous profitez de la sécurité du salariat",
    description:
      "Protection sociale, retraite, assurance maladie, chômage, mutuelle… tout en conservant votre autonomie.",
  },
];

export default function WhySection() {
  return (
    <section className="mx-auto max-w-[1120px] px-14 pb-5 pt-[84px]">
      <div className="mx-auto max-w-[700px] text-center">
        <h2 className="mb-[18px] text-[30px] font-bold tracking-[-0.3px] text-navy">
          Pourquoi choisir Freelinx ?
        </h2>
        <p className="mb-3 text-[15.5px] leading-[1.75] text-gray-text">
          Parce que le portage salarial ne se résume pas à établir des bulletins de salaire.
        </p>
        <p className="mb-3 text-[15.5px] leading-[1.75] text-gray-text">
          Notre mission est de vous offrir un véritable environnement de travail sécurisé afin que vous
          puissiez développer votre activité avec sérénité.
        </p>
        <p className="mb-3 text-[15.5px] leading-[1.75] text-gray-text">
          Chez Freelinx, chaque consultant bénéficie d&apos;un{" "}
          <strong className="font-bold text-navy">accompagnement personnalisé</strong>, d&apos;une{" "}
          <strong className="font-bold text-navy">gestion transparente</strong> et d&apos;une équipe
          disponible à chaque étape de son parcours.
        </p>
      </div>

      <div className="mx-auto mb-[100px] mt-[52px] grid max-w-[1080px] grid-cols-1 gap-[22px] lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.num} className="rounded-[20px] border border-[#F0F0F3] bg-white px-[26px] pb-[26px] pt-[30px] relative overflow-hidden shadow-[0_4px_24px_-12px_rgba(11,15,43,0.08)] after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[42px] after:-translate-x-1/2 after:rounded-t-[3px] after:bg-red">
            <div className="mb-[18px] inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-navy text-[14px] font-bold text-white">
              {f.num}
            </div>
            <h3 className="mb-2.5 text-[17px] font-bold leading-[1.35] text-navy">{f.title}</h3>
            <p className="text-[14px] leading-[1.6] text-gray-text">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
