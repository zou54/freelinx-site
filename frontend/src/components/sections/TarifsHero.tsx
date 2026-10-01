import { ResolvedIcon } from "@/lib/icon-map";
import type { TarifsHeroData } from "@/lib/content/tarifs";

export default function TarifsHero({ data }: { data: TarifsHeroData }) {
  const features = data.features ?? [];
  const [titlePrefix, titleHighlight] =
    data.highlight && data.title.endsWith(data.highlight)
      ? [data.title.slice(0, -data.highlight.length), data.highlight]
      : [data.title, null];

  return (
    <section className="bg-gradient-to-r from-pink-pale-2 via-pink-pale-2/90 to-white pb-[70px] pt-16">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-[60px] px-14 lg:grid-cols-[1.6fr_1fr]">
        <div>
          {data.pill && (
            <div className="mb-3.5 text-[12px] font-extrabold uppercase tracking-[0.6px] text-red">{data.pill}</div>
          )}
          <h1 className="mb-[18px] text-[34px] leading-[1.2] text-navy">
            {titlePrefix}
            {titleHighlight && <span className="text-red">{titleHighlight}</span>}
          </h1>
          <div className="mb-5 h-1 w-12 rounded-sm bg-red" />
          {data.paragraph1 && (
            <p className="mb-2.5 text-[14.5px] leading-[1.75] text-gray-text">{data.paragraph1}</p>
          )}
          {data.paragraph2 && (
            <p className="text-[14.5px] leading-[1.75] text-gray-text">{data.paragraph2}</p>
          )}
        </div>

        <div className="rounded-[18px] bg-white px-[26px] py-6 shadow-[0_26px_54px_-20px_rgba(11,15,43,0.28)]">
          {features.map((f, i) => (
            <div key={f.title} className={`flex items-start gap-3 ${i > 0 ? "mt-[18px]" : ""}`}>
              <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full bg-pink-pale text-red">
                <ResolvedIcon name={f.icon} width={16} height={16} />
              </div>
              <div>
                <h6 className="mb-0.5 text-[12.5px] font-bold leading-[1.3] text-navy">{f.title}</h6>
                <p className="text-[10.5px] leading-[1.4] text-gray-text">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
