import SectionHeader from "@/components/ui/SectionHeader";
import CtaBannerFromData from "@/components/ui/CtaBannerFromData";
import { resolveIcon } from "@/lib/icon-map";
import type { StepsSectionData } from "@/types/strapi";

export default function StepsSection({ data }: { data: StepsSectionData }) {
  const steps = data.steps ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-14 py-[90px]">
      <SectionHeader pill={data.pill ?? ""} title={data.title} description={data.description} />

      <div className="grid grid-cols-1 gap-11 md:grid-cols-4 md:gap-0">
        {steps.map((step, i) => {
          const Icon = resolveIcon(step.icon);
          return (
            <div key={step.title} className="relative flex flex-col items-center px-3.5">
              <div className="relative z-[2] mb-[-20px] flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red text-[15px] font-bold text-white shadow-[0_6px_14px_-4px_rgba(232,21,79,0.5)]">
                {i + 1}
              </div>
              <div className="relative w-full overflow-hidden rounded-[20px] border border-[#F0F0F3] bg-white px-[26px] pb-[26px] pt-9 text-center shadow-[0_4px_24px_-12px_rgba(11,15,43,0.08)] after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[42px] after:-translate-x-1/2 after:rounded-t-[3px] after:bg-red">
                <div className="mx-auto mb-4 flex h-[92px] w-[92px] items-center justify-center rounded-full bg-pink-pale">
                  <Icon />
                </div>
                <h3 className="mb-2 text-[15px] font-bold leading-[1.35] text-navy">{step.title}</h3>
                <p className="text-[12.5px] leading-[1.6] text-gray-text">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="absolute right-[-16px] top-1/2 z-[3] hidden -translate-y-1/2 text-[20px] font-bold text-red md:block">
                  →
                </span>
              )}
            </div>
          );
        })}
      </div>

      <CtaBannerFromData className="mt-[60px]" data={data.cta} />
    </section>
  );
}
