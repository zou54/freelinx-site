const TEAM = [
  {
    initials: "IB",
    name: "Ibrahim BENAMOUR",
    role: "Président Directeur Général",
    frame: "mono" as const,
  },
  {
    initials: "MG",
    name: "Meryem GHANNAM",
    role: "Directrice Générale",
    frame: "color" as const,
  },
];

export default function QuiSommesNousHero() {
  return (
    <section className="pb-[60px] pt-12">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-6 sm:px-14 lg:grid-cols-2">
        <div>
          <div className="mb-3.5 text-[12px] font-extrabold uppercase tracking-[0.6px] text-red">
            Qui sommes-nous ?
          </div>
          <h1 className="mb-[18px] text-[34px] leading-[1.25] text-navy">
            Freelinx, un partenaire de confiance à vos côtés pour aller plus loin.
          </h1>
          <div className="mb-5 h-1 w-12 rounded-full bg-red" />
          <p className="mb-3.5 text-[14.5px] leading-[1.75] text-gray-text">
            Freelinx, c&apos;est avant tout une équipe d&apos;associés passionnés et expérimentés, forts de plus
            de 10 ans d&apos;expertise dans le domaine du portage salarial et plus de{" "}
            <strong className="font-bold text-navy">20 ans de conseil.</strong>
          </p>
          <p className="text-[14.5px] leading-[1.75] text-gray-text">
            Nous avons créé Freelinx avec une conviction profonde&nbsp;: offrir aux consultants un
            accompagnement qui allie transparence, réactivité et simplicité.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -right-24 top-[8%] -z-0 h-[240px] w-[240px] rounded-full bg-gradient-to-br from-red to-red-dark sm:-right-[140px] sm:h-[340px] sm:w-[340px]"
          />
          <div className="relative z-[1] grid grid-cols-2 gap-3 sm:gap-5">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-[18px] border border-[#F0DCE2] bg-white shadow-[0_24px_48px_-28px_rgba(11,15,43,0.3)]"
              >
                <div
                  className={`relative flex aspect-[3/4] items-center justify-center overflow-hidden ${
                    member.frame === "mono"
                      ? "bg-gradient-to-br from-[#EDEEF2] to-[#C9CBD3]"
                      : "bg-gradient-to-br from-[#FFE3EC] to-[#F7A9C0]"
                  }`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(255,255,255,0.35)_1.5px,transparent_1.5px)] [background-size:16px_16px]"
                  />
                  <div
                    className={`relative z-[1] flex h-[104px] w-[104px] items-center justify-center rounded-full font-heading text-[32px] font-extrabold text-white shadow-[0_14px_30px_-12px_rgba(11,15,43,0.35)] ${
                      member.frame === "mono"
                        ? "bg-gradient-to-br from-[#4A4E5C] to-[#1E212E]"
                        : "bg-gradient-to-br from-red to-red-dark"
                    }`}
                  >
                    {member.initials}
                  </div>
                </div>
                <div className="px-5 pb-[22px] pt-[18px]">
                  <h6 className="mb-1 text-[15px] font-extrabold text-navy">{member.name}</h6>
                  <div className="mb-2.5 text-[12.5px] font-bold text-red">{member.role}</div>
                  <div className="h-[3px] w-[26px] rounded-full bg-red" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
