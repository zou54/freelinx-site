const SIMULATION_LABEL_PATTERN = /simul(ation|er)/i;

// Strapi content occasionally ships a CTA with no real link yet (href "#" or
// empty) because an editor hasn't filled it in. Rather than send a button
// whose own label promises a simulation nowhere, fall back to /simulateur by
// label. A caller can also pass its own `fallback` for a specific non-
// simulation CTA (e.g. "Découvrir nos services" -> /portage-salarial)
// without needing a sitewide label match for that one case.
export function resolveCtaHref(label: string | undefined, href: string | undefined, fallback?: string): string {
  if (href && href !== "#") return href;
  if (label && SIMULATION_LABEL_PATTERN.test(label)) return "/simulateur";
  return fallback ?? href ?? "#";
}
