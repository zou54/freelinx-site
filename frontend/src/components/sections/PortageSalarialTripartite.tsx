import { ResolvedIcon } from "@/lib/icon-map";
import type { TripartiteData } from "@/lib/content/portage-salarial";

function Eyebrow({ title }: { title: string }) {
  return (
    <div className="mb-[22px] flex items-center gap-3">
      <div className="h-[22px] w-1 rounded-sm bg-red" />
      <h2 className="text-[23px] font-bold text-navy">{title}</h2>
    </div>
  );
}

function TriLink({ from, to }: { from?: string; to?: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <span className="whitespace-nowrap text-[11px] font-bold text-red">{from}</span>
      <div className="flex w-full items-center gap-1">
        <span className="h-0 w-0 flex-shrink-0 border-y-[4px] border-r-[6px] border-y-transparent border-r-red" />
        <div className="h-px flex-1 bg-[linear-gradient(to_right,var(--color-red)_45%,transparent_0%)] bg-[length:6px_1px] bg-repeat-x" />
        <span className="h-0 w-0 flex-shrink-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-red" />
      </div>
      <span className="whitespace-nowrap text-[11px] font-bold text-red">{to}</span>
    </div>
  );
}

export default function PortageSalarialTripartite({ data }: { data: TripartiteData }) {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-[46px] sm:px-14">
      <Eyebrow title={data.title} />
      <div className="grid grid-cols-1 items-center gap-11 lg:grid-cols-[1fr_1.25fr]">
        <div>
          {data.paragraph1 && (
            <p className="mb-3.5 text-[14.5px] leading-[1.75] text-gray-text">{data.paragraph1}</p>
          )}
          {data.paragraph2 && (
            <p className="text-[14.5px] leading-[1.75] text-gray-text">{data.paragraph2}</p>
          )}
        </div>

        <div className="rounded-[22px] bg-pink-pale-2 px-6 py-[30px] sm:px-7">
          <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[auto_1fr_auto_1fr_auto]">
            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_-10px_rgba(11,15,43,0.15)]">
                <ResolvedIcon name={data.vousIcon} width={26} height={26} stroke="#E8154F" />
              </div>
              <h5 className="mt-1 text-[13.5px] font-bold tracking-[0.3px] text-navy">{data.vousLabel}</h5>
              <p className="text-[11.5px] leading-[1.4] text-gray-text">{data.vousSublabel}</p>
            </div>

            <TriLink from={data.link1From} to={data.link1To} />

            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-red text-white shadow-[0_12px_28px_-8px_rgba(232,21,79,0.5)]">
                <span className="text-[20px] font-extrabold">F</span>
              </div>
              <h5 className="mt-1 text-[13.5px] font-bold tracking-[0.3px] text-navy">{data.freelinxLabel}</h5>
              <p className="text-[11.5px] leading-[1.4] text-gray-text">Société de portage salarial</p>
            </div>

            <TriLink from={data.link2From} to={data.link2To} />

            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_-10px_rgba(11,15,43,0.15)]">
                <ResolvedIcon name={data.clientsIcon} width={26} height={26} stroke="#E8154F" />
              </div>
              <h5 className="mt-1 text-[13.5px] font-bold tracking-[0.3px] text-navy">{data.clientsLabel}</h5>
              <p className="text-[11.5px] leading-[1.4] text-gray-text">{data.clientsSublabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
