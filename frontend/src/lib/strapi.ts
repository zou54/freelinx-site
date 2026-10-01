import qs from "qs";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

// How long a page can serve cached Strapi content before revalidating, in seconds.
const REVALIDATE_SECONDS = 60;

// Exported so page-specific content modules (frontend/src/lib/content/*.ts)
// can fetch their own single type without this file needing a getter per page.
export async function fetchStrapi<T>(
  path: string,
  populate: Record<string, unknown> | "*"
): Promise<T | null> {
  const query = qs.stringify({ populate }, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${STRAPI_URL}/api/${path}?${query}`, {
      headers: STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : {},
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) return null;

    const json = await res.json();
    return (json?.data as T) ?? null;
  } catch {
    // CMS unreachable (offline, network issue, not started yet) — caller falls
    // back to the default content so the site never renders empty or 500s.
    return null;
  }
}

const HOMEPAGE_POPULATE = {
  hero: { populate: { stats: true } },
  whySection: { populate: { features: true } },
  stepsSection: { populate: { steps: true, cta: true } },
  benefitsSection: { populate: { benefits: true, cta: true } },
  commitmentsSection: { populate: { commitments: true, cta: true } },
  figuresSection: { populate: { figures: true, cta: true } },
  sectorsSection: { populate: { sectors: true, cta: true } },
  testimonialsSection: { populate: { testimonials: true } },
  faqSection: { populate: { faqs: true, cta: true } },
  finalCtaSection: { populate: { iconItems: true, statItems: true } },
};

const HEADER_POPULATE = {
  hours: true,
  phone: true,
  address: true,
  navLinks: true,
};

const FOOTER_POPULATE = {
  socialLinks: true,
  navLinks: true,
  resourceLinks: true,
  legalLinks: true,
};

export function getHomepage<T>() {
  return fetchStrapi<T>("homepage", HOMEPAGE_POPULATE);
}

export function getHeader<T>() {
  return fetchStrapi<T>("header", HEADER_POPULATE);
}

export function getFooter<T>() {
  return fetchStrapi<T>("footer", FOOTER_POPULATE);
}
