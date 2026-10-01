import { PortageCommercialCheckCircleIcon, PortageCommercialPhoneOutlineIcon } from "@/components/icons/portage-commercial";
import type { FinalCtaData } from "@/lib/content/portage-commercial";

export default function PortageCommercialFinalCta({ data }: { data: FinalCtaData }) {
  const checks = data.checklistItems ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-6 py-11 sm:px-10">
      <div className="grid grid-cols-1 items-center gap-7 rounded-[22px] bg-pink-pale p-6 sm:p-[34px] lg:grid-cols-3">
        <div>
          <h3 className="mb-2 text-[20px] font-bold text-navy">{data.title}</h3>
          <div className="mb-2.5 h-[3px] w-[38px] rounded-full bg-red" />
          {data.paragraph && <p className="max-w-[380px] text-[13px] text-gray-text">{data.paragraph}</p>}
        </div>

        <div className="flex flex-col gap-3 justify-self-start lg:justify-self-center">
          {checks.map((c) => (
            <div key={c.label} className="flex items-center gap-2 whitespace-nowrap text-[12.5px] font-semibold text-navy">
              <PortageCommercialCheckCircleIcon width={15} height={15} className="flex-shrink-0 text-red" />
              {c.label}
            </div>
          ))}
        </div>

        <div className="flex min-w-[245px] flex-col gap-3 justify-self-start lg:justify-self-end">
          {data.primaryCtaLabel && (
            <a
              href={data.primaryCtaHref ?? "#"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red px-[22px] py-3 text-[14px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.5)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark"
            >
              {data.primaryCtaLabel}
            </a>
          )}
          {data.secondaryCtaLabel && (
            <a
              href={data.secondaryCtaHref ?? "#"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-[1.5px] border-[#E3E4EA] bg-white px-[22px] py-3 text-[14px] font-semibold text-navy transition-colors duration-150 hover:border-red hover:text-red"
            >
              <PortageCommercialPhoneOutlineIcon width={16} height={16} />
              {data.secondaryCtaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
