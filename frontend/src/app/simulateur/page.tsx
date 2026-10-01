import SimulateurApp from "@/components/simulateur/SimulateurApp";
import { DEFAULT_SIMULATEUR_COPY, getSimulateurCopy } from "@/lib/content/simulateur";

export default async function SimulateurPage() {
  const copy = (await getSimulateurCopy()) ?? DEFAULT_SIMULATEUR_COPY;

  return (
    <main>
      <section className="mx-auto max-w-[680px] px-14 pb-10 pt-12 text-center">
        <div className="mb-3.5 text-[12px] font-extrabold uppercase tracking-[0.6px] text-red">{copy.heroPill}</div>
        <h1 className="mb-4 text-[33px] font-bold leading-[1.25] text-navy">{copy.heroTitle}</h1>
        <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-red" />
        <p className="text-[14.5px] leading-[1.75] text-gray-text">{copy.heroDescription}</p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-pink-pale px-[18px] py-2.5 text-[12px] font-bold text-red">
          <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M9 12l2 2 4-4" />
            <circle cx="12" cy="12" r="9" />
          </svg>
          {copy.complianceBadge}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-14 pb-[90px]">
        <SimulateurApp copy={copy} />
      </section>
    </main>
  );
}
