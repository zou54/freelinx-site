import { ResolvedIcon } from "@/lib/icon-map";
import type { CtaBannerData } from "@/types/strapi";

export default function TarifsSimulateBar({ data }: { data: CtaBannerData }) {
  return (
    <section className="mx-auto max-w-[1120px] px-14 pb-[52px]">
      <div className="grid grid-cols-1 items-center gap-[22px] rounded-[18px] bg-[#F4F5FA] px-6 py-[26px] text-center sm:grid-cols-[auto_1fr_auto] sm:px-8 sm:text-left">
        <div className="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-[#3B5BDB] shadow-[0_8px_18px_-10px_rgba(11,15,43,0.18)] sm:mx-0">
          <ResolvedIcon name={data.icon} width={32} height={32} />
        </div>
        <div>
          <h4 className="mb-1 text-[16px] font-bold text-navy">{data.title}</h4>
          <p className="text-[12.5px] leading-[1.5] text-gray-text">{data.description}</p>
        </div>
        {data.primaryLabel && (
          <a
            href={data.primaryHref ?? "#"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red px-[22px] py-3 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.5)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark sm:w-auto"
          >
            {data.primaryLabel}
          </a>
        )}
      </div>
    </section>
  );
}
