import type { Core } from '@strapi/strapi';
import { homepageSeed } from './seed/homepage';
import { headerSeed } from './seed/header';
import { footerSeed } from './seed/footer';
import { portageCommercialSeed } from './seed/portage-commercial';
import { portageSalarialSeed } from './seed/portage-salarial';
import { quiSommesNousSeed } from './seed/qui-sommes-nous';
import { tarifsSeed } from './seed/tarifs';
import { simulateurSeed } from './seed/simulateur';
import { faqSeed } from './seed/faq';
import { actualitesSeed } from './seed/actualites';
import { articleCategoriesSeed } from './seed/article-categories';
import { articlesSeed } from './seed/articles';

const PUBLIC_READ_PERMISSIONS: Record<string, string[]> = {
  homepage: ['find'],
  header: ['find'],
  footer: ['find'],
  'portage-commercial': ['find'],
  'portage-salarial': ['find'],
  'qui-sommes-nous': ['find'],
  tarifs: ['find'],
  simulateur: ['find'],
  faq: ['find'],
  actualites: ['find'],
  article: ['find', 'findOne'],
  'article-category': ['find', 'findOne'],
};

async function setPublicPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (!publicRole) return;

  for (const [controller, actions] of Object.entries(PUBLIC_READ_PERMISSIONS)) {
    for (const action of actions) {
      const actionId = `api::${controller}.${controller}.${action}`;
      const existing = await strapi.query('plugin::users-permissions.permission').findOne({
        where: { action: actionId, role: publicRole.id },
      });
      if (!existing) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: { action: actionId, role: publicRole.id },
        });
      }
    }
  }
}

function withoutId<T extends { id?: unknown }>(obj: T): Omit<T, 'id'> {
  const { id, ...rest } = obj;
  return rest;
}

function isBrokenHref(href: unknown): boolean {
  return !href || href === '#';
}

// One-time, idempotent correction for CTAs whose href was never filled in
// (still "#") on documents created before this field existed in the seed.
// Strapi requires the full component object on write (no partial merge), so
// each touched component is read in full and written back unchanged except
// for the one href field — this never touches a label or any other content
// an editor may have already customized, and running it again is a no-op
// once every href is fixed.
async function fixHomepageCtaLinks(strapi: Core.Strapi) {
  const doc = await strapi.documents('api::homepage.homepage').findFirst({
    populate: {
      hero: { populate: { stats: true, heroImage: true } },
      stepsSection: { populate: { steps: true, cta: true } },
      benefitsSection: { populate: { benefits: true, cta: true } },
      commitmentsSection: { populate: { commitments: true, cta: true } },
      figuresSection: { populate: { figures: true, cta: true } },
      sectorsSection: { populate: { sectors: true, cta: true } },
      finalCtaSection: { populate: { iconItems: true, statItems: true, checklistItems: true } },
    },
  });

  if (!doc) return;

  const d = doc as Record<string, any>;
  const patch: Record<string, unknown> = {};

  // Hero's "Demander une simulation gratuite" secondary CTA.
  if (d.hero && isBrokenHref(d.hero.secondaryCtaHref)) {
    patch.hero = {
      ...withoutId(d.hero),
      heroImage: d.hero.heroImage ? d.hero.heroImage.id : null,
      stats: (d.hero.stats ?? []).map(withoutId),
      secondaryCtaHref: '/simulateur',
    };
  }

  // Sections whose `cta.primaryHref` was never filled in: simulation-worded
  // CTAs fall back to /simulateur, "Découvrir nos services" to /portage-salarial.
  const ctaSections: Array<{ key: string; itemsKey: string; fallbackHref: string }> = [
    { key: 'stepsSection', itemsKey: 'steps', fallbackHref: '/simulateur' },
    { key: 'benefitsSection', itemsKey: 'benefits', fallbackHref: '/simulateur' },
    { key: 'commitmentsSection', itemsKey: 'commitments', fallbackHref: '/portage-salarial' },
    { key: 'figuresSection', itemsKey: 'figures', fallbackHref: '/simulateur' },
    { key: 'sectorsSection', itemsKey: 'sectors', fallbackHref: '/simulateur' },
  ];

  for (const { key, itemsKey, fallbackHref } of ctaSections) {
    const section = d[key];
    if (!section?.cta || !isBrokenHref(section.cta.primaryHref)) continue;
    patch[key] = {
      ...withoutId(section),
      [itemsKey]: (section[itemsKey] ?? []).map(withoutId),
      cta: { ...withoutId(section.cta), primaryHref: fallbackHref },
    };
  }

  // Final CTA's "DEMANDER UNE SIMULATION" primary button.
  if (d.finalCtaSection && isBrokenHref(d.finalCtaSection.primaryCtaHref)) {
    patch.finalCtaSection = {
      ...withoutId(d.finalCtaSection),
      iconItems: (d.finalCtaSection.iconItems ?? []).map(withoutId),
      statItems: (d.finalCtaSection.statItems ?? []).map(withoutId),
      checklistItems: (d.finalCtaSection.checklistItems ?? []).map(withoutId),
      primaryCtaHref: '/simulateur',
    };
  }

  if (Object.keys(patch).length === 0) return;

  await strapi.documents('api::homepage.homepage').update({
    documentId: d.documentId,
    data: patch,
    status: 'published',
  });
}

