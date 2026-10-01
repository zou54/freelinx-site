import type { QsnHeroData } from "@/lib/content/qui-sommes-nous";

export default function QuiSommesNousHero({ data }: { data: QsnHeroData }) {
  const team = data.team ?? [];

  return (
    <section className="pb-[60px] pt-12">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-6 sm:px-14 lg:grid-cols-2">
        <div>
          {data.pill && (
            <div className="mb-3.5 text-[12px] font-extrabold uppercase tracking-[0.6px] text-red">{data.pill}</div>
          )}
          <h1 className="mb-[18px] text-[34px] leading-[1.25] text-navy">{data.title}</h1>
          <div className="mb-5 h-1 w-12 rounded-full bg-red" />
          {data.paragraph1 && <p className="mb-3.5 text-[14.5px] leading-[1.75] text-gray-text">{data.paragraph1}</p>}
          {data.paragraph2 && <p className="text-[14.5px] leading-[1.75] text-gray-text">{data.paragraph2}</p>}
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -right-24 top-[8%] -z-0 h-[240px] w-[240px] rounded-full bg-gradient-to-br from-red to-red-dark sm:-right-[140px] sm:h-[340px] sm:w-[340px]"
          />
          <div className="relative z-[1] grid grid-cols-2 gap-3 sm:gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-[18px] border border-[#F0DCE2] bg-white shadow-[0_24px_48px_-28px_rgba(11,15,43,0.3)]"
              >
                <div
                  className={`relative flex aspect-[3/4] items-center justify-center overflow-hidden ${
                    member.variant === "color"
                      ? "bg-gradient-to-br from-[#FFE3EC] to-[#F7A9C0]"
                      : "bg-gradient-to-br from-[#EDEEF2] to-[#C9CBD3]"
                  }`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(255,255,255,0.35)_1.5px,transparent_1.5px)] [background-size:16px_16px]"
                  />
                  {member.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="relative z-[1] h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className={`relative z-[1] flex h-[104px] w-[104px] items-center justify-center rounded-full font-heading text-[32px] font-extrabold text-white shadow-[0_14px_30px_-12px_rgba(11,15,43,0.35)] ${
                        member.variant === "color"
                          ? "bg-gradient-to-br from-red to-red-dark"
                          : "bg-gradient-to-br from-[#4A4E5C] to-[#1E212E]"
                      }`}
                    >
                      {member.initials}
                    </div>
                  )}
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
