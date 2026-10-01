import { fetchStrapi } from "@/lib/strapi";

export interface ChecklistItem {
  label: string;
}

export interface SimulateurCopyData {
  heroPill: string;
  heroTitle: string;
  heroDescription: string;
  complianceBadge: string;

  formTitle: string;
  modeLabel: string;
  modeTjmLabel: string;
  modeCaLabel: string;
  modeNetLabel: string;
  tjmFieldLabel: string;
  tjmHelper: string;
  caFieldLabel: string;
  netFieldLabel: string;
  joursFieldLabel: string;
  joursHelper: string;
  fraisGestionLabel: string;
  advancedToggleLabel: string;
  fraisProFieldLabel: string;
  fraisProHelper: string;
  fraisProRowLabel: string;
  situationFieldLabel: string;
  partsLabel: string;
  partsHelper: string;
  submitLabel: string;

  tabResultatsLabel: string;
  tabGraphiquesLabel: string;
  tabComparateurLabel: string;
  tabDetailsLabel: string;
  tjmNecessaireLabel: string;
  statCaLabel: string;
  statBrutLabel: string;
  statNetAvantLabel: string;
  statImpotLabel: string;
  statNetApresLabel: string;
  detailPrelevementsTitle: string;
  chargesPatronalesLabel: string;
  chargesSalarialesLabel: string;
  tauxChargeGlobalLabel: string;
  projectionAnnuelleTitle: string;
  annuelCaLabel: string;
  annuelBrutLabel: string;
  annuelNetAvantLabel: string;
  annuelImpotLabel: string;
  annuelNetApresLabel: string;
  infosImportantesTitle: string;
  infosImportantesBullets: ChecklistItem[];

  graphRepartitionTitle: string;
  graphEvolutionTitle: string;
  graphComparaisonTitle: string;
  graphProjectionTitle: string;
  donutCenterLabel: string;
  donutSalaireNetLabel: string;
  evoCaLabel: string;
  evoApresFraisLabel: string;
  evoNetAvantLabel: string;
  evoNetApresLabel: string;
  comparePatronalesLabel: string;
  compareSalarialesLabel: string;
  compareFraisGestionLabel: string;
  compareImpotLabel: string;
  lineCaLegend: string;
  lineNetLegend: string;
  lineCaCumuleLabel: string;
  lineNetCumuleLabel: string;

  comparateurTitle: string;
  portageCardTitle: string;
  salarieCardTitle: string;
  avantagePortageLabel: string;
  avantageSalariatLabel: string;
  differenceLabel: string;
  salarieColumnTitle: string;
  avantagesLabel: string;
  inconvenientsLabel: string;
  portageAvantages: ChecklistItem[];
  portageInconvenients: ChecklistItem[];
  salarieAvantages: ChecklistItem[];
  salarieInconvenients: ChecklistItem[];
  conclusionTitle: string;
  conclusionPortageLabel: string;
  conclusionSalariatLabel: string;
  conclusionMiddleText: string;
  conclusionSuffixText: string;
  conclusionSecondParagraph: string;

  detailsTitle: string;
  detailsTableHeaderPoste: string;
  detailsTableHeaderMontant: string;
  detailsTableTotalLabel: string;
  detailsDisclaimer: string;
}

