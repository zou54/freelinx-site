import { resolveIcon } from "@/lib/icon-map";
import type { StepsSectionData } from "@/types/strapi";

function Eyebrow({ title }: { title: string }) {
  return (
    <div className="mb-[22px] flex items-center gap-3">
      <div className="h-[22px] w-1 rounded-sm bg-red" />
      <h2 className="text-[23px] font-bold text-navy">{title}</h2>
    </div>
  );
}

export default function PortageSalarialSteps({ data }: { data: StepsSectionData }) {
  const steps = data.steps ?? [];

  return (
    <section className="mx-auto max-w-[1120px] rounded-[28px] bg-pink-pale-2 px-6 py-[46px] sm:px-14">
      <Eyebrow title={data.title} />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-5">
        {steps.map((step, i) => {
          const Icon = resolveIcon(step.icon);
          return (
            <div key={step.title} className="relative px-2 text-center">
              {i < steps.length - 1 && (
                <span className="absolute left-[calc(50%+46px)] right-[calc(-50%+46px)] top-[14px] hidden h-px bg-[linear-gradient(to_right,var(--color-red)_50%,transparent_0%)] bg-[length:6px_1px] bg-repeat-x sm:block" />
              )}
              <div className="relative z-[2] mx-auto mb-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-red text-[12.5px] font-bold text-white shadow-[0_6px_14px_-4px_rgba(232,21,79,0.5)]">
                {i + 1}
              </div>
              <div className="mx-auto mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white text-red [&_svg]:h-7 [&_svg]:w-7">
                <Icon />
              </div>
              <h5 className="mb-2 text-[14px] font-bold leading-[1.3] text-navy">{step.title}</h5>
              <p className="text-[11.5px] leading-[1.6] text-gray-text">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
