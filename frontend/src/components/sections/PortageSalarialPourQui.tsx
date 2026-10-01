import type { PourQuiData } from "@/lib/content/portage-salarial";

function Eyebrow({ title }: { title: string }) {
  return (
    <div className="mb-[22px] flex items-center gap-3">
      <div className="h-[22px] w-1 rounded-sm bg-red" />
      <h2 className="text-[23px] font-bold text-navy">{title}</h2>
    </div>
  );
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={18} height={18} className="flex-shrink-0 text-red">
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l3 3 5-6" />
  </svg>
);

export default function PortageSalarialPourQui({ data }: { data: PourQuiData }) {
  const profiles = data.profiles ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-6 py-[46px] sm:px-14">
      <Eyebrow title={data.title} />
      <div className="grid grid-cols-1 items-start gap-[50px] lg:grid-cols-2">
        <div>
          {data.paragraph1 && (
            <p className="mb-3.5 text-[14.5px] leading-[1.75] text-gray-text">{data.paragraph1}</p>
          )}
          {data.paragraph2 && <p className="text-[14.5px] leading-[1.75] text-gray-text">{data.paragraph2}</p>}
        </div>
        <div className="grid grid-cols-1 gap-x-7 gap-y-3.5 sm:grid-cols-2">
          {profiles.map((p) => (
            <div key={p.label} className="flex items-center gap-2.5 text-[13.5px] font-medium text-navy">
              <CheckIcon />
              {p.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
