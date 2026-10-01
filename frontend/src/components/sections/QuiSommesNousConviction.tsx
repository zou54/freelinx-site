import { ResolvedIcon } from "@/lib/icon-map";
import type { QsnStatementData } from "@/lib/content/qui-sommes-nous";

export default function QuiSommesNousConviction({ data }: { data: QsnStatementData }) {
  return (
    <section className="mx-auto max-w-[1120px] px-6 pb-[52px] sm:px-14">
      <div className="rounded-[24px] border border-[#F0DCE2] bg-white p-7 shadow-[0_20px_48px_-32px_rgba(11,15,43,0.18)] sm:p-11">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-start gap-6 text-center lg:pr-9 lg:text-left">
            <div className="hidden h-[76px] w-[76px] flex-shrink-0 items-center justify-center rounded-full bg-pink-pale-2 lg:flex">
              <ResolvedIcon name={data.icon} width={32} height={32} />
            </div>
            <div className="mx-auto lg:mx-0">
              <div className="mx-auto mb-4 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-pink-pale-2 lg:hidden">
                <ResolvedIcon name={data.icon} width={32} height={32} />
              </div>
              <h3 className="mb-2.5 text-[20px] font-bold leading-[1.3] text-navy">{data.title}</h3>
              {data.highlight && <p className="text-[14px] font-bold leading-[1.6] text-red">{data.highlight}</p>}
            </div>
          </div>

          <div className="mx-auto flex h-[38px] w-[38px] flex-shrink-0 rotate-90 items-center justify-center rounded-full bg-red shadow-[0_10px_22px_-8px_rgba(232,21,79,0.5)] lg:rotate-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </div>

          <div className="text-center lg:pl-9 lg:text-left">
            {data.paragraph1 && <p className="mb-3.5 text-[13.5px] leading-[1.75] text-gray-text">{data.paragraph1}</p>}
            {data.paragraph2 && <p className="text-[13.5px] leading-[1.75] text-gray-text">{data.paragraph2}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
