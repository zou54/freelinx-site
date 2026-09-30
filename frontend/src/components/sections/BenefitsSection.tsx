import CtaBannerFromData from "@/components/ui/CtaBannerFromData";
import { SecurePaymentIcon } from "@/components/icons";
import { resolveIcon } from "@/lib/icon-map";
import type { BenefitsSectionData } from "@/types/strapi";

export default function BenefitsSection({ data }: { data: BenefitsSectionData }) {
  const benefits = data.benefits ?? [];

  return (
    <section className="mx-auto max-w-[1120px] rounded-[32px] bg-pink-pale-2 px-6 py-[90px] sm:px-14">
      <div className="mb-[46px] grid grid-cols-1 items-center gap-[50px] lg:grid-cols-[1fr_0.85fr]">
        <div>
          {data.pill && (
            <span className="mb-[18px] inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-red bg-white px-[18px] py-[7px] text-[12.5px] font-bold tracking-[0.6px] text-red">
              {data.pill}
            </span>
          )}
          <h2 className="mb-4 text-[28px] font-bold leading-[1.28] text-navy">{data.title}</h2>
          <div className="mb-[18px] h-[3px] w-[46px] rounded-full bg-red" />
          {data.intro1 && <p className="mb-2.5 text-[14.5px] leading-[1.7] text-gray-text">{data.intro1}</p>}
          {data.intro2 && <p className="mb-2.5 text-[14.5px] leading-[1.7] text-gray-text">{data.intro2}</p>}
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#FFE1E9] via-[#FFF6F8] to-pink-pale">
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-[180px] w-[180px] rounded-full bg-red/[0.08]"
            />
            <div
              aria-hidden
              className="absolute -bottom-[60px] -left-7 h-[220px] w-[220px] rounded-full bg-red/[0.06]"
            />
            <div className="absolute left-1/2 top-1/2 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_20px_40px_-16px_rgba(232,21,79,0.35)]">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E8154F" strokeWidth="1.6">
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M8 21h8M12 18v3" />
                <path d="M7 9l3 3 6-6" />
              </svg>
            </div>
          </div>
          {data.highlightCardText && (
            <div className="absolute -bottom-[18px] -left-[18px] flex max-w-[230px] items-center gap-3 rounded-2xl bg-white px-[18px] py-3.5 shadow-[0_12px_30px_-10px_rgba(11,15,43,0.25)]">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-pink-pale">
                <SecurePaymentIcon width={28} height={28} />
              </div>
              <p className="text-[12.5px] font-bold leading-[1.4] text-red">{data.highlightCardText}</p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-9 lg:grid-cols-4">
        {benefits.map((b) => {
          const Icon = resolveIcon(b.icon);
          return (
            <div key={b.title} className="rounded-[20px] border border-[#F0F0F3] bg-white px-[18px] pb-5 pt-6 text-center">
              <div className="mx-auto mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-pink-pale">
                <Icon width={28} height={28} />
              </div>
              <h3 className="mb-1.5 text-[14px] font-bold text-navy">{b.title}</h3>
              <p className="text-[12px] leading-[1.5] text-gray-text">{b.description}</p>
            </div>
          );
        })}
      </div>

      <CtaBannerFromData className="mt-11" data={data.cta} />
    </section>
  );
}
