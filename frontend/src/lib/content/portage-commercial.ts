import { fetchStrapi } from "@/lib/strapi";

export interface IconStatTextData {
  icon: string;
  text: string;
}

export interface ChecklistItemData {
  label: string;
}

export interface IconTextItemData {
  icon: string;
  title: string;
  description: string;
}

export interface CalloutTextData {
  icon?: string;
  text: string;
  tone?: "pink" | "blue";
}

export interface AdvantageGroupData {
  pillLabel: string;
  pillColor?: "red" | "navy";
  items?: ChecklistItemData[];
  calloutText?: string;
  calloutTone?: "pink" | "blue";
}

export interface PcHeroData {
  title: string;
  highlightLine?: string;
  paragraph1?: string;
  paragraph2?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  checklist?: IconStatTextData[];
}

export interface PcNumberedIntroData {
  index: number;
  icon: string;
  title: string;
  intro?: string;
  checklistItems?: ChecklistItemData[];
  paragraph2?: string;
  callout?: CalloutTextData;
}

export interface PcNumberedWhyData {
  index?: number;
  icon?: string;
  title: string;
  paragraph1?: string;
  paragraph2?: string;
  resultLabel?: string;
  resultItems?: ChecklistItemData[];
}

export interface PcNumberedHowData {
  index?: number;
  icon?: string;
  title: string;
  steps?: IconTextItemData[];
  calloutText?: string;
}

export interface PcNumberedBenefitsData {
  index?: number;
  icon?: string;
  title: string;
  group1?: AdvantageGroupData;
  group2?: AdvantageGroupData;
}

export interface FinalCtaData {
  badge?: string;
  title: string;
  paragraph?: string;
  quote?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  iconItems?: IconTextItemData[];
  statItems?: IconStatTextData[];
  checklistItems?: ChecklistItemData[];
}

export interface PortageCommercialData {
  heroSection: PcHeroData;
  numberedIntro: PcNumberedIntroData;
  numberedWhy: PcNumberedWhyData;
  numberedHow: PcNumberedHowData;
  numberedBenefits: PcNumberedBenefitsData;
  finalCtaSection: FinalCtaData;
}