// The header's navLinks before this feature existed: 6 flat items, "Nos
// Services" with no children. If the live document's navLinks still match
// this exact shape (labels + hrefs), nothing has been customized since the
// original seed, so it's safe to replace them with the new structure
// (Tarifs moved under "Nos Services", "Actualités" added). Any deviation —
// a renamed link, a different href, an extra item — means an editor already
// touched this, so the migration backs off entirely rather than guessing.
const OLD_HEADER_NAV_SHAPE = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos Services', href: '#' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Qui sommes nous ?', href: '/qui-sommes-nous' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/#contact' },
];

async function migrateHeaderNavStructure(strapi: Core.Strapi) {
  const doc = await strapi.documents('api::header.header').findFirst({
    populate: { navLinks: { populate: { children: true } } },
  });
  if (!doc) return;

  const d = doc as Record<string, any>;
  const current = (d.navLinks ?? []) as Array<{ label: string; href: string; children?: unknown[] }>;

  const matchesOldShape =
    current.length === OLD_HEADER_NAV_SHAPE.length &&
    current.every(
      (link, i) =>
        link.label === OLD_HEADER_NAV_SHAPE[i].label &&
        link.href === OLD_HEADER_NAV_SHAPE[i].href &&
        (link.children ?? []).length === 0
    );

  if (!matchesOldShape) return;

  await strapi.documents('api::header.header').update({
    documentId: d.documentId,
    data: { navLinks: headerSeed.navLinks },
  });
}

// Purely additive: appends an "Actualités" resource link if it's missing,
// without touching anything else — safe regardless of how much an editor
// has already customized the footer's other links or labels.
async function migrateFooterActualitesLink(strapi: Core.Strapi) {
  const doc = await strapi.documents('api::footer.footer').findFirst({
    populate: { resourceLinks: true },
  });
  if (!doc) return;

  const d = doc as Record<string, any>;
  const resourceLinks = (d.resourceLinks ?? []) as Array<{ label: string; href: string }>;

  if (resourceLinks.some((link) => link.label === 'Actualités')) return;

  await strapi.documents('api::footer.footer').update({
    documentId: d.documentId,
    data: {
      resourceLinks: [...resourceLinks.map((link) => withoutId(link as any)), { label: 'Actualités', href: '/actualites' }],
    } as any,
  });
}

