import type { FinalCtaWithChecklist } from "@/lib/content/portage-salarial";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={15} height={15} className="flex-shrink-0 text-red">
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l3 3 5-6" />
  </svg>
);

export default function PortageSalarialFinalCta({ data }: { data: FinalCtaWithChecklist }) {
  const checks = data.checklistItems ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-6 py-[46px] sm:px-14">
      <div className="grid grid-cols-1 items-center gap-7 rounded-[22px] bg-pink-pale px-6 py-[34px] sm:px-10 lg:grid-cols-3">
        <div>
          <h3 className="mb-2 text-[20px] font-bold text-navy">{data.title}</h3>
          <div className="mb-2.5 h-[3px] w-[38px] rounded-full bg-red" />
          {data.paragraph && <p className="max-w-[380px] text-[13px] text-gray-text">{data.paragraph}</p>}
        </div>

        <div className="flex flex-col gap-3 justify-self-start lg:justify-self-center">
          {checks.map((c) => (
            <div key={c.label} className="flex items-center gap-2 whitespace-nowrap text-[12.5px] font-semibold text-navy">
              <CheckIcon />
              {c.label}
            </div>
          ))}
        </div>

        <div className="flex w-full min-w-[245px] flex-col gap-3 justify-self-start lg:justify-self-end">
          {data.primaryCtaLabel && (
            <a
              href={data.primaryCtaHref ?? "#"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red px-[22px] py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.55)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark"
            >
              {data.primaryCtaLabel}
            </a>
          )}
          {data.secondaryCtaLabel && (
            <a
              href={data.secondaryCtaHref ?? "#"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-[1.5px] border-[#E3E4EA] bg-white px-[22px] py-3 text-[14.5px] font-semibold text-navy transition-all duration-150 hover:-translate-y-px hover:border-red hover:text-red"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.18 2 2 0 014.11 2h3" />
              </svg>
              {data.secondaryCtaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
