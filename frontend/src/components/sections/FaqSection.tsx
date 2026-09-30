import SectionHeader from "@/components/ui/SectionHeader";
import CtaBannerFromData from "@/components/ui/CtaBannerFromData";
import { resolveIcon } from "@/lib/icon-map";
import type { FaqSectionData } from "@/types/strapi";

export default function FaqSection({ data }: { data: FaqSectionData }) {
  const faqs = data.faqs ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-14 py-[90px]">
      <SectionHeader pill={data.pill ?? ""} title={data.title} description={data.description} />

      <div className="grid grid-cols-1 gap-x-5 gap-y-[38px] md:grid-cols-3">
        {faqs.map((f) => {
          const Icon = resolveIcon(f.icon);
          return (
            <div
              key={f.question}
              className="rounded-[20px] border border-[#F0F0F3] bg-white p-[26px] shadow-[0_4px_20px_-14px_rgba(11,15,43,0.1)]"
            >
              <div className="mb-3 flex items-start gap-4">
                <div className="flex h-[68px] w-[68px] flex-shrink-0 items-center justify-center rounded-full bg-pink-pale">
                  <Icon width={32} height={32} />
                </div>
                <h4 className="flex-1 text-[15.5px] font-bold leading-[1.35] text-navy">{f.question}</h4>
                <span className="text-[18px] font-bold text-red">›</span>
              </div>
              <p className="text-[13.5px] leading-[1.6] text-gray-text">{f.answer}</p>
            </div>
          );
        })}
      </div>

      {data.seeAllLabel && (
        <div className="mt-[30px] text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#E3E4EA] bg-white px-[22px] py-3 text-[14.5px] font-semibold text-navy transition-all duration-150 hover:-translate-y-px hover:border-red hover:text-red"
          >
            {data.seeAllLabel}
          </a>
        </div>
      )}

      <CtaBannerFromData className="mt-11" data={data.cta} />
    </section>
  );
}