export const DEFAULT_PORTAGE_COMMERCIAL: PortageCommercialData = {
  heroSection: {
    title: "Développez votre activité en toute autonomie,",
    highlightLine: "sans contraintes administratives.",
    paragraph1:
      "Le portage commercial est une solution qui permet aux indépendants, consultants et commerciaux de travailler avec des entreprises, y compris des grands comptes, sans avoir à gérer la complexité administrative ou contractuelle.",
    paragraph2:
      "Avec Freelinx, vous conservez votre indépendance tout en bénéficiant d'un cadre structuré, sécurisé et parfaitement adapté aux exigences des entreprises modernes.",
    primaryCtaLabel: "Découvrir nos solutions →",
    primaryCtaHref: "#",
    secondaryCtaLabel: "Être rappelé par un expert",
    secondaryCtaHref: "#",
    checklist: [
      { icon: "PortageCommercialShieldCheckIcon", text: "Accès aux grands comptes" },
      { icon: "PortageCommercialLinkIcon", text: "Liberté et autonomie préservées" },
      { icon: "PortageCommercialPersonCircleIcon", text: "Développement de votre chiffre d'affaires" },
      { icon: "PortageCommercialSafeIcon", text: "Sécurisation des paiements" },
    ],
  },

  numberedIntro: {
    index: 1,
    icon: "PortageCommercialQuestionCircleIcon",
    title: "Qu'est-ce que le portage commercial ?",
    intro: "Le portage commercial est un dispositif basé sur une relation tripartite entre :",
    checklistItems: [
      { label: "un professionnel indépendant" },
      { label: "une entreprise cliente" },
      { label: "une société de portage" },
    ],
    paragraph2:
      "La société de portage agit comme un intermédiaire contractuel : elle établit les contrats, gère la facturation et sécurise la relation entre les parties.",
    callout: {
      icon: "PortageCommercialCalloutArrowIcon",
      text: "Vous restez totalement indépendant, sans contrat de travail, contrairement au portage salarial.",
      tone: "pink",
    },
  },

  numberedWhy: {
    index: 2,
    icon: "PortageCommercialTargetIcon",
    title: "Pourquoi utiliser le portage commercial ?",
    paragraph1:
      "Dans de nombreuses entreprises, notamment les grands groupes, travailler avec un prestataire nécessite d'être référencé comme fournisseur.",
    paragraph2:
      "Le portage commercial permet de contourner cette contrainte en facilitant la contractualisation via une structure déjà référencée.",
    resultLabel: "Résultat :",
    resultItems: [
      { label: "accès facilité aux grands comptes" },
      { label: "démarrage rapide des missions" },
      { label: "simplification des démarches" },
    ],
  },

  numberedHow: {
    index: 3,
    icon: "PortageCommercialGearIcon",
    title: "Comment fonctionne le portage commercial ?",
    steps: [
      {
        icon: "PortageCommercialMagnifierIcon",
        title: "Vous identifiez une opportunité",
        description: "Vous prospectez, développez votre réseau et négociez vos missions.",
      },
      {
        icon: "PortageCommercialShieldCheckIcon",
        title: "FREELINX sécurise la relation",
        description:
          "Nous établissons le contrat avec l'entreprise cliente, assurons la conformité juridique et prenons en charge la facturation.",
      },
      {
        icon: "PortageCommercialPersonCircleIcon",
        title: "Vous réalisez la mission",
        description: "Vous travaillez directement avec votre client, en toute autonomie.",
      },
      {
        icon: "PortageCommercialPercentIcon",
        title: "Nous gérons le paiement",
        description: "Nous encaissons les règlements et vous reversons vos honoraires selon les modalités définies.",
      },
    ],
    calloutText: "Vous vous concentrez sur votre performance commerciale, nous sécurisons le cadre.",
  },

  numberedBenefits: {
    index: 4,
    icon: "PortageCommercialBriefcaseIcon",
    title: "Les avantages du portage commercial",
    group1: {
      pillLabel: "Pour les indépendants",
      pillColor: "red",
      items: [
        { label: "Accès à des missions grands comptes" },
        { label: "Gain de temps sur l'administratif" },
        { label: "Liberté totale dans la gestion de votre activité" },
        { label: "Sécurisation des paiements" },
        { label: "Possibilité de développer rapidement votre activité" },
      ],
      calloutText: "Le portage commercial permet de se concentrer uniquement sur la création de valeur.",
      calloutTone: "pink",
    },
    group2: {
      pillLabel: "Pour les entreprises",
      pillColor: "navy",
      items: [
        { label: "Simplification des processus d'achat" },
        { label: "Réduction des contraintes administratives" },
        { label: "Sécurisation juridique des prestations" },
        { label: "Accès à des experts qualifiés rapidement" },
      ],
      calloutText: "Une solution flexible et efficace pour collaborer avec des prestataires externes.",
      calloutTone: "blue",
    },
  },

  finalCtaSection: {
    title: "Prêt à développer votre activité en toute autonomie ?",
    paragraph:
      "FREELINX vous ouvre les portes des grands comptes. Concentrez-vous sur vos missions, nous nous occupons du reste.",
    checklistItems: [
      { label: "Accès aux grands comptes" },
      { label: "Sécurisation juridique" },
      { label: "Facturation & recouvrement" },
      { label: "Paiement rapide et sécurisé" },
    ],
    primaryCtaLabel: "Demander une simulation →",
    primaryCtaHref: "/simulateur",
    secondaryCtaLabel: "Être rappelé par un expert",
    secondaryCtaHref: "#",
  },
};

const PORTAGE_COMMERCIAL_POPULATE = {
  heroSection: { populate: { checklist: true } },
  numberedIntro: { populate: { checklistItems: true, callout: true } },
  numberedWhy: { populate: { resultItems: true } },
  numberedHow: { populate: { steps: true } },
  numberedBenefits: {
    populate: {
      group1: { populate: { items: true } },
      group2: { populate: { items: true } },
    },
  },
  finalCtaSection: { populate: { iconItems: true, statItems: true, checklistItems: true } },
};

export function getPortageCommercial() {
  return fetchStrapi<PortageCommercialData>("portage-commercial", PORTAGE_COMMERCIAL_POPULATE);
}
