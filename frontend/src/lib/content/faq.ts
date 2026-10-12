import { fetchStrapi } from "@/lib/strapi";
import type { CtaBannerData } from "@/types/strapi";

export interface FaqHeroData {
  pill?: string;
  title: string;
  subtitle?: string;
}

export interface FaqListItem {
  label: string;
}

export interface FaqQuestionData {
  question: string;
  intro: string;
  items?: FaqListItem[];
  outro?: string;
}

export interface FaqData {
  heroSection: FaqHeroData;
  questions?: FaqQuestionData[];
  cta: CtaBannerData;
}

export const DEFAULT_FAQ: FaqData = {
  heroSection: {
    pill: "FAQ",
    title: "Une approche transparente, des réponses claires",
    subtitle:
      "Nous avons conçu notre accompagnement pour qu'il soit compréhensible, accessible et sans ambiguïté. Chaque étape, chaque élément de votre rémunération et chaque service proposé sont expliqués de manière claire.",
  },

  questions: [
    {
      question: "Qu'est-ce que le portage salarial ?",
      intro:
        "Le portage salarial est une solution qui permet d'exercer une activité indépendante tout en bénéficiant du statut de salarié. Concrètement, vous développez votre activité (prospection, missions, négociation), tandis que FREELINX gère l'ensemble des aspects administratifs, contractuels et sociaux. Vous percevez un salaire et bénéficiez d'une protection sociale complète.",
    },
    {
      question: "Qui peut bénéficier du portage salarial ?",
      intro: "Le portage salarial s'adresse principalement aux :",
      items: [
        { label: "Consultants" },
        { label: "Freelances" },
        { label: "Ingénieurs" },
        { label: "Chefs de projet" },
        { label: "Formateurs" },
        { label: "Experts métiers" },
      ],
      outro: "Toute personne disposant d'une expertise pouvant être valorisée auprès d'entreprises peut en bénéficier.",
    },
    {
      question: "Est-ce que je reste indépendant ?",
      intro:
        "Oui, totalement tout en bénéficiant des avantages d'un salarié. Vous conservez une liberté complète dans :",
      items: [
        { label: "Le choix de vos missions" },
        { label: "La fixation de vos tarifs auprès du client" },
        { label: "L'organisation de votre temps de travail" },
      ],
      outro: "FREELINX intervient uniquement pour sécuriser et gérer votre activité.",
    },
    {
      question: "Comment est calculé mon salaire ?",
      intro:
        "Votre salaire dépend principalement de votre chiffre d'affaires. Une fois votre prestation facturée :",
      items: [
        { label: "Les cotisations sociales sont appliquées" },
        { label: "Les frais de gestion sont déduits (5% chez FREELINX)" },
        { label: "Vous percevez votre salaire net" },
      ],
      outro: "Tout est détaillé de manière transparente.",
    },
    {
      question: "Y a-t-il des frais cachés ?",
      intro:
        "Non. Chez FREELINX, nous avons fait de la transparence un engagement fort. Tous les frais sont clairement annoncés dès le départ :",
      items: [
        { label: "Frais de gestion : 5%" },
        { label: "Gestion des frais : 1%" },
        { label: "Avance de trésorerie (option) : 3%" },
      ],
      outro: "Aucune surprise sur votre bulletin de salaire.",
    },
    {
      question: "Quand suis-je payé ?",
      intro:
        "Votre salaire est versé de manière régulière, même si votre client paie avec un délai. Grâce à notre système d'avance de trésorerie, vous pouvez sécuriser vos revenus et éviter les décalages de paiement.",
    },
    {
      question: "Ai-je droit au chômage ?",
      intro:
        "Oui. En portage salarial, vous bénéficiez du statut de salarié, ce qui vous ouvre des droits au chômage, sous réserve de respecter les conditions légales en vigueur.",
    },
    {
      question: "Quelle protection sociale ai-je ?",
      intro: "Vous bénéficiez d'une protection sociale complète :",
      items: [
        { label: "Assurance maladie" },
        { label: "Retraite" },
        { label: "Prévoyance" },
        { label: "Mutuelle" },
        { label: "Droits au chômage" },
      ],
      outro: "Vous êtes couvert comme un salarié classique.",
    },
    {
      question: "Puis-je obtenir un crédit immobilier ?",
      intro:
        "Oui, et c'est même plus simple qu'en freelance classique. Grâce à vos bulletins de salaire, les banques reconnaissent votre statut et vous pouvez plus facilement accéder à un crédit.",
    },
    {
      question: "Dois-je trouver mes missions moi-même ?",
      intro:
        "Oui, vous êtes libre de développer votre activité comme vous le souhaitez. Cependant, FREELINX vous permet d'intégrer un réseau de professionnels et de bénéficier d'opportunités d'échanges et de collaboration.",
    },
    {
      question: "Que se passe-t-il si ma mission s'arrête ?",
      intro:
        "En cas d'arrêt de mission, vous conservez vos droits au chômage, selon les conditions légales. Cela constitue une sécurité importante pour votre activité.",
    },
    {
      question: "Pourquoi choisir FREELINX plutôt qu'une autre société ?",
      intro: "FREELINX se distingue par :",
      items: [
        { label: "Une transparence totale (0 frais cachés)" },
        { label: "Un accompagnement personnalisé" },
        { label: "Une grande réactivité" },
        { label: "Une gestion claire et simplifiée" },
      ],
      outro: "Notre objectif est simple : vous permettre de développer votre activité en toute sérénité.",
    },
  ],

  cta: {
    icon: "PhoneIcon",
    title: "Une question spécifique ?",
    description: "Nos experts sont à votre écoute pour vous accompagner et vous apporter des réponses personnalisées.",
    primaryLabel: "Être rappelé par un expert",
    primaryHref: "#",
    secondaryLabel: "Envoyer un message",
    secondaryHref: "#",
  },
};

const FAQ_POPULATE = {
  heroSection: true,
  questions: { populate: { items: true } },
  cta: true,
};

export function getFaq() {
  return fetchStrapi<FaqData>("faq", FAQ_POPULATE);
}
