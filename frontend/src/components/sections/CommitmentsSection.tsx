import SectionHeader from "@/components/ui/SectionHeader";
import CtaBannerFromData from "@/components/ui/CtaBannerFromData";
import { resolveIcon } from "@/lib/icon-map";
import type { CommitmentsSectionData } from "@/types/strapi";

export default function CommitmentsSection({ data }: { data: CommitmentsSectionData }) {
  const commitments = data.commitments ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-14 py-[90px]">
      <SectionHeader pill={data.pill ?? ""} title={data.title} description={data.description} />

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {commitments.map((c) => {
          const Icon = resolveIcon(c.icon);
          return (
            <div key={c.title} className="rounded-[20px] border border-[#F0F0F3] bg-white px-[26px] pb-[26px] pt-[30px] text-center">
              <div className="mx-auto mb-4 flex h-[92px] w-[92px] items-center justify-center rounded-full bg-pink-pale">
                <Icon />
              </div>
              <h3 className="mb-2 text-[15px] font-bold text-navy">{c.title}</h3>
              <p className="text-[12.5px] leading-[1.6] text-gray-text">{c.description}</p>
            </div>
          );
        })}
      </div>

      <CtaBannerFromData className="mt-11" data={data.cta} />
    </section>
  );
}