export const DEFAULT_SIMULATEUR_COPY: SimulateurCopyData = {
  heroPill: "Simulateur",
  heroTitle: "Calculez votre revenu net en portage salarial, en quelques secondes.",
  heroDescription:
    "Renseignez votre TJM, votre chiffre d'affaires ou le net que vous visez : notre simulateur applique le calcul exact des charges, frais de gestion et impôt pour vous donner une estimation fiable.",
  complianceBadge: "Calcul avancé conforme à la législation française 2024-2025",

  formTitle: "Paramètres de simulation",
  modeLabel: "Mode de calcul",
  modeTjmLabel: "TJM",
  modeCaLabel: "CA",
  modeNetLabel: "Net cible",
  tjmFieldLabel: "Taux Journalier Moyen (TJM)",
  tjmHelper: "Tarif journalier facturé au client",
  caFieldLabel: "Chiffre d'affaires mensuel",
  netFieldLabel: "Salaire net mensuel souhaité",
  joursFieldLabel: "Jours travaillés / mois",
  joursHelper: "Moyenne : 19-21 jours/mois",
  fraisGestionLabel: "Frais de gestion",
  advancedToggleLabel: "Paramètres avancés",
  fraisProFieldLabel: "Frais professionnels (HT)",
  fraisProHelper: "Déplacement, restauration, matériel...",
  fraisProRowLabel: "Frais professionnels",
  situationFieldLabel: "Situation familiale",
  partsLabel: "Nombre de parts fiscales :",
  partsHelper: "Calculé automatiquement selon la situation familiale, modifiable manuellement.",
  submitLabel: "Faire une simulation",

  tabResultatsLabel: "Résultats",
  tabGraphiquesLabel: "Graphiques",
  tabComparateurLabel: "Comparateur",
  tabDetailsLabel: "Détails",
  tjmNecessaireLabel: "TJM nécessaire",
  statCaLabel: "Chiffre d'affaires",
  statBrutLabel: "Salaire brut",
  statNetAvantLabel: "Salaire net avant impôt",
  statImpotLabel: "Impôt sur le revenu",
  statNetApresLabel: "Salaire net après impôt",
  detailPrelevementsTitle: "Détail des prélèvements",
  chargesPatronalesLabel: "Charges patronales",
  chargesSalarialesLabel: "Charges salariales",
  tauxChargeGlobalLabel: "Taux de charge global",
  projectionAnnuelleTitle: "Projection annuelle",
  annuelCaLabel: "CA annuel",
  annuelBrutLabel: "Brut annuel",
  annuelNetAvantLabel: "Net avant impôt",
  annuelImpotLabel: "Impôt annuel",
  annuelNetApresLabel: "Net annuel",
  infosImportantesTitle: "Informations importantes :",
  infosImportantesBullets: [
    { label: "Le taux de charges patronales varie selon votre salaire" },
    { label: "L'impôt est calculé selon le barème progressif 2024" },
    { label: "Les résultats sont donnés à titre indicatif" },
  ],

  graphRepartitionTitle: "Répartition du chiffre d'affaires",
  graphEvolutionTitle: "Évolution du CA au salaire net",
  graphComparaisonTitle: "Comparaison des charges et prélèvements",
  graphProjectionTitle: "Projection annuelle (constant)",
  donutCenterLabel: "CA mensuel",
  donutSalaireNetLabel: "Salaire net",
  evoCaLabel: "CA",
  evoApresFraisLabel: "Après frais gestion",
  evoNetAvantLabel: "Net avant impôt",
  evoNetApresLabel: "Net après impôt",
  comparePatronalesLabel: "Patronales",
  compareSalarialesLabel: "Salariales",
  compareFraisGestionLabel: "Frais gestion",
  compareImpotLabel: "Impôt",
  lineCaLegend: "CA",
  lineNetLegend: "Net",
  lineCaCumuleLabel: "CA cumulé sur 12 mois",
  lineNetCumuleLabel: "Net cumulé sur 12 mois",

  comparateurTitle: "Comparaison Portage vs Salariat classique",
  portageCardTitle: "Portage salarial",
  salarieCardTitle: "Salariat classique",
  avantagePortageLabel: "Avantage portage",
  avantageSalariatLabel: "Avantage salariat",
  differenceLabel: "Différence",
  salarieColumnTitle: "Salarié classique",
  avantagesLabel: "Avantages",
  inconvenientsLabel: "Inconvénients",
  portageAvantages: [
    { label: "Flexibilité et autonomie" },
    { label: "Pas de création d'entreprise" },
    { label: "Protection sociale complète" },
    { label: "Gestion administrative simplifiée" },
    { label: "Assurance chômage" },
    { label: "Formation professionnelle" },
    { label: "Retraite complémentaire" },
  ],
  portageInconvenients: [
    { label: "Frais de gestion (5-10%)" },
    { label: "Intermittence des missions" },
    { label: "Pas de congés payés" },
    { label: "Responsabilité de trouver des clients" },
  ],
  salarieAvantages: [
    { label: "Stabilité de l'emploi" },
    { label: "Avantages en nature possibles" },
    { label: "Intégration en équipe" },
    { label: "Plan d'épargne entreprise" },
    { label: "Tickets restaurant" },
    { label: "Mutuelle collective" },
    { label: "Congés payés garantis" },
  ],
  salarieInconvenients: [
    { label: "Moins de flexibilité" },
    { label: "Salaire fixe" },
    { label: "Hiérarchie" },
    { label: "Mobilité limitée" },
  ],
  conclusionTitle: "Conclusion",
  conclusionPortageLabel: "portage salarial",
  conclusionSalariatLabel: "salariat classique",
  conclusionMiddleText: " est plus avantageux financièrement avec un gain de ",
  conclusionSuffixText: " par mois.",
  conclusionSecondParagraph:
    "Cependant, le choix entre portage et salariat dépend aussi de critères non financiers : autonomie, flexibilité, sécurité, avantages sociaux et vos préférences personnelles.",

  detailsTitle: "Détail du calcul",
  detailsTableHeaderPoste: "Poste de charge",
  detailsTableHeaderMontant: "Montant",
  detailsTableTotalLabel: "TOTAL",
  detailsDisclaimer:
    "Simulation basée sur la législation française 2024-2025. Résultats à titre indicatif, ne constituant pas un engagement contractuel.",
};

const SIMULATEUR_POPULATE = {
  infosImportantesBullets: true,
  portageAvantages: true,
  portageInconvenients: true,
  salarieAvantages: true,
  salarieInconvenients: true,
};

export function getSimulateurCopy() {
  return fetchStrapi<SimulateurCopyData>("simulateur", SIMULATEUR_POPULATE);
}
