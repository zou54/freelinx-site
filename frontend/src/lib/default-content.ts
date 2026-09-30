// Default content used when the CMS can't be reached (offline, not started
// yet, network issue). Mirrors the seed data in cms/src/seed/*.ts so the
// site never renders empty and `next build` never fails on a missing CMS.
import type { FooterData, HeaderData, HomepageData } from "@/types/strapi";

export const DEFAULT_HOMEPAGE: HomepageData = {
  hero: {
    badge: "PORTAGE SALARIAL",
    title: "Le portage salarial qui vous permet d'entreprendre en toute liberté.",
    highlight:
      "Développez votre activité en toute autonomie, sans renoncer à la sécurité du statut salarié.",
    description:
      "Chez Freelinx, vous restez concentré sur votre métier pendant que nous prenons en charge l'ensemble de la gestion administrative, juridique, sociale et financière de votre activité.",
    bannerText: "Vous trouvez vos missions",
    bannerHighlight: "Nous nous occupons du reste.",
    primaryCtaLabel: "Prendre rendez-vous",
    primaryCtaHref: "#",
    secondaryCtaLabel: "Demander une simulation gratuite →",
    secondaryCtaHref: "#",
    stats: [
      { icon: "ExpertiseIcon", label: "Plus de 10 ans", sublabel: "d'expertise" },
      { icon: "NoFeesIcon", label: "0€ de frais", sublabel: "cachés" },
      { icon: "SupportIcon", label: "Accompagnement", sublabel: "personnalisé" },
      { icon: "SecurePaymentIcon", label: "Paiement", sublabel: "sécurisé" },
    ],
  },

  whySection: {
    title: "Pourquoi choisir Freelinx ?",
    intro1: "Parce que le portage salarial ne se résume pas à établir des bulletins de salaire.",
    intro2:
      "Notre mission est de vous offrir un véritable environnement de travail sécurisé afin que vous puissiez développer votre activité avec sérénité.",
    intro3:
      "Chez Freelinx, chaque consultant bénéficie d'un accompagnement personnalisé, d'une gestion transparente et d'une équipe disponible à chaque étape de son parcours.",
    features: [
      {
        number: 1,
        title: "Vous développez votre activité",
        description: "Prospectez, trouvez vos missions et choisissez librement vos clients.",
      },
      {
        number: 2,
        title: "Nous gérons votre administratif",
        description:
          "Contrats, facturation, paie, déclarations sociales, suivi administratif… nous prenons tout en charge.",
      },
      {
        number: 3,
        title: "Vous profitez de la sécurité du salariat",
        description:
          "Protection sociale, retraite, assurance maladie, chômage, mutuelle… tout en conservant votre autonomie.",
      },
    ],
  },

  stepsSection: {
    pill: "ÉTAPE PAR ÉTAPE",
    title: "Comment fonctionne le portage salarial ?",
    description: "Un fonctionnement simple, clair et sécurisé en 4 étapes.",
    steps: [
      {
        icon: "MissionIcon",
        title: "Vous trouvez votre mission",
        description:
          "Vous prospectez, négociez directement avec votre client votre prestation, votre TJM et vos conditions d'intervention.",
      },
      {
        icon: "ContractIcon",
        title: "Freelinx établit les contrats",
        description:
          "Nous rédigeons les contrats (commercial et de travail), sécurisons la relation et prenons en charge toute la gestion administrative.",
      },
      {
        icon: "WorkBadgeIcon",
        title: "Vous réalisez votre mission",
        description: "Vous intervenez chez votre client en toute autonomie et vous vous concentrez sur votre cœur de métier.",
      },
      {
        icon: "DocumentIcon",
        title: "Vous percevez votre salaire",
        description:
          "Nous facturons votre client et transformons votre chiffre d'affaires en salaire chaque mois, dans un cadre sécurisé, transparent et conforme.",
      },
    ],
    cta: {
      icon: "DocumentIcon",
      title: "Envie de savoir combien vous allez gagner ?",
      description: "Simulez gratuitement votre salaire en quelques clics.",
      primaryLabel: "Simuler mon salaire →",
      primaryHref: "#",
    },
  },

  benefitsSection: {
    pill: "POURQUOI CHOISIR LE PORTAGE SALARIAL ?",
    title: "Pourquoi des centaines de consultants choisissent le portage salarial ?",
    intro1:
      "Le portage salarial est aujourd'hui la solution privilégiée par de nombreux consultants, experts et indépendants souhaitant conjuguer indépendance et sécurité.",
    intro2: "Avec Freelinx, vous bénéficiez de :",
    highlightCardText: "Liberté d'entreprendre, sérénité de salarié.",
    benefits: [
      {
        icon: "SecurePaymentIcon",
        title: "Protection sociale complète",
        description: "Vous bénéficiez de la sécurité sociale, de la mutuelle, de la prévoyance et de la retraite.",
      },
      {
        icon: "ShieldIcon",
        title: "Assurance chômage",
        description: "En cas d'interruption de mission, vous conservez vos droits au chômage sous conditions.",
      },
      {
        icon: "DocumentIcon",
        title: "Zéro gestion administrative",
        description: "Fini les démarches comptables, fiscales et sociales. Nous nous occupons de tout.",
      },
      {
        icon: "RemunerationIcon",
        title: "Rémunération transparente",
        description: "Vous connaissez à l'avance votre salaire net et le détail des frais appliqués.",
      },
      {
        icon: "GrowthIcon",
        title: "Liberté commerciale",
        description: "Vous choisissez vos missions, vos clients, votre TJM et organisez votre temps.",
      },
      {
        icon: "SecurePaymentIcon",
        title: "Paiement sécurisé",
        description: "Vous êtes payé chaque mois, même en cas de retard de paiement de votre client.",
      },
      {
        icon: "SupportIcon",
        title: "Accompagnement personnalisé",
        description: "Un interlocuteur dédié vous accompagne à chaque étape de votre activité.",
      },
      {
        icon: "GrowthIcon",
        title: "Développement de votre activité",
        description: "Concentrez-vous sur la croissance de votre activité, nous créons les conditions idéales.",
      },
    ],
    cta: {
      icon: "DocumentIcon",
      title: "Envie de savoir combien vous pouvez gagner ?",
      description: "Simulez gratuitement votre salaire net en quelques clics.",
      primaryLabel: "Simuler mon salaire →",
      primaryHref: "#",
    },
  },

  commitmentsSection: {
    pill: "NOS ENGAGEMENTS",
    title: "Nos engagements, votre tranquillité d'esprit",
    description: "Chez Freelinx, nous avons construit notre accompagnement autour de quatre engagements forts.",
    commitments: [
      {
        icon: "RemunerationIcon",
        title: "Transparence",
        description:
          "Vous connaissez précisément votre rémunération, les frais appliqués et chaque étape de votre activité. Aucune mauvaise surprise.",
      },
      {
        icon: "GrowthIcon",
        title: "Réactivité",
        description: "Nos équipes répondent rapidement à chacune de vos demandes. Parce que votre activité ne peut pas attendre.",
      },
      {
        icon: "SupportIcon",
        title: "Proximité",
        description:
          "Vous bénéficiez d'un interlocuteur dédié qui connaît votre activité et vous accompagne à chaque étape de votre parcours.",
      },
      {
        icon: "ExpertiseIcon",
        title: "Expertise",
        description: "Plus de 10 ans d'expérience dans le portage salarial et l'accompagnement des indépendants.",
      },
    ],
    cta: {
      icon: "MissionIcon",
      title: "Un partenaire engagé à vos côtés",
      description: "Notre réussite dépend de la vôtre. Nous mettons tout en œuvre pour vous aider à aller plus loin.",
      primaryLabel: "Découvrir nos services →",
      primaryHref: "#",
      secondaryLabel: "Être rappelé par un expert",
      secondaryHref: "#",
    },
  },

  figuresSection: {
    pill: "FREELINX EN QUELQUES CHIFFRES",
    title: "Freelinx en quelques chiffres",
    description: "Des résultats qui reflètent notre engagement et la confiance que nous accordent nos consultants au quotidien.",
    figures: [
      {
        icon: "ExpertiseIcon",
        value: "10+",
        caption: "ANNÉES D'EXPÉRIENCE",
        description: "Plus de 10 ans d'expertise dans le portage salarial et l'accompagnement des indépendants.",
      },
      {
        icon: "RemunerationIcon",
        value: "100%",
        caption: "DE TRANSPARENCE",
        description: "Une information claire et complète sur votre rémunération, les frais et chaque étape.",
      },
      {
        icon: "CoinIcon",
        value: "5%",
        caption: "DE FRAIS DE GESTION",
        description: "Un taux compétitif et tout inclus pour une gestion complète et un accompagnement de qualité.",
      },
      {
        icon: "NoFeesIcon",
        value: "0€",
        caption: "DE FRAIS CACHÉS",
        description: "Aucune mauvaise surprise. Vous savez exactement ce que vous payez.",
      },
    ],
    cta: {
      icon: "DocumentIcon",
      title: "Envie d'en savoir plus ?",
      description: "Nos experts sont à votre disposition pour répondre à vos questions et réaliser une simulation personnalisée.",
      primaryLabel: "Je demande une simulation →",
      primaryHref: "#",
      secondaryLabel: "Être rappelé par un expert",
      secondaryHref: "#",
    },
  },

  sectorsSection: {
    pill: "ILS NOUS FONT CONFIANCE",
    title: "Des experts de tous secteurs nous font confiance",
    description: "Chez Freelinx, nous accompagnons des professionnels indépendants issus de nombreux domaines d'expertise.",
    sectors: [
      { icon: "ConsultantsITIcon", title: "Consultants IT", description: "Développeurs, architectes, consultants techniques, experts en systèmes d'information." },
      { icon: "ToolboxIcon", title: "Chefs de projet", description: "PMP, Scrum Master, chefs de projet MOE, AMOA, digital et transformation." },
      { icon: "StrokeBadgeIcon", title: "Managers de transition", description: "Direction générale, financière, opérationnelle, RH, commerciale et marketing." },
      { icon: "CompassIcon", title: "Business Developers", description: "Experts en développement commercial, grands comptes et stratégie de croissance." },
      { icon: "ExpertiseIcon", title: "Experts métiers", description: "Spécialistes dans leur domaine : finance, qualité, achats, supply chain, conformité…" },
      { icon: "GearBadgeIcon", title: "Ingénieurs", description: "Ingénieurs d'études, R&D, industrialisation, méthodes et amélioration continue." },
      { icon: "SupportIcon", title: "Consultants RH", description: "Recrutement, gestion des talents, transformation RH, SIRH, relations sociales." },
      { icon: "CoinIcon", title: "Consultants Finance", description: "Contrôle de gestion, audit, consolidation, trésorerie, CFO externalisé." },
      { icon: "CartIcon", title: "Acheteurs", description: "Achats directs, indirects, stratégie d'achats, négociation et optimisation." },
      { icon: "ToolboxIcon", title: "Directeurs de programme", description: "Pilotage de programmes complexes et gestion de portefeuilles projets." },
      { icon: "BarsIcon", title: "PMO", description: "Support à la gouvernance de projets, reporting, méthodes et outils." },
      { icon: "SupportIcon", title: "Indépendants qualifiés", description: "Tous profils d'experts souhaitant conjuguer autonomie et sécurité du salariat." },
    ],
    cta: {
      icon: "SupportIcon",
      title: "Rejoignez les centaines d'experts qui nous font déjà confiance",
      description: "Développez votre activité en toute sérénité avec un partenaire fiable et engagé à vos côtés.",
      primaryLabel: "Je demande une simulation →",
      primaryHref: "#",
      secondaryLabel: "Être rappelé par un expert",
      secondaryHref: "#",
    },
  },

  testimonialsSection: {
    pill: "TÉMOIGNAGES CLIENTS",
    title: "Des consultants exigeants, des retours concrets",
    description: "Ce que nos consultants disent de leur expérience avec Freelinx.",
    testimonials: [
      {
        quote:
          "Freelinx m'a permis de structurer mon activité et de gagner en crédibilité auprès de mes clients. Je bénéficie d'un accompagnement personnalisé et d'une gestion simplifiée.",
        name: "Sophie",
        role: "Chef de Projets",
        rating: 5,
      },
      {
        quote:
          "Grâce à Freelinx, j'ai pu lancer mon activité en toute sérénité, sans me soucier de la partie administrative. Tout est clair, structuré et transparent.",
        name: "Marie",
        role: "Manager de Gestion",
        rating: 5,
      },
      {
        quote:
          "Ce que j'apprécie chez Freelinx, c'est la transparence et la réactivité. Les équipes sont disponibles et les paiements sont toujours réguliers.",
        name: "Karim",
        role: "Consultant IT",
        rating: 5,
      },
    ],
  },

  faqSection: {
    pill: "QUESTIONS FRÉQUENTES",
    title: "Vous avez des questions ? Nous avons les réponses.",
    description: "Retrouvez ici les réponses aux questions les plus courantes sur le portage salarial avec Freelinx.",
    faqs: [
      {
        icon: "StrokeBadgeIcon",
        question: "Est-ce que je reste indépendant ?",
        answer: "Oui, vous restez totalement autonome dans le choix de vos missions, de vos clients, de votre organisation et de vos tarifs.",
      },
      {
        icon: "DocumentIcon",
        question: "Comment est calculé mon salaire ?",
        answer: "Votre salaire dépend de votre chiffre d'affaires, de vos frais professionnels et des charges sociales. Utilisez notre simulateur.",
      },
      {
        icon: "ShieldIcon",
        question: "Puis-je bénéficier du chômage ?",
        answer: "Oui, vous bénéficiez de l'assurance chômage sous conditions, comme tout salarié.",
      },
      {
        icon: "ClockIcon",
        question: "Quand suis-je payé ?",
        answer: "Vous êtes payé chaque mois, même en cas de retard de paiement de votre client, si vous optez pour l'avance de trésorerie.",
      },
      {
        icon: "CoinIcon",
        question: "Quels frais sont appliqués ?",
        answer: "Nos frais de gestion sont transparents et compétitifs : à partir de 5 % de votre chiffre d'affaires. Aucun frais caché.",
      },
      {
        icon: "SupportIcon",
        question: "Qui peut bénéficier du portage salarial ?",
        answer: "Le portage salarial s'adresse aux experts, consultants, ingénieurs, managers de transition et indépendants qualifiés.",
      },
    ],
    seeAllLabel: "Voir toutes les questions →",
    cta: {
      icon: "PhoneIcon",
      title: "Une question spécifique ?",
      description: "Nos experts sont à votre écoute pour vous accompagner et vous apporter des réponses personnalisées.",
      primaryLabel: "Être rappelé par un expert",
      primaryHref: "#",
      secondaryLabel: "Envoyer un message",
      secondaryHref: "#",
    },
  },

  finalCtaSection: {
    badge: "PRÊT À PASSER À L'ACTION ?",
    title: "Prêt à développer votre activité en toute sérénité ?",
    paragraph:
      "Notre équipe d'experts vous accompagne à chaque étape et réalise une simulation personnalisée de votre future rémunération.",
    quote: "Votre liberté d'entreprendre, notre expertise à vos côtés.",
    primaryCtaLabel: "DEMANDER UNE SIMULATION",
    primaryCtaHref: "#",
    secondaryCtaLabel: "ÊTRE RAPPELÉ",
    secondaryCtaHref: "#",
    iconItems: [
      { icon: "ShieldIcon", title: "Sécurité", description: "Le statut salarié et une protection sociale complète." },
      { icon: "DocumentIcon", title: "Simplicité", description: "Zéro gestion administrative, nous nous occupons de tout." },
      { icon: "SupportIcon", title: "Accompagnement", description: "Un interlocuteur dédié, disponible et à l'écoute." },
      { icon: "RemunerationIcon", title: "Transparence", description: "Des frais clairs, aucun frais caché, aucune surprise." },
    ],
    statItems: [
      { icon: "ExpertiseIcon", text: "Plus de 10 ans d'expérience au service des consultants." },
      { icon: "MissionIcon", text: "Des centaines de consultants nous font déjà confiance." },
      { icon: "SecurePaymentIcon", text: "Paiement sécurisé et confidentialité garantie." },
      { icon: "GrowthIcon", text: "Une équipe réactive et à votre écoute." },
    ],
  },
};

