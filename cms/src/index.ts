import type { Core } from '@strapi/strapi';
import { homepageSeed } from './seed/homepage';
import { headerSeed } from './seed/header';
import { footerSeed } from './seed/footer';
import { portageCommercialSeed } from './seed/portage-commercial';
import { portageSalarialSeed } from './seed/portage-salarial';
import { quiSommesNousSeed } from './seed/qui-sommes-nous';
import { tarifsSeed } from './seed/tarifs';
import { simulateurSeed } from './seed/simulateur';

const PUBLIC_READ_PERMISSIONS: Record<string, string[]> = {
  homepage: ['find'],
  header: ['find'],
  footer: ['find'],
  'portage-commercial': ['find'],
  'portage-salarial': ['find'],
  'qui-sommes-nous': ['find'],
  tarifs: ['find'],
  simulateur: ['find'],
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

type SingleTypeUid =
  | 'api::homepage.homepage'
  | 'api::header.header'
  | 'api::footer.footer'
  | 'api::portage-commercial.portage-commercial'
  | 'api::portage-salarial.portage-salarial'
  | 'api::qui-sommes-nous.qui-sommes-nous'
  | 'api::tarifs.tarifs'
  | 'api::simulateur.simulateur';

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
    const pluginStore = strapi.store({
      environment: strapi.config.environment,
      type: 'type',
      name: 'freelinx-setup',
    });

    const alreadySetup = await pluginStore.get({ key: 'initHasRun' });
    if (alreadySetup) return;

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

    await pluginStore.set({ key: 'initHasRun', value: true });
  },
};
