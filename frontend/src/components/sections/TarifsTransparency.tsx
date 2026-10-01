import { ResolvedIcon } from "@/lib/icon-map";
import type { TransparencySectionData } from "@/lib/content/tarifs";

export default function TarifsTransparency({ data }: { data: TransparencySectionData }) {
  const checklistItems = data.checklistItems ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-14 py-[52px]">
      <div className="grid grid-cols-1 items-stretch gap-9 lg:grid-cols-2">
        <div>
          <h3 className="mb-2.5 text-[19px] font-bold text-navy">{data.title}</h3>
          <div className="mb-4 h-[3px] w-9 rounded-sm bg-red" />
          {data.description && (
            <p className="mb-[18px] text-[13.5px] leading-[1.7] text-gray-text">{data.description}</p>
          )}
          <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {checklistItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-[13px] font-medium text-navy">
                <ResolvedIcon name="TarifsCheckCircleIcon" width={16} height={16} className="flex-shrink-0 text-red" />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {data.quote && (
          <div className="relative flex flex-col justify-center overflow-hidden rounded-[20px] bg-pink-pale px-[34px] py-9">
            <div className="mb-3 text-[50px] font-extrabold leading-none text-red">&ldquo;</div>
            <p className="relative z-[1] mb-3.5 text-[15px] leading-[1.6] text-navy">{data.quote.line1}</p>
            <p className="relative z-[1] text-[15px] font-bold leading-[1.6] text-navy">{data.quote.line2}</p>
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-8 -right-1.5 select-none text-[150px] font-extrabold leading-none text-red/[0.08]"
            >
              €
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
