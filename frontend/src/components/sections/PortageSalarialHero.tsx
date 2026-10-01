import { resolveIcon } from "@/lib/icon-map";
import type { PsHeroData } from "@/lib/content/portage-salarial";

export default function PortageSalarialHero({ data }: { data: PsHeroData }) {
  const checklist = data.checklist ?? [];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-pale-2 to-white to-70% pb-[70px] pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[140px] -right-[180px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(232,21,79,0.10)_0%,rgba(232,21,79,0)_70%)]"
      />
      <div className="relative mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-9 px-6 sm:px-14 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="mb-3.5 text-[32px] leading-[1.22] font-bold text-navy lg:text-[38px]">{data.title}</h1>
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
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-[#E3E4EA] bg-white px-[18px] py-3 text-[13.5px] font-semibold text-navy transition-all duration-150 hover:-translate-y-px hover:border-red hover:text-red"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M8 2v4M16 2v4M4 10h16" />
                </svg>
                {data.secondaryCtaLabel}
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl bg-white px-6 py-[22px] shadow-[0_20px_44px_-20px_rgba(11,15,43,0.25)]">
          {checklist.map((item) => {
            const Icon = resolveIcon(item.icon);
            return (
              <div key={item.text} className="flex items-center gap-3">
                <span className="h-[19px] w-[19px] flex-shrink-0 text-red">
                  <Icon />
                </span>
                <span className="text-[13px] font-semibold text-navy">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
