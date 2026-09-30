import type { ReactNode } from "react";

function NumberedSection({
  icon,
  index,
  title,
  children,
}: {
  icon: ReactNode;
  index: number;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1120px] border-t border-[#F1E3E8] px-6 py-11 sm:px-10">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[280px_1fr]">
        <div className="flex items-start gap-4">
          <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-pink-pale text-red [&_svg]:h-6 [&_svg]:w-6">
            {icon}
          </div>
          <div>
            <div className="text-[32px] font-extrabold leading-none text-red">{index}.</div>
            <div className="mt-2 text-[16.5px] font-bold leading-[1.35] text-navy">{title}</div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <div className="mt-2 flex flex-col gap-2.5">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2.5 text-[13.5px] font-semibold text-navy">
          <span className="h-[17px] w-[17px] flex-shrink-0 text-red">
            <CheckIcon />
          </span>
          {item}
        </div>
      ))}
    </div>
  );
}

function Callout({ children, tone = "pink" }: { children: ReactNode; tone?: "pink" | "blue" }) {
  return (
    <div
      className={`mt-4 flex items-center gap-3.5 rounded-2xl px-5 py-4 ${
        tone === "blue" ? "bg-[#EEF0FA]" : "bg-pink-pale"
      }`}
    >
      <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full bg-white text-red shadow-[0_4px_10px_-4px_rgba(11,15,43,0.15)]">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>
      <p className="text-[12.5px] font-bold leading-[1.5] text-navy">{children}</p>
    </div>
  );
}

const STEPS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M20 20l-4.8-4.8" />
      </svg>
    ),
    title: "Vous identifiez une opportunité",
    description: "Vous prospectez, développez votre réseau et négociez vos missions.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "FREELINX sécurise la relation",
    description:
      "Nous établissons le contrat avec l'entreprise cliente, assurons la conformité juridique et prenons en charge la facturation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1" />
      </svg>
    ),
    title: "Vous réalisez la mission",
    description: "Vous travaillez directement avec votre client, en toute autonomie.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M17 7.5a5 5 0 100 9" />
        <path d="M4 9.5h9M4 13.5h7" />
      </svg>
    ),
    title: "Nous gérons le paiement",
    description: "Nous encaissons les règlements et vous reversons vos honoraires selon les modalités définies.",
  },
];

export default function PortageCommercialNumberedSections() {
  return (
    <>
      <NumberedSection
        index={1}
        title={
          <>
            Qu&apos;est-ce que
            <br />
            le portage commercial&nbsp;?
          </>
        }
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9.5 9a2.5 2.5 0 015 .5c0 1.5-2.5 2-2.5 3.5" />
            <path d="M12 17h.01" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        }
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[13.5px] leading-[1.7] text-gray-text">
              Le portage commercial est un dispositif basé sur une relation tripartite entre&nbsp;:
            </p>
            <CheckList items={["un professionnel indépendant", "une entreprise cliente", "une société de portage"]} />
          </div>
          <div>
            <p className="mb-3 text-[13.5px] leading-[1.7] text-gray-text">
              La société de portage agit comme un intermédiaire contractuel&nbsp;: elle établit les contrats, gère
              la facturation et sécurise la relation entre les parties.
            </p>
            <Callout>Vous restez totalement indépendant, sans contrat de travail, contrairement au portage salarial.</Callout>
          </div>
        </div>
      </NumberedSection>

      <NumberedSection
        index={2}
        title={
          <>
            Pourquoi utiliser
            <br />
            le portage commercial&nbsp;?
          </>
        }
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
          </svg>
        }
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[13.5px] leading-[1.7] text-gray-text">
              Dans de nombreuses entreprises, notamment les grands groupes, travailler avec un prestataire
              nécessite d&apos;être référencé comme fournisseur.
            </p>
            <p className="text-[13.5px] leading-[1.7] text-gray-text">
              Le portage commercial permet de contourner cette contrainte en facilitant la contractualisation via
              une structure déjà référencée.
            </p>
          </div>
          <div>
            <div className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.4px] text-red">Résultat&nbsp;:</div>
            <CheckList
              items={["accès facilité aux grands comptes", "démarrage rapide des missions", "simplification des démarches"]}
            />
          </div>
        </div>
      </NumberedSection>

      <NumberedSection
        index={3}
        title={
          <>
            Comment fonctionne
            <br />
            le portage commercial&nbsp;?
          </>
        }
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        }
      >
        <div className="rounded-[22px] bg-pink-pale-2 p-6 sm:p-[30px]">
          <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-4 md:gap-0">
            {STEPS.map((step, i) => (
              <div key={step.title} className="relative px-2 text-center">
                <div className="relative z-[2] mx-auto mb-3 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-red text-[12px] font-bold text-white shadow-[0_6px_14px_-4px_rgba(232,21,79,0.5)]">
                  {i + 1}
                </div>
                <div className="mx-auto mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-red [&_svg]:h-[26px] [&_svg]:w-[26px]">
                  {step.icon}
                </div>
                <h5 className="mb-1.5 text-[13.5px] font-bold leading-[1.3] text-navy">{step.title}</h5>
                <p className="text-[11.5px] leading-[1.6] text-gray-text">{step.description}</p>
                {i < STEPS.length - 1 && (
                  <span className="absolute right-[-8px] top-[13px] z-[1] hidden text-red md:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <Callout>Vous vous concentrez sur votre performance commerciale, nous sécurisons le cadre.</Callout>
      </NumberedSection>

      <NumberedSection
        index={4}
        title={
          <>
            Les avantages
            <br />
            du portage commercial
          </>
        }
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M7 11v9M7 11a3 3 0 013-3h6.5a1.5 1.5 0 010 3H12M7 11H4a1 1 0 00-1 1v6a1 1 0 001 1h3" />
          </svg>
        }
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-red px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.4px] text-white">
              Pour les indépendants
            </span>
            <CheckList
              items={[
                "Accès à des missions grands comptes",
                "Gain de temps sur l'administratif",
                "Liberté totale dans la gestion de votre activité",
                "Sécurisation des paiements",
                "Possibilité de développer rapidement votre activité",
              ]}
            />
            <Callout>Le portage commercial permet de se concentrer uniquement sur la création de valeur.</Callout>
          </div>
          <div>
            <span className="mb-4 inline-block rounded-full bg-navy px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.4px] text-white">
              Pour les entreprises
            </span>
            <CheckList
              items={[
                "Simplification des processus d'achat",
                "Réduction des contraintes administratives",
                "Sécurisation juridique des prestations",
                "Accès à des experts qualifiés rapidement",
              ]}
            />
            <Callout tone="blue">Une solution flexible et efficace pour collaborer avec des prestataires externes.</Callout>
          </div>
        </div>
      </NumberedSection>
    </>
  );
}