type SingleTypeUid =
  | 'api::homepage.homepage'
  | 'api::header.header'
  | 'api::footer.footer'
  | 'api::portage-commercial.portage-commercial'
  | 'api::portage-salarial.portage-salarial'
  | 'api::qui-sommes-nous.qui-sommes-nous'
  | 'api::tarifs.tarifs'
  | 'api::simulateur.simulateur'
  | 'api::faq.faq'
  | 'api::actualites.actualites';

async function seedSingleType(
  strapi: Core.Strapi,
  uid: SingleTypeUid,
  data: Record<string, unknown>,
  { published }: { published: boolean }
) {
  const existing = await strapi.documents(uid).findFirst();
  if (existing) return;

  await strapi.documents(uid).create({
    data,
    ...(published ? { status: 'published' as const } : {}),
  });
}

// Collection types have no single "the" document to check like
// seedSingleType does, so emptiness is the idempotency signal: only seed
// when the collection has never been touched at all.
async function seedCollectionIfEmpty(
  strapi: Core.Strapi,
  uid: 'api::article-category.article-category' | 'api::article.article',
  items: Record<string, unknown>[]
) {
  const existing = await strapi.documents(uid).findMany({ limit: 1 });
  if (existing.length > 0) return;

  const created: Record<string, any>[] = [];
  for (const item of items) {
    const doc = await strapi.documents(uid).create({ data: item as any, status: 'published' });
    created.push(doc as Record<string, any>);
  }
  return created;
}

async function seedArticleCategoriesAndArticles(strapi: Core.Strapi) {
  await seedCollectionIfEmpty(strapi, 'api::article-category.article-category', articleCategoriesSeed);

  const existingArticles = await strapi.documents('api::article.article').findMany({ limit: 1 });
  if (existingArticles.length > 0) return;

  const categories = await strapi.documents('api::article-category.article-category').findMany({
    limit: articleCategoriesSeed.length,
  });
  const categoryIdBySlug = new Map(categories.map((c: any) => [c.slug, c.id]));

  for (const { categorySlug, ...article } of articlesSeed) {
    const categoryId = categoryIdBySlug.get(categorySlug);
    await strapi.documents('api::article.article').create({
      data: { ...article, category: categoryId ?? null } as any,
      status: 'published',
    });
  }
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // No global "already ran" gate here on purpose: setPublicPermissions and
    // seedSingleType are each independently idempotent (they check for an
    // existing permission/document before creating one), so it's safe and
    // cheap to re-run this on every boot. A global gate previously caused
    // newly-added single types to silently never get seeded/permissioned
    // once the flag had been set by an earlier deploy.
    await setPublicPermissions(strapi);

    await seedSingleType(strapi, 'api::homepage.homepage', homepageSeed, { published: true });
    await seedSingleType(strapi, 'api::header.header', headerSeed, { published: false });
    await seedSingleType(strapi, 'api::footer.footer', footerSeed, { published: false });
    await seedSingleType(
      strapi,
      'api::portage-commercial.portage-commercial',
      portageCommercialSeed,
      { published: true }
    );
    await seedSingleType(
      strapi,
      'api::portage-salarial.portage-salarial',
      portageSalarialSeed,
      { published: true }
    );
    await seedSingleType(strapi, 'api::qui-sommes-nous.qui-sommes-nous', quiSommesNousSeed, {
      published: true,
    });
    await seedSingleType(strapi, 'api::tarifs.tarifs', tarifsSeed, { published: true });
    await seedSingleType(strapi, 'api::simulateur.simulateur', simulateurSeed, {
      published: true,
    });
    await seedSingleType(strapi, 'api::faq.faq', faqSeed, { published: true });
    await seedSingleType(strapi, 'api::actualites.actualites', actualitesSeed, { published: true });
    await seedArticleCategoriesAndArticles(strapi);

    await fixHomepageCtaLinks(strapi);
    await migrateHeaderNavStructure(strapi);
    await migrateFooterActualitesLink(strapi);
  },
};
