import { resolveIcon } from "@/lib/icon-map";
import type { BenefitsSectionData } from "@/types/strapi";

function Eyebrow({ title }: { title: string }) {
  return (
    <div className="mb-[22px] flex items-center gap-3">
      <div className="h-[22px] w-1 rounded-sm bg-red" />
      <h2 className="text-[23px] font-bold text-navy">{title}</h2>
    </div>
  );
}

export default function PortageSalarialAdvantages({ data }: { data: BenefitsSectionData }) {
  const benefits = data.benefits ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-6 py-[46px] sm:px-14">
      <Eyebrow title={data.title} />
      <div className="grid grid-cols-1 gap-x-[30px] gap-y-[26px] sm:grid-cols-3">
        {benefits.map((a) => {
          const Icon = resolveIcon(a.icon);
          return (
            <div key={a.title} className="flex gap-4">
              <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-pink-pale text-red [&_svg]:h-[23px] [&_svg]:w-[23px]">
                <Icon />
              </div>
              <div>
                <h4 className="mb-1 text-[14.5px] font-bold text-navy">{a.title}</h4>
                <p className="text-[12.5px] leading-[1.55] text-gray-text">{a.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
