import { ResolvedIcon } from "@/lib/icon-map";
import type { PricingSectionData } from "@/lib/content/tarifs";

type Variant = "red" | "blue" | "green";

const VARIANT_STYLES: Record<Variant, { card: string; title: string; amount: string; list: string; btn: string }> = {
  red: {
    card: "bg-pink-pale-2 border-border",
    title: "text-navy",
    amount: "text-red",
    list: "text-red",
    btn: "border-[1.5px] border-red text-red hover:bg-red hover:text-white",
  },
  blue: {
    card: "bg-white border-transparent shadow-[0_28px_56px_-24px_rgba(11,15,43,0.28)]",
    title: "text-[#2C46B5]",
    amount: "text-[#2C46B5]",
    list: "text-[#3B5BDB]",
    btn: "bg-navy text-white hover:bg-[#161B3D]",
  },
  green: {
    card: "bg-[#EAFAF2] border-[#D3EEDF]",
    title: "text-[#0F7A4E]",
    amount: "text-[#0F7A4E]",
    list: "text-[#189A63]",
    btn: "border-[1.5px] border-[#189A63] text-[#0F7A4E] hover:bg-[#189A63] hover:text-white",
  },
};

export default function TarifsPricingGrid({ data }: { data: PricingSectionData }) {
  const plans = data.plans ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-14 py-[52px]">
      <div className="mx-auto mb-10 max-w-[700px] text-center">
        <h2 className="mb-2.5 text-[26px] font-bold text-navy">{data.title}</h2>
        <div className="mx-auto mb-[18px] h-[3px] w-11 rounded-sm bg-red" />
        {data.description && (
          <p className="text-[14px] leading-[1.7] text-gray-text">{data.description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 min-[620px]:grid-cols-2 min-[980px]:grid-cols-4">
        {plans.map((plan) => {
          const styles = VARIANT_STYLES[plan.variant];
          const featureItems = plan.featureItems ?? [];
          return (
            <div
              key={plan.title}
              className={`relative flex h-full flex-col rounded-[20px] border px-[22px] pb-[26px] pt-[30px] ${styles.card}`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy px-[18px] py-[7px] text-[10px] font-extrabold uppercase tracking-[0.5px] text-white">
                  {plan.badge}
                </span>
              )}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-red shadow-[0_10px_22px_-12px_rgba(11,15,43,0.2)]">
                <ResolvedIcon name={plan.icon} width={24} height={24} />
              </div>
              <div className={`mb-1.5 text-center text-[14.5px] font-extrabold uppercase tracking-[0.3px] ${styles.title}`}>
                {plan.title}
              </div>
              <div className="mb-[18px] min-h-[30px] text-center text-[11.5px] leading-[1.4] text-gray-text">
                {plan.subtitle}
              </div>
              <div className="mx-auto mb-[18px] h-0.5 w-[30px] bg-[#E3CBD3]" />
              <div className={`mb-1 text-center text-[32px] font-extrabold leading-none ${styles.amount}`}>{plan.rate}</div>
              {data.rateCaption && (
                <div className="mb-[22px] text-center text-[11px] leading-[1.5] text-gray-text">
                  {data.rateCaption}
                </div>
              )}
              <div className="mb-6 flex flex-1 flex-col gap-[11px]">
                {featureItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-2 text-[12px] font-medium leading-[1.4] text-navy">
                    <span className={`mt-0.5 flex-shrink-0 ${styles.list}`}>
                      <ResolvedIcon name="TarifsCheckCircleIcon" width={16} height={16} />
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
              <a
                href={plan.ctaHref ?? "#"}
                className={`mt-auto inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-3 text-[13.5px] font-semibold transition-all duration-150 ${styles.btn}`}
              >
                {plan.ctaLabel}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
