import { QuiSommesNousQuoteMarkIcon, QuiSommesNousAchievementIcon } from "@/components/icons/qui-sommes-nous";
import type { StatementQuoteData } from "@/lib/content/qui-sommes-nous";

export default function QuiSommesNousQuote({ data }: { data: StatementQuoteData }) {
  return (
    <section className="mx-auto max-w-[1120px] px-6 pb-[52px] sm:px-14">
      <div className="rounded-[24px] bg-pink-pale p-7 sm:p-11">
        <div className="grid grid-cols-1 items-center gap-8 text-center lg:grid-cols-[auto_1fr_auto_auto] lg:text-left">
          <QuiSommesNousQuoteMarkIcon className="mx-auto h-[34px] w-[46px] flex-shrink-0 text-red lg:mx-0" />

          <div>
            <p className="mb-2.5 text-[16px] leading-[1.6] text-navy">{data.line1}</p>
            <p className="text-[16px] font-bold leading-[1.6] text-red">{data.line2}</p>
          </div>

          <div className="mx-auto h-px w-[60px] bg-red/25 lg:mx-0 lg:h-auto lg:w-px lg:self-stretch" />

          <QuiSommesNousAchievementIcon className="mx-auto h-[90px] w-[90px] flex-shrink-0 lg:mx-0" />
        </div>
      </div>
    </section>
  );
}
