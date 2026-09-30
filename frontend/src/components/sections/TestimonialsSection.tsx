import SectionHeader from "@/components/ui/SectionHeader";
import { QuoteIcon } from "@/components/icons";
import type { TestimonialsSectionData } from "@/types/strapi";

export default function TestimonialsSection({ data }: { data: TestimonialsSectionData }) {
  const testimonials = data.testimonials ?? [];

  return (
    <section className="mx-auto max-w-[1120px] px-14 py-[90px]">
      <SectionHeader pill={data.pill ?? ""} title={data.title} description={data.description} />

      <div className="grid grid-cols-1 gap-9 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col items-center rounded-[20px] border border-[#F0F0F3] bg-white px-[26px] pb-[26px] pt-[30px] text-center"
          >
            <div className="mb-[18px] flex h-[92px] w-[92px] items-center justify-center rounded-full bg-pink-pale">
              <QuoteIcon />
            </div>
            <p className="mb-[18px] text-[14px] leading-[1.7] text-gray-text">{t.quote}</p>
            <h3 className="mb-0.5 text-[15px] font-bold text-navy">{t.name}</h3>
            <p className="mb-2.5 text-[12.5px] font-semibold text-red">{t.role}</p>
            <div className="tracking-[2px] text-[13px] text-red">{"★".repeat(t.rating ?? 5)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
