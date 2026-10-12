function paragraph(text: string) {
  return { type: 'paragraph', children: [{ type: 'text', text }] };
}

function heading(level: 2 | 3, text: string) {
  return { type: 'heading', level, children: [{ type: 'text', text }] };
}

function bulletList(items: string[]) {
  return {
    type: 'list',
    format: 'unordered',
    children: items.map((item) => ({
      type: 'list-item',
      children: [{ type: 'text', text: item }],
    })),
  };
}

function quote(text: string) {
  return { type: 'quote', children: [{ type: 'text', text }] };
}

export const articlesSeed = [
  {
    title: 'Comment fonctionne le portage salarial en 2026 ?',
    slug: 'comment-fonctionne-le-portage-salarial-en-2026',
    excerpt:
      "Le portage salarial permet d'exercer une activité indépendante tout en bénéficiant du statut de salarié. Voici comment ça fonctionne concrètement, étape par étape.",
    categorySlug: 'portage-salarial',
    readingTime: 4,
    seo: {
      title: 'Comment fonctionne le portage salarial en 2026 ? — Freelinx',
      description:
        "Le portage salarial permet d'exercer une activité indépendante tout en bénéficiant du statut de salarié. Voici comment ça fonctionne concrètement.",
    },
    content: [
      paragraph(
        "Le portage salarial continue de gagner du terrain auprès des consultants, experts et indépendants qui veulent conjuguer liberté d'entreprendre et sécurité du statut salarié. Mais concrètement, comment ça fonctionne ?"
      ),
      heading(2, 'Une relation tripartite'),
      paragraph(
        "Le principe repose sur une relation à trois : vous, votre client, et la société de portage. Vous négociez librement vos missions et vos tarifs auprès de vos clients ; la société de portage, elle, prend en charge l'ensemble du volet administratif, social et juridique."
      ),
      bulletList([
        'Vous trouvez et négociez vos missions',
        'Freelinx établit le contrat de travail et la convention de portage',
        'Nous facturons votre client et gérons les relances',
        'Vous percevez un salaire net, après déduction des frais de gestion et des charges sociales',
      ]),
      heading(2, 'Quelle protection sociale ?'),
      paragraph(
        "Parce que vous êtes salarié de la société de portage, vous bénéficiez de la même protection sociale qu'un salarié classique : assurance maladie, retraite, prévoyance, mutuelle et droits au chômage sous conditions."
      ),
      quote("Le portage salarial, c'est la liberté d'un indépendant avec la sécurité d'un salarié."),
      paragraph(
        "Pour en savoir plus sur votre rémunération nette, vous pouvez utiliser notre simulateur en ligne qui calcule votre salaire en quelques secondes."
      ),
    ],
  },
  {
    title: "Portage commercial : à qui s'adresse cette solution ?",
    slug: 'portage-commercial-a-qui-s-adresse-cette-solution',
    excerpt:
      "Le portage commercial facilite l'accès aux grands comptes pour les indépendants et commerciaux. Découvrez les profils pour qui cette solution est la plus adaptée.",
    categorySlug: 'portage-commercial',
    readingTime: 3,
    seo: {
      title: "Portage commercial : à qui s'adresse cette solution ? — Freelinx",
      description:
        "Le portage commercial facilite l'accès aux grands comptes. Découvrez les profils pour qui cette solution est la plus adaptée.",
    },
    content: [
      paragraph(
        "Contrairement au portage salarial, le portage commercial ne crée pas de contrat de travail : vous restez pleinement indépendant, mais la société de portage sécurise la relation contractuelle avec votre client."
      ),
      heading(2, 'Des profils variés'),
      bulletList([
        'Commerciaux indépendants souhaitant accéder à des grands comptes déjà référencés',
        "Consultants qui facturent occasionnellement sans vouloir créer leur propre structure",
        'Indépendants qui veulent déléguer la facturation et le recouvrement',
      ]),
      heading(2, 'Un cadre sécurisé, sans contrat de travail'),
      paragraph(
        "La société de portage agit comme un intermédiaire contractuel : elle établit les contrats, gère la facturation, et sécurise les paiements. Vous conservez une totale autonomie dans l'organisation de votre activité."
      ),
      paragraph(
        'Le portage commercial est particulièrement utile lorsque vous devez répondre rapidement à une opportunité chez un grand compte sans attendre une procédure de référencement fournisseur.'
      ),
    ],
  },
  {
    title: 'Cinq conseils pour bien démarrer en freelance',
    slug: 'cinq-conseils-pour-bien-demarrer-en-freelance',
    excerpt:
      "Se lancer en freelance est excitant mais demande de la préparation. Voici cinq conseils concrets pour démarrer votre activité indépendante sur de bonnes bases.",
    categorySlug: 'conseils-freelance',
    readingTime: 5,
    seo: {
      title: 'Cinq conseils pour bien démarrer en freelance — Freelinx',
      description:
        'Voici cinq conseils concrets pour démarrer votre activité indépendante sur de bonnes bases.',
    },
    content: [
      paragraph(
        "Se lancer en freelance est une aventure passionnante, mais qui demande de la préparation pour éviter les faux départs. Voici cinq conseils pour démarrer sereinement."
      ),
      heading(2, '1. Choisissez le bon statut'),
      paragraph(
        'Auto-entrepreneur, portage salarial, société unipersonnelle : chaque statut a ses avantages. Le portage salarial permet notamment de démarrer sans création de structure et avec une protection sociale complète.'
      ),
      heading(2, '2. Fixez un tarif cohérent'),
      paragraph(
        'Un TJM trop bas fragilise votre activité sur le long terme. Prenez en compte vos charges, vos congés et votre temps de prospection pour fixer un tarif réaliste.'
      ),
      heading(2, '3. Structurez votre prospection'),
      bulletList([
        'Définissez votre offre et votre cible',
        'Activez votre réseau existant avant de démarcher à froid',
        'Suivez vos opportunités dans un outil simple (tableau, CRM léger)',
      ]),
      heading(2, '4. Anticipez la gestion administrative'),
      paragraph(
        "Factures, devis, déclarations sociales : la charge administrative peut vite devenir un frein. C'est exactement ce que le portage salarial permet de déléguer entièrement."
      ),
      heading(2, '5. Entourez-vous'),
      quote('Un bon accompagnement fait souvent la différence entre un démarrage difficile et une activité qui décolle.'),
      paragraph(
        "Rejoindre un réseau de consultants, échanger avec d'autres indépendants ou être accompagné par une société de portage sont autant de leviers pour sécuriser vos débuts."
      ),
    ],
  },
];
