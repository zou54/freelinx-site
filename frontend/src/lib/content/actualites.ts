import { fetchStrapi } from "@/lib/strapi";
import type { CtaBannerData, MediaData } from "@/types/strapi";

export interface ActualitesHeroData {
  badge?: string;
  title: string;
  subtitle?: string;
  heroImage?: MediaData | null;
  heroImageAlt?: string;
}

export interface ActualitesData {
  heroSection: ActualitesHeroData;
  cta: CtaBannerData;
}

export const DEFAULT_ACTUALITES: ActualitesData = {
  heroSection: {
    badge: "Actualités",
    title: "Les actualités du portage salarial et du travail indépendant",
    subtitle:
      "Conseils, décryptages et retours d'expérience pour vous accompagner dans votre activité de consultant indépendant.",
  },
  cta: {
    icon: "DocumentIcon",
    title: "Une question sur votre activité ?",
    description: "Nos experts sont à votre écoute pour vous accompagner et vous apporter des réponses personnalisées.",
    primaryLabel: "Être rappelé par un expert",
    primaryHref: "#",
    secondaryLabel: "Demander une simulation gratuite →",
    secondaryHref: "/simulateur",
  },
};

const ACTUALITES_POPULATE = {
  heroSection: { populate: { heroImage: true } },
  cta: true,
};

export function getActualites() {
  return fetchStrapi<ActualitesData>("actualites", ACTUALITES_POPULATE);
}
