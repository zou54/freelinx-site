import SectionHeader from "@/components/ui/SectionHeader";
import { QuoteIcon } from "@/components/icons";

const TESTIMONIALS = [
  {
    quote:
      "Freelinx m'a permis de structurer mon activité et de gagner en crédibilité auprès de mes clients. Je bénéficie d'un accompagnement personnalisé et d'une gestion simplifiée.",
    name: "Sophie",
    role: "Chef de Projets",
  },
  {
    quote:
      "Grâce à Freelinx, j'ai pu lancer mon activité en toute sérénité, sans me soucier de la partie administrative. Tout est clair, structuré et transparent.",
    name: "Marie",
    role: "Manager de Gestion",
  },
  {
    quote:
      "Ce que j'apprécie chez Freelinx, c'est la transparence et la réactivité. Les équipes sont disponibles et les paiements sont toujours réguliers.",
    name: "Karim",
    role: "Consultant IT",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-[1120px] px-14 py-[90px]">
      <SectionHeader
        pill="TÉMOIGNAGES CLIENTS"
        title="Des consultants exigeants, des retours concrets"
        description={
          <>
            Ce que nos consultants disent de leur expérience avec{" "}
            <strong className="font-bold text-red">Freelinx</strong>.
          </>
        }
      />

      <div className="grid grid-cols-1 gap-9 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
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
            <div className="tracking-[2px] text-[13px] text-red">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
}
