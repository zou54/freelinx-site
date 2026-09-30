import { ExpertiseIcon, NoFeesIcon, SecurePaymentIcon, SupportIcon } from "@/components/icons";

const STATS = [
  { Icon: ExpertiseIcon, label: "Plus de 10 ans", sublabel: "d'expertise" },
  { Icon: NoFeesIcon, label: "0€ de frais", sublabel: "cachés" },
  { Icon: SupportIcon, label: "Accompagnement", sublabel: "personnalisé" },
  { Icon: SecurePaymentIcon, label: "Paiement", sublabel: "sécurisé" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-pale-2 to-white to-78% pt-[72px] pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[120px] -right-[160px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(232,21,79,0.10)_0%,rgba(232,21,79,0)_70%)]"
      />

      <div className="relative mx-auto flex max-w-[760px] flex-col items-center px-14 text-center">
        <span className="mb-[22px] inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-red bg-white px-[18px] py-[7px] text-[12.5px] font-bold tracking-[0.6px] text-red">
          PORTAGE SALARIAL
        </span>

        <h1 className="mb-[18px] text-[32px] leading-[1.15] font-bold tracking-[-0.5px] text-navy lg:text-[44px]">
          Le portage salarial qui vous permet d&apos;entreprendre en toute liberté.
        </h1>

        <p className="mb-3 text-[17px] font-semibold text-red">
          Développez votre activité en toute autonomie, sans renoncer à la sécurité du statut salarié.
        </p>

        <p className="mx-auto mb-3.5 max-w-[560px] text-[16px] leading-[1.65] text-gray-text">
          Chez <strong className="font-semibold text-navy">Freelinx</strong>, vous restez concentré sur
          votre métier pendant que nous prenons en charge l&apos;ensemble de la gestion administrative,
          juridique, sociale et financière de votre activité.
        </p>

        <div className="my-2.5 mb-[30px] inline-flex items-center gap-2.5 rounded-full bg-pink-pale px-[22px] py-2.5 text-[15px] font-bold text-navy">
          Vous trouvez vos missions <span className="font-extrabold text-red">→</span> Nous nous occupons
          du reste.
        </div>

        <div className="mb-11 flex w-full flex-col gap-3.5 lg:w-auto lg:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-transparent bg-red px-[22px] py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.55)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark"
          >
            Prendre rendez-vous
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#E3E4EA] bg-white px-[22px] py-3 text-[14.5px] font-semibold text-navy transition-all duration-150 hover:-translate-y-px hover:border-red hover:text-red"
          >
            Demander une simulation gratuite →
          </a>
        </div>

        <div className="mb-14 -mt-1 flex gap-2">
          <span className="h-2 w-[22px] rounded-full bg-red" />
          <span className="h-2 w-2 rounded-full bg-[#E7DCE0]" />
          <span className="h-2 w-2 rounded-full bg-[#E7DCE0]" />
        </div>

        <div className="mx-auto grid max-w-[980px] grid-cols-2 gap-5 lg:grid-cols-4">
          {STATS.map(({ Icon, label, sublabel }) => (
            <div key={label} className="flex flex-col items-center gap-3.5 px-2.5 py-1.5 text-center">
              <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-pink-pale">
                <Icon />
              </div>
              <p className="text-[14px] font-semibold leading-[1.4] text-navy">
                {label}
                <br />
                {sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
