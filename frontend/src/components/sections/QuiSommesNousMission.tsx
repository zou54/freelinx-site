import { ResolvedIcon } from "@/lib/icon-map";
import type { QsnStatementData } from "@/lib/content/qui-sommes-nous";

export default function QuiSommesNousMission({ data }: { data: QsnStatementData }) {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-[52px] sm:px-14">
      <div className="rounded-[24px] bg-pink-pale-2 p-7 sm:p-11">
        <div className="grid grid-cols-1 items-center gap-8 text-center sm:gap-11 lg:grid-cols-[auto_1fr] lg:text-left">
          <div className="mx-auto flex h-[150px] w-[150px] flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_20px_40px_-20px_rgba(11,15,43,0.18)] lg:mx-0">
            <ResolvedIcon name={data.icon} width={60} height={60} />
          </div>
          <div>
            <h3 className="mb-1.5 text-[22px] font-bold text-navy">{data.title}</h3>
            <div className="mx-auto mb-[18px] h-[3px] w-10 rounded-full bg-red lg:mx-0" />
            {data.highlight && (
              <p className="mb-[18px] text-[16px] font-bold leading-[1.5] text-red">{data.highlight}</p>
            )}
            {data.paragraph1 && <p className="mb-3 text-[13.5px] leading-[1.75] text-gray-text">{data.paragraph1}</p>}
            {data.paragraph2 && <p className="text-[13.5px] leading-[1.75] text-gray-text">{data.paragraph2}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
