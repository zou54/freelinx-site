import SectionHeader from "@/components/ui/SectionHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import {
  ConsultantsITIcon,
  ToolboxIcon,
  StrokeBadgeIcon,
  CompassIcon,
  ExpertiseIcon,
  GearBadgeIcon,
  SupportIcon,
  CoinIcon,
  CartIcon,
  BarsIcon,
  SupportIcon as ShieldGroupIcon,
} from "@/components/icons";

const SECTORS = [
  { Icon: ConsultantsITIcon, title: "Consultants IT", description: "Développeurs, architectes, consultants techniques, experts en systèmes d'information." },
  { Icon: ToolboxIcon, title: "Chefs de projet", description: "PMP, Scrum Master, chefs de projet MOE, AMOA, digital et transformation." },
  { Icon: StrokeBadgeIcon, title: "Managers de transition", description: "Direction générale, financière, opérationnelle, RH, commerciale et marketing." },
  { Icon: CompassIcon, title: "Business Developers", description: "Experts en développement commercial, grands comptes et stratégie de croissance." },
  { Icon: ExpertiseIcon, title: "Experts métiers", description: "Spécialistes dans leur domaine : finance, qualité, achats, supply chain, conformité…" },
  { Icon: GearBadgeIcon, title: "Ingénieurs", description: "Ingénieurs d'études, R&D, industrialisation, méthodes et amélioration continue." },
  { Icon: ShieldGroupIcon, title: "Consultants RH", description: "Recrutement, gestion des talents, transformation RH, SIRH, relations sociales." },
  { Icon: CoinIcon, title: "Consultants Finance", description: "Contrôle de gestion, audit, consolidation, trésorerie, CFO externalisé." },
  { Icon: CartIcon, title: "Acheteurs", description: "Achats directs, indirects, stratégie d'achats, négociation et optimisation." },
  { Icon: ToolboxIcon, title: "Directeurs de programme", description: "Pilotage de programmes complexes et gestion de portefeuilles projets." },
  { Icon: BarsIcon, title: "PMO", description: "Support à la gouvernance de projets, reporting, méthodes et outils." },
  { Icon: SupportIcon, title: "Indépendants qualifiés", description: "Tous profils d'experts souhaitant conjuguer autonomie et sécurité du salariat." },
];

export default function SectorsSection() {
  return (
    <section className="mx-auto max-w-[1120px] rounded-[32px] bg-pink-pale-2 px-6 py-[90px] sm:px-14">
      <SectionHeader
        pill="ILS NOUS FONT CONFIANCE"
        title="Des experts de tous secteurs nous font confiance"
        description={
          <>
            Chez <strong className="font-bold text-red">Freelinx</strong>, nous accompagnons des
            professionnels indépendants issus de nombreux domaines d&apos;expertise.
          </>
        }
      />

      <div className="grid grid-cols-2 gap-x-[18px] gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
        {SECTORS.map((s) => (
          <div key={s.title} className="rounded-[20px] border border-[#F0F0F3] bg-white px-[18px] pb-6 pt-7 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-pale">
              <s.Icon width={30} height={30} />
            </div>
            <h3 className="mb-2 text-[14.5px] font-bold text-navy">{s.title}</h3>
            <p className="text-[12.5px] leading-[1.5] text-gray-text">{s.description}</p>
          </div>
        ))}
      </div>

      <CtaBanner
        className="mt-11"
        icon={<SupportIcon />}
        title="Rejoignez les centaines d'experts qui nous font déjà confiance"
        description="Développez votre activité en toute sérénité avec un partenaire fiable et engagé à vos côtés."
        primaryLabel="Je demande une simulation →"
        secondaryLabel="Être rappelé par un expert"
      />
    </section>
  );
}
