import type { WhySectionData } from "@/types/strapi";

export default function WhySection({ data }: { data: WhySectionData }) {
  const features = data.features ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-14 pb-5 pt-[84px]">
      <div className="mx-auto max-w-[700px] text-center">
        <h2 className="mb-[18px] text-[30px] font-bold tracking-[-0.3px] text-navy">{data.title}</h2>
        {data.intro1 && <p className="mb-3 text-[15.5px] leading-[1.75] text-gray-text">{data.intro1}</p>}
        {data.intro2 && <p className="mb-3 text-[15.5px] leading-[1.75] text-gray-text">{data.intro2}</p>}
        {data.intro3 && <p className="mb-3 text-[15.5px] leading-[1.75] text-gray-text">{data.intro3}</p>}
      </div>

      <div className="mx-auto mb-[100px] mt-[52px] grid max-w-[1080px] grid-cols-1 gap-[22px] lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.number}
            className="rounded-[20px] border border-[#F0F0F3] bg-white px-[26px] pb-[26px] pt-[30px] relative overflow-hidden shadow-[0_4px_24px_-12px_rgba(11,15,43,0.08)] after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[42px] after:-translate-x-1/2 after:rounded-t-[3px] after:bg-red"
          >
            <div className="mb-[18px] inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-navy text-[14px] font-bold text-white">
              {f.number}
            </div>
            <h3 className="mb-2.5 text-[17px] font-bold leading-[1.35] text-navy">{f.title}</h3>
            <p className="text-[14px] leading-[1.6] text-gray-text">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
