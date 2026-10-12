export const headerSeed = {
  logoLabel: 'Freelinx',
  hours: { label: '9:00 - 20:00', detail: 'Lundi à Vendredi' },
  phone: { label: 'Contactez-nous', detail: '+33 6 99 68 43 73' },
  address: { label: '231 rue Saint-Honoré', detail: 'Paris, 75001' },
  navLinks: [
    { label: 'Accueil', href: '/' },
    {
      label: 'Nos Services',
      href: '#',
      children: [
        { label: 'Portage salarial', href: '/portage-salarial' },
        { label: 'Portage commercial', href: '/portage-commercial' },
        { label: 'Tarifs', href: '/tarifs' },
      ],
    },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Qui sommes nous ?', href: '/qui-sommes-nous' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/#contact' },
  ],
  primaryCtaLabel: 'Prendre rendez-vous',
  primaryCtaHref: '#',
  secondaryCtaLabel: 'Faire une simulation',
  secondaryCtaHref: '/simulateur',
};