export const DEFAULT_HEADER: HeaderData = {
  logoLabel: "Freelinx",
  hours: { label: "9:00 - 20:00", detail: "Lundi à Vendredi" },
  phone: { label: "Contactez-nous", detail: "+33 6 99 68 43 73" },
  address: { label: "231 rue Saint-Honoré", detail: "Paris, 75001" },
  navLinks: [
    { label: "Accueil", href: "#", hasChevron: false },
    { label: "Nos Services", href: "#", hasChevron: true },
    { label: "Qui sommes nous ?", href: "#", hasChevron: false },
    { label: "FAQ", href: "#", hasChevron: false },
    { label: "Contact", href: "#", hasChevron: false },
  ],
  primaryCtaLabel: "Prendre rendez-vous",
  primaryCtaHref: "#",
  secondaryCtaLabel: "Faire une simulation",
  secondaryCtaHref: "#",
};

export const DEFAULT_FOOTER: FooterData = {
  logoLabel: "freelinx",
  description: "Le portage salarial qui vous permet d'entreprendre en toute liberté, avec la sécurité du statut salarié.",
  socialLinks: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
  navTitle: "Navigation",
  navLinks: [
    { label: "Accueil", href: "#" },
    { label: "Services", href: "#" },
    { label: "Simulateur", href: "#" },
    { label: "À propos", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  resourcesTitle: "Ressources",
  resourceLinks: [
    { label: "Le portage salarial", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Simuler mon salaire", href: "#" },
    { label: "Mentions légales", href: "#" },
    { label: "Confidentialité", href: "#" },
  ],
  contactTitle: "Contact",
  email: "contact@freelinx.fr",
  phone: "01 23 45 67 89",
  city: "Paris, France",
  copyrightText: "© 2026 Freelinx. Tous droits réservés.",
  legalLinks: [
    { label: "Mentions légales", href: "#" },
    { label: "CGU", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
  ],
};
