# Freelinx

Site marketing Freelinx (portage salarial) : front en Next.js, contenu géré via Strapi (CMS headless self-hosted).

## Structure du repo

```
frontend/           Next.js (App Router, Tailwind v4) — le site public
cms/                Strapi — administration du contenu (textes, tarifs, FAQ, navigation…)
design-reference/   Maquettes HTML statiques d'origine, gardées comme référence de design
```

## Lancer le projet en local

### 1. CMS (Strapi)

```bash
cd cms
cp .env.example .env   # première fois seulement
npm install
npm run develop         # http://localhost:1337/admin — SQLite en dev
```

Ou via Docker (Postgres inclus) :

```bash
cd cms
docker compose up
```

Au premier démarrage, un script de seed crée automatiquement un compte et le contenu de la page d'accueil (textes, FAQ, chiffres…) repris du design actuel, et ouvre l'accès public en lecture sur les contenus du site. Aucune saisie manuelle n'est nécessaire pour retrouver le contenu existant.

### 2. Frontend (Next.js)

```bash
cd frontend
cp .env.local.example .env.local   # première fois seulement
npm install
npm run dev              # http://localhost:3000
```

Le frontend lit son contenu sur `NEXT_PUBLIC_STRAPI_URL` (par défaut `http://localhost:1337`). S'il ne peut pas joindre Strapi (CMS éteint, réseau indisponible), il retombe sur un contenu par défaut intégré au code pour ne jamais afficher une page vide ou casser le build.

## État de la migration

- **Page d'accueil** : entièrement pilotée par Strapi (hero, sections, FAQ, chiffres, témoignages, header, footer).
- **Autres pages** (portage commercial, portage salarial, qui sommes-nous, tarifs, simulateur) : migrées en routes Next.js avec le même design, mais contenu encore statique — à brancher sur Strapi dans une prochaine itération.
- **Simulateur** : la logique de calcul du salaire reste en TypeScript côté frontend (pas pilotée par le CMS).
