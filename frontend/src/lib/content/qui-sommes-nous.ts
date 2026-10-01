import { fetchStrapi } from "@/lib/strapi";

export interface TeamMemberData {
  name: string;
  role: string;
  initials?: string;
  photo?: string | null;
  variant?: "mono" | "color";
}

export interface QsnHeroData {
  pill?: string;
  title: string;
  paragraph1?: string;
  paragraph2?: string;
  team?: TeamMemberData[];
}

export interface QsnStatementData {
  icon?: string;
  title: string;
  highlight?: string;
  paragraph1?: string;
  paragraph2?: string;
}

export interface QsnValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface QsnValuesData {
  title: string;
  values?: QsnValueItem[];
}

export interface StatementQuoteData {
  line1: string;
  line2: string;
}

export interface QuiSommesNousData {
  heroSection: QsnHeroData;
  missionSection: QsnStatementData;
  convictionSection: QsnStatementData;
  valuesSection: QsnValuesData;
  quoteSection: StatementQuoteData;
}

export const DEFAULT_QUI_SOMMES_NOUS: QuiSommesNousData = {
  heroSection: {
    pill: "Qui sommes-nous ?",
    title: "Freelinx, un partenaire de confiance à vos côtés pour aller plus loin.",
    paragraph1:
      "Freelinx, c'est avant tout une équipe d'associés passionnés et expérimentés, forts de plus de 10 ans d'expertise dans le domaine du portage salarial et plus de 20 ans de conseil.",
    paragraph2:
      "Nous avons créé Freelinx avec une conviction profonde : offrir aux consultants un accompagnement qui allie transparence, réactivité et simplicité.",
    team: [
      { initials: "IB", name: "Ibrahim BENAMOUR", role: "Président Directeur Général", variant: "mono" },
      { initials: "MG", name: "Meryem GHANNAM", role: "Directrice Générale", variant: "color" },
    ],
  },
  missionSection: {
    icon: "QuiSommesNousMissionIcon",
    title: "Notre mission",
    highlight: "Vous permettre de vous concentrer pleinement sur votre métier, votre expertise et vos clients.",
    paragraph1:
      "Notre mission est claire : vous permettre de vous concentrer pleinement sur votre métier, votre expertise et vos clients, pendant que nous prenons en charge l'intégralité de la gestion administrative, comptable et sociale.",
    paragraph2:
      "Nous croyons fermement que la réussite de nos consultants passe par une relation de confiance basée sur la clarté et l'honnêteté.",
  },
  convictionSection: {
    icon: "QuiSommesNousConvictionIcon",
    title: "Freelinx est née d'une conviction forte :",
    highlight: "le portage salarial mérite un accompagnement plus humain, plus transparent et plus réactif.",
    paragraph1:
      "Nous avons créé une société capable d'offrir aux consultants indépendants bien plus qu'une simple gestion administrative.",
    paragraph2:
      "Notre ambition est de devenir un véritable partenaire de confiance, présent à chaque étape de votre parcours professionnel.",
  },
  valuesSection: {
    title: "Nos valeurs",
    values: [
      { icon: "QuiSommesNousExigenceIcon", title: "Exigence", description: "Un haut niveau de qualité dans chaque échange." },
      {
        icon: "QuiSommesNousTransparenceIcon",
        title: "Transparence",
        description: "Des informations claires, une rémunération lisible et aucun frais caché.",
      },
      { icon: "QuiSommesNousProximiteIcon", title: "Proximité", description: "Un interlocuteur dédié, disponible et à votre écoute." },
      {
        icon: "QuiSommesNousEngagementIcon",
        title: "Engagement",
        description: "Un accompagnement durable pour soutenir votre croissance.",
      },
    ],
  },
  quoteSection: {
    line1:
      "Chaque consultant est unique. C'est pourquoi nous privilégions une relation de proximité, des conseils personnalisés et un accompagnement durable.",
    line2: "Notre réussite se mesure avant tout à celle des consultants que nous accompagnons.",
  },
};

const QUI_SOMMES_NOUS_POPULATE = {
  heroSection: { populate: { team: { populate: { photo: true } } } },
  missionSection: true,
  convictionSection: true,
  valuesSection: { populate: { values: true } },
  quoteSection: true,
};

export function getQuiSommesNous() {
  return fetchStrapi<QuiSommesNousData>("qui-sommes-nous", QUI_SOMMES_NOUS_POPULATE);
}
