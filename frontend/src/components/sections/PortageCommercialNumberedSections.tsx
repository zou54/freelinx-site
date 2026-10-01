import type { ReactNode } from "react";
import { resolveIcon, ResolvedIcon } from "@/lib/icon-map";
import { PortageCommercialCheckCircleIcon, PortageCommercialCalloutArrowIcon } from "@/components/icons/portage-commercial";
import type {
  AdvantageGroupData,
  PcNumberedBenefitsData,
  PcNumberedHowData,
  PcNumberedIntroData,
  PcNumberedWhyData,
} from "@/lib/content/portage-commercial";

function NumberedSection({
  icon,
  index,
  title,
  children,
}: {
  icon: ReactNode;
  index: number;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1120px] border-t border-[#F1E3E8] px-6 py-11 sm:px-10">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[280px_1fr]">
        <div className="flex items-start gap-4">
          <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-pink-pale text-red [&_svg]:h-6 [&_svg]:w-6">
            {icon}
          </div>
          <div>
            <div className="text-[32px] font-extrabold leading-none text-red">{index}.</div>
            <div className="mt-2 text-[16.5px] font-bold leading-[1.35] text-navy">{title}</div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function CheckList({ items }: { items: { label: string }[] }) {
  return (
    <div className="mt-2 flex flex-col gap-2.5">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2.5 text-[13.5px] font-semibold text-navy">
          <span className="h-[17px] w-[17px] flex-shrink-0 text-red">
            <PortageCommercialCheckCircleIcon />
          </span>
          {item.label}
        </div>
      ))}
    </div>
  );
}

function Callout({ text, tone = "pink" }: { text: string; tone?: "pink" | "blue" }) {
  return (
    <div
      className={`mt-4 flex items-center gap-3.5 rounded-2xl px-5 py-4 ${
        tone === "blue" ? "bg-[#EEF0FA]" : "bg-pink-pale"
      }`}
    >
      <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full bg-white text-red shadow-[0_4px_10px_-4px_rgba(11,15,43,0.15)]">
        <PortageCommercialCalloutArrowIcon />
      </div>
      <p className="text-[12.5px] font-bold leading-[1.5] text-navy">{text}</p>
    </div>
  );
}

function AdvantageGroupBlock({ group }: { group: AdvantageGroupData }) {
  return (
    <div>
      <span
        className={`mb-4 inline-block rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.4px] text-white ${
          group.pillColor === "navy" ? "bg-navy" : "bg-red"
        }`}
      >
        {group.pillLabel}
      </span>
      <CheckList items={group.items ?? []} />
      {group.calloutText && <Callout text={group.calloutText} tone={group.calloutTone} />}
    </div>
  );
}

export default function PortageCommercialNumberedSections({
  numberedIntro,
  numberedWhy,
  numberedHow,
  numberedBenefits,
}: {
  numberedIntro: PcNumberedIntroData;
  numberedWhy: PcNumberedWhyData;
  numberedHow: PcNumberedHowData;
  numberedBenefits: PcNumberedBenefitsData;
}) {
  const howSteps = numberedHow.steps ?? [];

  return (
    <>
      <NumberedSection
        index={numberedIntro.index}
        title={numberedIntro.title}
        icon={<ResolvedIcon name={numberedIntro.icon} />}
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            {numberedIntro.intro && (
              <p className="mb-3 text-[13.5px] leading-[1.7] text-gray-text">{numberedIntro.intro}</p>
            )}
            <CheckList items={numberedIntro.checklistItems ?? []} />
          </div>
          <div>
            {numberedIntro.paragraph2 && (
              <p className="mb-3 text-[13.5px] leading-[1.7] text-gray-text">{numberedIntro.paragraph2}</p>
            )}
            {numberedIntro.callout && (
              <Callout text={numberedIntro.callout.text} tone={numberedIntro.callout.tone} />
            )}
          </div>
        </div>
      </NumberedSection>

      <NumberedSection
        index={numberedWhy.index ?? 2}
        title={numberedWhy.title}
        icon={<ResolvedIcon name={numberedWhy.icon} />}
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            {numberedWhy.paragraph1 && (
              <p className="mb-3 text-[13.5px] leading-[1.7] text-gray-text">{numberedWhy.paragraph1}</p>
            )}
            {numberedWhy.paragraph2 && (
              <p className="text-[13.5px] leading-[1.7] text-gray-text">{numberedWhy.paragraph2}</p>
            )}
          </div>
          <div>
            {numberedWhy.resultLabel && (
              <div className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.4px] text-red">
                {numberedWhy.resultLabel}
              </div>
            )}
            <CheckList items={numberedWhy.resultItems ?? []} />
          </div>
        </div>
      </NumberedSection>

      <NumberedSection
        index={numberedHow.index ?? 3}
        title={numberedHow.title}
        icon={<ResolvedIcon name={numberedHow.icon} />}
      >
        <div className="rounded-[22px] bg-pink-pale-2 p-6 sm:p-[30px]">
          <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-4 md:gap-0">
            {howSteps.map((step, i) => {
              const StepIcon = resolveIcon(step.icon);
              return (
                <div key={step.title} className="relative px-2 text-center">
                  <div className="relative z-[2] mx-auto mb-3 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-red text-[12px] font-bold text-white shadow-[0_6px_14px_-4px_rgba(232,21,79,0.5)]">
                    {i + 1}
                  </div>
                  <div className="mx-auto mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-red [&_svg]:h-[26px] [&_svg]:w-[26px]">
                    <StepIcon />
                  </div>
                  <h5 className="mb-1.5 text-[13.5px] font-bold leading-[1.3] text-navy">{step.title}</h5>
                  <p className="text-[11.5px] leading-[1.6] text-gray-text">{step.description}</p>
                  {i < howSteps.length - 1 && (
                    <span className="absolute right-[-8px] top-[13px] z-[1] hidden text-red md:block">→</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {numberedHow.calloutText && <Callout text={numberedHow.calloutText} />}
      </NumberedSection>

      <NumberedSection
        index={numberedBenefits.index ?? 4}
        title={numberedBenefits.title}
        icon={<ResolvedIcon name={numberedBenefits.icon} />}
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {numberedBenefits.group1 && <AdvantageGroupBlock group={numberedBenefits.group1} />}
          {numberedBenefits.group2 && <AdvantageGroupBlock group={numberedBenefits.group2} />}
        </div>
      </NumberedSection>
    </>
  );
}
