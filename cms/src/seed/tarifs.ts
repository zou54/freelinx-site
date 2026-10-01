export const tarifsSeed = {
  heroSection: {
    pill: 'Nos tarifs',
    title: 'Une tarification claire, juste et sans surprise.',
    highlight: 'sans surprise.',
    paragraph1:
      "Chez Freelinx, nous croyons en une tarification transparente et compétitive, sans frais cachés.",
    paragraph2:
      "Vous savez exactement ce que vous payez, pour vous concentrer sur l'essentiel : votre activité.",
    features: [
      { icon: 'TarifsTransparencyFeatureIcon', title: 'Transparence totale', description: 'Aucun frais caché' },
      { icon: 'TarifsSecurityFeatureIcon', title: 'Sécurité', description: 'Protection sociale incluse' },
      { icon: 'TarifsCompetitivenessFeatureIcon', title: 'Compétitivité', description: 'Des frais de gestion maîtrisés' },
      { icon: 'TarifsAccompagnementFeatureIcon', title: 'Accompagnement', description: 'Un service réactif et humain' },
    ],
  },

  pricingSection: {
    title: 'Nos formules de portage salarial',
    description:
      "Nous vous proposons une structure tarifaire simple basée sur votre chiffre d'affaires mensuel. Nos frais de gestion sont dégressifs pour accompagner votre croissance.",
    rateCaption: "de frais de gestion sur votre chiffre d'affaires HT",
    plans: [
      {
        variant: 'red',
        icon: 'TarifsEssentielPersonIcon',
        title: 'Essentiel',
        subtitle: "L'essentiel pour bien démarrer",
        rate: '5%',
        ctaLabel: "Découvrir l'offre",
        ctaHref: '#',
        featureItems: [
          { label: 'Gestion administrative complète' },
          { label: 'Établissement des bulletins de paie' },
          { label: 'Déclarations sociales et fiscales' },
          { label: 'Accès à votre espace consultant' },
          { label: 'Support par email' },
        ],
      },
      {
        variant: 'blue',
        badge: 'Recommandé',
        icon: 'TarifsStarBadgeIcon',
        title: 'Confort',
        subtitle: 'L\'équilibre entre service et performance',
        rate: '+1%',
        ctaLabel: "Découvrir l'offre",
        ctaHref: '#',
        featureItems: [
          { label: 'Tout ce qui est inclus dans Essentiel' },
          { label: 'Accompagnement personnalisé' },
          { label: 'Conseils juridiques et fiscaux' },
          { label: 'Gestion des frais professionnels' },
          { label: 'Support prioritaire' },
          { label: 'Suivi régulier de votre activité' },
        ],
      },
      {
        variant: 'red',
        icon: 'TarifsCrownIcon',
        title: 'Premium',
        subtitle: 'Un accompagnement premium pour aller plus loin',
        rate: '+3%',
        ctaLabel: "Découvrir l'offre",
        ctaHref: '#',
        featureItems: [
          { label: 'Tout ce qui est inclus dans Essentiel et Confort' },
          { label: 'Accompagnement dédié' },
          { label: 'Optimisation de votre rémunération' },
          { label: 'Conseils stratégiques personnalisés' },
          { label: 'Gestion des frais professionnels' },
          { label: 'Avance de trésorerie' },
          { label: 'Mise en relation & opportunités' },
        ],
      },
      {
        variant: 'green',
        icon: 'TarifsBriefcaseIcon',
        title: 'Portage commercial',
        subtitle: 'Développez votre activité en toute autonomie',
        rate: '5%',
        ctaLabel: "Découvrir l'offre",
        ctaHref: '#',
        featureItems: [
          { label: "Mise à disposition d'un contrat de prestation" },
          { label: 'Facturation et encaissement auprès de votre client' },
          { label: 'Relance et suivi des paiements' },
          { label: 'Gestion de la TVA' },
          { label: 'Support administratif et juridique' },
          { label: 'Tableaux de bord de suivi' },
        ],
      },
    ],
  },

  transparencySection: {
    title: 'Transparence & simplicité',
    description:
      "Nos frais de gestion couvrent l'ensemble des services nécessaires à la gestion de votre activité en toute sérénité.",
    checklistItems: [
      { label: 'Gestion administrative' },
      { label: 'Déclarations sociales et fiscales' },
      { label: 'Gestion comptable' },
      { label: 'Assurance responsabilité civile' },
      { label: 'Gestion de la paie' },
      { label: 'Protection sociale complète' },
    ],
    quote: {
      line1: "Aucun frais d'entrée, aucun abonnement, aucun frais caché.",
      line2: 'Vous ne payez que nos frais de gestion sur votre chiffre d\'affaires.',
    },
  },

  simulateBar: {
    icon: 'TarifsCalculatorIcon',
    title: 'Simulez vos revenus en quelques clics',
    description:
      'Utilisez notre simulateur en ligne pour estimer votre rémunération nette après frais de gestion et charges sociales.',
    primaryLabel: 'Demander une simulation gratuite →',
    primaryHref: '/simulateur',
  },
};
