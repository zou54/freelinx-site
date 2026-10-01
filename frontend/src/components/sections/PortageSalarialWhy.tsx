import { resolveIcon } from "@/lib/icon-map";
import type { WhyChooseData } from "@/lib/content/portage-salarial";

function Eyebrow({ title }: { title: string }) {
  return (
    <div className="mb-[22px] flex items-center gap-3">
      <div className="h-[22px] w-1 rounded-sm bg-red" />
      <h2 className="text-[23px] font-bold text-navy">{title}</h2>
    </div>
  );
}

export default function PortageSalarialWhy({ data }: { data: WhyChooseData }) {
  const reasons = data.reasons ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-6 py-[46px] sm:px-14">
      <Eyebrow title={data.title} />
      <div className="grid grid-cols-2 gap-x-4 gap-y-[30px] sm:grid-cols-3 lg:grid-cols-6">
        {reasons.map((r) => {
          const Icon = resolveIcon(r.icon);
          return (
            <div key={r.title} className="text-center">
              <div className="mx-auto mb-3.5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-pink-pale text-red [&_svg]:h-[23px] [&_svg]:w-[23px]">
                <Icon />
              </div>
              <h5 className="mb-1.5 text-[13px] font-bold leading-[1.3] text-navy">{r.title}</h5>
              <p className="text-[11px] leading-[1.55] text-gray-text">{r.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
