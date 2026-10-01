import { resolveIcon } from "@/lib/icon-map";
import type { QsnValuesData } from "@/lib/content/qui-sommes-nous";

export default function QuiSommesNousValues({ data }: { data: QsnValuesData }) {
  const values = data.values ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-6 py-[52px] sm:px-14">
      <div className="mb-9 text-center">
        <h2 className="mb-3.5 text-[26px] font-bold text-navy">{data.title}</h2>
        <div className="mx-auto h-[3px] w-11 rounded-full bg-red" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => {
          const Icon = resolveIcon(v.icon);
          return (
            <div
              key={v.title}
              className="flex flex-col rounded-[18px] border border-[#F0DCE2] bg-white px-[22px] py-8 text-center shadow-[0_20px_44px_-32px_rgba(11,15,43,0.18)]"
            >
              <div className="mx-auto mb-[18px] flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full bg-pink-pale">
                <Icon width={30} height={30} />
              </div>
              <h4 className="mb-2 text-[15px] font-extrabold text-navy">{v.title}</h4>
              <p className="mb-4 flex-1 text-[12.5px] leading-[1.6] text-gray-text">{v.description}</p>
              <div className="mx-auto h-[3px] w-[26px] rounded-full bg-red" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
