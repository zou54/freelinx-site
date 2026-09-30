// Salary simulation engine for portage salarial, ported 1:1 from the
// vanilla-JS logic in design-reference/freelinx-simulateur.html. Constants
// and formulas follow French legislation 2024-2025; kept hard-coded in the
// frontend per the migration plan (not CMS-driven).

export const CN = {
  PLAFOND_SS_MENSUEL: 3864,
  FRAIS_GESTION_MIN: 5,
  FRAIS_GESTION_MAX: 10,
  FRAIS_GESTION_DEFAULT: 7,
  CHARGES_PATRONALES: {
    assuranceMaladie: 13,
    allocFamiliales: 3.45,
    accidentTravail: 1,
    retraiteComplementaire: 4.72,
    chomage: 4.05,
    apec: 0.06,
    versementTransport: 2,
    csa: 0.3,
    constructionLogement: 0.45,
    formationProfessionnelle: 1,
  },
  CHARGES_SALARIALES: {
    retraiteComplementaire: 3.15,
    chomage: 2.4,
    apec: 0.024,
    csg: 9.2,
    crds: 0.5,
  },
  BAREME_IMPOT: [
    { max: 11294, taux: 0 },
    { max: 28797, taux: 11 },
    { max: 82341, taux: 30 },
    { max: 177106, taux: 41 },
    { max: Infinity, taux: 45 },
  ],
  DEDUCTION_FORFAITAIRE: 10,
  DEDUCTION_FORFAITAIRE_MIN: 472,
  DEDUCTION_FORFAITAIRE_MAX: 13522,
};

export function chargesPatronales(brut: number) {
  const plafond = CN.PLAFOND_SS_MENSUEL;
  let n = 0;
  n += brut * (CN.CHARGES_PATRONALES.assuranceMaladie / 100);
  n += brut * (CN.CHARGES_PATRONALES.allocFamiliales / 100);
  n += brut * 0.019;
  n += Math.min(brut, plafond) * 0.0855;
  n += brut * (CN.CHARGES_PATRONALES.accidentTravail / 100);
  n += Math.min(brut, plafond) * (CN.CHARGES_PATRONALES.retraiteComplementaire / 100);
  n += brut * (CN.CHARGES_PATRONALES.chomage / 100);
  n += Math.min(brut, plafond * 4) * (CN.CHARGES_PATRONALES.apec / 100);
  n += brut * (CN.CHARGES_PATRONALES.versementTransport / 100);
  n += brut * (CN.CHARGES_PATRONALES.csa / 100);
  n += brut <= plafond ? brut * 0.001 : brut * 0.005;
  n += brut * (CN.CHARGES_PATRONALES.constructionLogement / 100);
  n += brut * (CN.CHARGES_PATRONALES.formationProfessionnelle / 100);
  return n;
}

export function chargesSalariales(brut: number) {
  const plafond = CN.PLAFOND_SS_MENSUEL;
  let n = 0;
  n += brut * 0.004;
  n += Math.min(brut, plafond) * 0.069;
  n += Math.min(brut, plafond) * (CN.CHARGES_SALARIALES.retraiteComplementaire / 100);
  n += brut * (CN.CHARGES_SALARIALES.chomage / 100);
  n += Math.min(brut, plafond * 4) * (CN.CHARGES_SALARIALES.apec / 100);
  const assiette = brut * 0.9825;
  n += assiette * (CN.CHARGES_SALARIALES.csg / 100);
  n += assiette * (CN.CHARGES_SALARIALES.crds / 100);
  return n;
}

export function calcImpot(revenu: number, parts = 1) {
  const n = revenu / parts;
  let r = 0;
  let i = n;
  for (let o = 0; o < CN.BAREME_IMPOT.length; o++) {
    const tranche = CN.BAREME_IMPOT[o];
    const c = o === 0 ? 0 : CN.BAREME_IMPOT[o - 1].max;
    const f = tranche.max;
    const h = Math.min(i, f - c);
    if (h <= 0) break;
    r += h * (tranche.taux / 100);
    i -= h;
    if (i <= 0) break;
  }
  return r * parts;
}

export interface SimulationResult {
  chiffreAffaires: number;
  fraisGestion: number;
  montantFraisGestion: number;
  fraisProfessionnels: number;
  caApresFraisGestion: number;
  caApresFraisPro: number;
  salaireBrut: number;
  chargesPatronales: number;
  chargesSalariales: number;
  salaireNetAvantImpot: number;
  impotMensuel: number;
  salaireNetApresImpot: number;
  tauxCharge: number;
  coutTotal: number;
  coutEmployeur: number;
  annuel: {
    chiffreAffaires: number;
    salaireBrut: number;
    salaireNetAvantImpot: number;
    impot: number;
    salaireNetApresImpot: number;
  };
}

