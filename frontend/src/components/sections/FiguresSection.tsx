import SectionHeader from "@/components/ui/SectionHeader";
import CtaBannerFromData from "@/components/ui/CtaBannerFromData";
import { resolveIcon } from "@/lib/icon-map";
import type { FiguresSectionData } from "@/types/strapi";

export default function FiguresSection({ data }: { data: FiguresSectionData }) {
  const figures = data.figures ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-14 py-[90px]">
      <SectionHeader pill={data.pill ?? ""} title={data.title} description={data.description} />

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {figures.map((f) => {
          const Icon = resolveIcon(f.icon);
          return (
            <div
              key={f.caption}
              className="rounded-[20px] border border-[#F0F0F3] bg-white px-[22px] py-[34px] text-center shadow-[0_4px_20px_-14px_rgba(11,15,43,0.1)]"
            >
              <div className="mx-auto mb-[18px] flex h-[92px] w-[92px] items-center justify-center rounded-full bg-pink-pale">
                <Icon />
              </div>
              <div className="mb-1.5 text-[46px] font-extrabold text-navy">{f.value}</div>
              <div className="mb-3.5 text-[11.5px] font-bold tracking-[0.6px] text-red">{f.caption}</div>
              <p className="text-[12.5px] leading-[1.6] text-gray-text">{f.description}</p>
            </div>
          );
        })}
      </div>

      <CtaBannerFromData className="mt-11" data={data.cta} />
    </section>
  );
}
