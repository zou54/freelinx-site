import type { FaqHeroData } from "@/lib/content/faq";

export default function FaqHero({ data }: { data: FaqHeroData }) {
  return (
    <section className="bg-gradient-to-r from-pink-pale-2 via-pink-pale-2/90 to-white pb-[70px] pt-16">
      <div className="mx-auto max-w-[760px] px-14 text-center">
        {data.pill && (
          <div className="mb-3.5 text-[12px] font-extrabold uppercase tracking-[0.6px] text-red">{data.pill}</div>
        )}
        <h1 className="mb-[18px] text-[34px] leading-[1.2] text-navy">{data.title}</h1>
        <div className="mx-auto mb-5 h-1 w-12 rounded-sm bg-red" />
        {data.subtitle && (
          <p className="text-[14.5px] leading-[1.75] text-gray-text">{data.subtitle}</p>
        )}
      </div>
    </section>
  );
}
