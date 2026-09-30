import { BarsIcon, ShieldIcon } from "@/components/icons";
import { resolveIcon } from "@/lib/icon-map";
import type { FinalCtaSectionData } from "@/types/strapi";

export default function FinalCtaSection({ data }: { data: FinalCtaSectionData }) {
  const iconItems = data.iconItems ?? [];
  const statItems = data.statItems ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-14 pb-[90px] pt-[30px]">
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-red to-red-dark p-6 text-white sm:p-14">
        <div className="grid grid-cols-1 items-start gap-[50px] lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            {data.badge && (
              <span className="mb-[22px] inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-white bg-white px-[18px] py-[7px] text-[12.5px] font-bold tracking-[0.6px] text-red">
                {data.badge}
              </span>
            )}
            <h2 className="mb-[18px] text-[34px] font-bold leading-[1.2]">{data.title}</h2>
            <div className="mb-[22px] h-[3px] w-[46px] rounded-full bg-white" />
            {data.paragraph && (
              <p className="mb-[18px] max-w-[440px] text-[15.5px] leading-[1.7] opacity-[0.92]">{data.paragraph}</p>
            )}
            {data.quote && (
              <p className="mb-[34px] text-[15.5px] font-semibold italic">
                <u className="decoration-white/60">{data.quote}</u>
              </p>
            )}

            <div className="grid grid-cols-2 gap-[18px]">
              {iconItems.map((item) => {
                const Icon = resolveIcon(item.icon);
                return (
                  <div key={item.title} className="text-left">
                    <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-white/18">
                      <Icon width={36} height={36} className="[&_path]:fill-white" />
                    </div>
                    <h5 className="mb-1.5 text-[14.5px] font-bold">{item.title}</h5>
                    <p className="text-[12.5px] leading-[1.5] opacity-[0.88]">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="relative flex aspect-[4/3.1] w-full items-center justify-center overflow-hidden rounded-[24px] border-[6px] border-white/25 bg-gradient-to-br from-white/30 to-white/[0.08]">
                <div aria-hidden className="absolute -left-[30px] -top-[30px] h-[140px] w-[140px] rounded-full bg-white/15" />
                <div className="relative z-[1] flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white/22">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1" />
                  </svg>
                </div>
              </div>
              <div className="absolute -top-4 right-9 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                <BarsIcon width={34} height={34} />
              </div>
              <div className="absolute -bottom-4 -left-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                <ShieldIcon width={34} height={34} />
              </div>
            </div>

            <div className="mt-[26px] flex flex-col gap-3">
              {data.primaryCtaLabel && (
                <a
                  href={data.primaryCtaHref ?? "#"}
                  className="inline-flex items-center justify-between gap-2.5 rounded-full bg-white px-[22px] py-[15px] text-[14.5px] font-semibold text-red transition-transform duration-150 hover:-translate-y-px"
                >
                  <span className="flex items-center gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="3" y="4" width="18" height="14" rx="2" />
                      <path d="M8 21h8M12 18v3" />
                      <path d="M7 9l3 3 6-6" />
                    </svg>
                    {data.primaryCtaLabel}
                  </span>
                  →
                </a>
              )}
              {data.secondaryCtaLabel && (
                <a
                  href={data.secondaryCtaHref ?? "#"}
                  className="inline-flex items-center justify-between gap-2.5 rounded-full border-[1.5px] border-white/50 bg-transparent px-[22px] py-[15px] text-[14.5px] font-semibold text-white transition-transform duration-150 hover:-translate-y-px"
                >
                  <span className="flex items-center gap-2.5">
                    <ShieldIcon width={18} height={18} className="[&_path]:fill-white" />
                    {data.secondaryCtaLabel}
                  </span>
                  →
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-[18px] rounded-[20px] bg-white p-6 sm:grid-cols-2 lg:grid-cols-4">
          {statItems.map((s, i) => {
            const Icon = resolveIcon(s.icon);
            return (
              <div key={i} className="flex items-center gap-3.5">
                <div className="flex h-[62px] w-[62px] flex-shrink-0 items-center justify-center rounded-full bg-pink-pale">
                  <Icon width={30} height={30} />
                </div>
                <p className="text-[13.5px] leading-[1.4] text-navy">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