export function simuler(opts: {
  chiffreAffaires: number;
  fraisGestion?: number;
  fraisProfessionnels?: number;
  nbParts?: number;
}): SimulationResult {
  const t = opts.chiffreAffaires;
  const n = opts.fraisGestion !== undefined ? opts.fraisGestion : CN.FRAIS_GESTION_DEFAULT;
  const r = opts.fraisProfessionnels || 0;
  const i = opts.nbParts || 1;

  const u = t * (n / 100);
  const c = t - u;
  const f = c - r;

  let h = f / 1.42;
  for (let U = 0; U < 5; U++) {
    const X = chargesPatronales(h);
    h = f - X;
  }

  const p = chargesPatronales(h);
  const m = chargesSalariales(h);
  const x = h - m;
  const v = h * 0.9825 * 0.068;
  const S = (h - v) * 12;
  let A = S * (CN.DEDUCTION_FORFAITAIRE / 100);
  A = Math.max(CN.DEDUCTION_FORFAITAIRE_MIN, Math.min(A, CN.DEDUCTION_FORFAITAIRE_MAX));
  const N = S - A;
  const E = calcImpot(N, i);
  const D = E / 12;
  const T = x - D;
  const k = ((t - T) / t) * 100;

  return {
    chiffreAffaires: t,
    fraisGestion: n,
    montantFraisGestion: u,
    fraisProfessionnels: r,
    caApresFraisGestion: c,
    caApresFraisPro: f,
    salaireBrut: h,
    chargesPatronales: p,
    chargesSalariales: m,
    salaireNetAvantImpot: x,
    impotMensuel: D,
    salaireNetApresImpot: T,
    tauxCharge: k,
    coutTotal: t,
    coutEmployeur: h + p,
    annuel: {
      chiffreAffaires: t * 12,
      salaireBrut: h * 12,
      salaireNetAvantImpot: x * 12,
      impot: E,
      salaireNetApresImpot: T * 12,
    },
  };
}

export function simulerDepuisTJM(
  tjm: number,
  jours: number,
  fraisGestion?: number,
  fraisPro?: number,
  nbParts?: number
) {
  const ca = tjm * jours;
  return simuler({ chiffreAffaires: ca, fraisGestion, fraisProfessionnels: fraisPro, nbParts });
}

export function comparerSalarie(ca: number, fraisGestion?: number) {
  const n = simuler({ chiffreAffaires: ca, fraisGestion });
  const r = ca / 1.42;
  const i = chargesSalariales(r);
  const o = r - i;
  const u = n.salaireNetAvantImpot - o;
  const c = o !== 0 ? (u / o) * 100 : 0;
  return {
    portage: { net: n.salaireNetAvantImpot, brut: n.salaireBrut },
    salarie: { net: o, brut: r },
    difference: u,
    pourcentageDifference: c,
    avantageux: u > 0 ? ("portage" as const) : ("salarie" as const),
  };
}

export function tjmNecessairePourNet(netCible: number, jours: number, fraisGestion?: number) {
  let r = (netCible * 2.2) / jours;
  for (let i = 0; i < 10; i++) {
    const o = simulerDepuisTJM(r, jours, fraisGestion);
    const u = netCible - o.salaireNetApresImpot;
    if (Math.abs(u) < 1) break;
    r += (u * 2.2) / jours;
  }
  return Math.round(r);
}

export interface DetailCharges {
  patronales: Record<string, number>;
  salariales: Record<string, number>;
  totalPatronales: number;
  totalSalariales: number;
}

export function detailCharges(brut: number): DetailCharges {
  const plafond = CN.PLAFOND_SS_MENSUEL;
  const patronales: Record<string, number> = {
    assuranceMaladie: brut * 0.13,
    allocFamiliales: brut * 0.0345,
    assuranceVieillesseDepla: brut * 0.019,
    assuranceVieillessePlaf: Math.min(brut, plafond) * 0.0855,
    accidentTravail: brut * 0.01,
    retraiteComplementaire: Math.min(brut, plafond) * 0.0472,
    chomage: brut * 0.0405,
    apec: Math.min(brut, plafond * 4) * 0.0006,
    versementTransport: brut * 0.02,
    csa: brut * 0.003,
    fnal: brut > plafond ? brut * 0.005 : brut * 0.001,
    logement: brut * 0.0045,
    formation: brut * 0.01,
  };
  const assiette = brut * 0.9825;
  const salariales: Record<string, number> = {
    assuranceVieillesseDepla: brut * 0.004,
    assuranceVieillessePlaf: Math.min(brut, plafond) * 0.069,
    retraiteComplementaire: Math.min(brut, plafond) * 0.0315,
    chomage: brut * 0.024,
    apec: Math.min(brut, plafond * 4) * 0.00024,
    csg: assiette * 0.092,
    crds: assiette * 0.005,
  };
  const sum = (o: Record<string, number>) => Object.values(o).reduce((s, v) => s + v, 0);
  return {
    patronales,
    salariales,
    totalPatronales: sum(patronales),
    totalSalariales: sum(salariales),
  };
}

export const CHARGE_LABELS: Record<string, string> = {
  assuranceMaladie: "Assurance maladie",
  allocFamiliales: "Allocations familiales",
  assuranceVieillesseDepla: "Assurance vieillesse déplafonnée",
  assuranceVieillessePlaf: "Assurance vieillesse plafonnée",
  accidentTravail: "Accident du travail",
  retraiteComplementaire: "Retraite complémentaire",
  chomage: "Chômage",
  apec: "APEC",
  versementTransport: "Versement transport",
  csa: "CSA",
  fnal: "FNAL",
  logement: "Construction / logement",
  formation: "Formation professionnelle",
  csg: "CSG",
  crds: "CRDS",
};

const fmtEuro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function euro(v: number) {
  return fmtEuro.format(Math.round(v));
}
