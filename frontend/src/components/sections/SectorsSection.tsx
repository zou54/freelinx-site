import SectionHeader from "@/components/ui/SectionHeader";
import CtaBannerFromData from "@/components/ui/CtaBannerFromData";
import { resolveIcon } from "@/lib/icon-map";
import type { SectorsSectionData } from "@/types/strapi";

export default function SectorsSection({ data }: { data: SectorsSectionData }) {
  const sectors = data.sectors ?? [];

  return (
    <section className="mx-auto max-w-[1120px] rounded-[32px] bg-pink-pale-2 px-6 py-[90px] sm:px-14">
      <SectionHeader pill={data.pill ?? ""} title={data.title} description={data.description} />

      <div className="grid grid-cols-2 gap-x-[18px] gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
        {sectors.map((s) => {
          const Icon = resolveIcon(s.icon);
          return (
            <div key={s.title} className="rounded-[20px] border border-[#F0F0F3] bg-white px-[18px] pb-6 pt-7 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-pale">
                <Icon width={30} height={30} />
              </div>
              <h3 className="mb-2 text-[14.5px] font-bold text-navy">{s.title}</h3>
              <p className="text-[12.5px] leading-[1.5] text-gray-text">{s.description}</p>
            </div>
          );
        })}
      </div>

      <CtaBannerFromData className="mt-11" data={data.cta} />
    </section>
  );
}
