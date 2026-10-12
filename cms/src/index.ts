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

type SingleTypeUid =
  | 'api::homepage.homepage'
  | 'api::header.header'
  | 'api::footer.footer'
  | 'api::portage-commercial.portage-commercial'
  | 'api::portage-salarial.portage-salarial'
  | 'api::qui-sommes-nous.qui-sommes-nous'
  | 'api::tarifs.tarifs'
  | 'api::simulateur.simulateur'
  | 'api::faq.faq';

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

    await fixHomepageCtaLinks(strapi);
  },
};
