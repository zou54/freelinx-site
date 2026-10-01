import { resolveIcon, ResolvedIcon } from "@/lib/icon-map";
import type { PcHeroData } from "@/lib/content/portage-commercial";

export default function PortageCommercialHero({ data }: { data: PcHeroData }) {
  const checklist = data.checklist ?? [];

  return (
    <section className="bg-gradient-to-b from-pink-pale-2 to-white pt-10 pb-[70px]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-9 px-6 sm:px-10 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="mb-3.5 text-[31px] leading-[1.22] font-bold text-navy">
            {data.title}
            {data.highlightLine && (
              <>
                <br />
                <span className="text-red">{data.highlightLine}</span>
              </>
            )}
          </h1>
          <div className="mb-5 h-1 w-12 rounded-full bg-red" />
          {data.paragraph1 && (
            <p className="mb-3 text-[14.5px] leading-[1.7] text-gray-text">{data.paragraph1}</p>
          )}
          {data.paragraph2 && (
            <p className="mb-3 text-[14.5px] leading-[1.7] text-gray-text">{data.paragraph2}</p>
          )}
          <div className="mt-5 flex flex-wrap gap-2.5">
            {data.primaryCtaLabel && (
              <a
                href={data.primaryCtaHref ?? "#"}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-red px-[18px] py-3 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.5)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark"
              >
                {data.primaryCtaLabel}
              </a>
            )}
            {data.secondaryCtaLabel && (
              <a
                href={data.secondaryCtaHref ?? "#"}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-[#E3E4EA] bg-white px-[18px] py-3 text-[13.5px] font-semibold text-navy transition-colors duration-150 hover:border-red hover:text-red"
              >
                <ResolvedIcon name="PortageCommercialPhoneOutlineIcon" width={16} height={16} />
                {data.secondaryCtaLabel}
              </a>
            )}
          </div>
        </div>

        <div className="flex min-w-[225px] flex-col gap-4 rounded-2xl bg-white p-[22px] shadow-[0_20px_44px_-20px_rgba(11,15,43,0.25)]">
          {checklist.map((c) => {
            const Icon = resolveIcon(c.icon);
            return (
              <div key={c.text} className="flex items-center gap-3">
                <span className="h-[19px] w-[19px] flex-shrink-0 text-red">
                  <Icon />
                </span>
                <span className="text-[13px] font-semibold text-navy">{c.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
