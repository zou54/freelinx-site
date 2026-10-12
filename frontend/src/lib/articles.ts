import type { BlocksContent } from "@strapi/blocks-react-renderer";
import { fetchStrapiCollection } from "@/lib/strapi";
import type { MediaData } from "@/types/strapi";

export const ARTICLES_PER_PAGE = 9;

export interface ArticleCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

export interface ArticleSummary {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: BlocksContent;
  coverImage?: MediaData | null;
  category?: ArticleCategory | null;
  author?: string;
  readingTime?: number | null;
  publishedAt: string;
}

export interface ArticleDetail extends ArticleSummary {
  content: BlocksContent;
  seo?: { title?: string; description?: string } | null;
}

// `content` is a "blocks" field — scalar-like, not a relation/media/component
// — so it's always returned and Strapi rejects explicitly populating it.
const ARTICLE_SUMMARY_POPULATE = {
  coverImage: true,
  category: true,
};

export async function getArticles({
  page = 1,
  categorySlug,
}: { page?: number; categorySlug?: string } = {}) {
  const { data, pagination } = await fetchStrapiCollection<ArticleSummary>("articles", {
    populate: ARTICLE_SUMMARY_POPULATE,
    sort: "publishedAt:desc",
    pagination: { page, pageSize: ARTICLES_PER_PAGE },
    ...(categorySlug ? { filters: { category: { slug: { $eq: categorySlug } } } } : {}),
  });

  return { articles: data, pagination };
}

export async function getCategories() {
  const { data } = await fetchStrapiCollection<ArticleCategory>("article-categories", {
    sort: "name:asc",
    pagination: { pageSize: 100 },
  });
  return data;
}

export async function getArticleBySlug(slug: string): Promise<ArticleDetail | null> {
  const { data } = await fetchStrapiCollection<ArticleDetail>("articles", {
    filters: { slug: { $eq: slug } },
    populate: { coverImage: true, category: true, seo: true },
    pagination: { pageSize: 1 },
  });
  return data[0] ?? null;
}

export async function getRelatedArticles(categorySlug: string | undefined, excludeSlug: string, limit = 3) {
  if (!categorySlug) return [];
  const { data } = await fetchStrapiCollection<ArticleSummary>("articles", {
    populate: ARTICLE_SUMMARY_POPULATE,
    sort: "publishedAt:desc",
    filters: {
      category: { slug: { $eq: categorySlug } },
      slug: { $ne: excludeSlug },
    },
    pagination: { pageSize: limit },
  });
  return data;
}

export async function getAllArticleSlugs() {
  const { data } = await fetchStrapiCollection<{ slug: string }>("articles", {
    fields: ["slug"],
    pagination: { pageSize: 100 },
  });
  return data.map((a) => a.slug);
}

export function estimateReadingTime(content: BlocksContent): number {
  const wordCount = content.reduce((count, node) => {
    const text = JSON.stringify(node);
    return count + text.split(/\s+/).length;
  }, 0);
  return Math.max(1, Math.round(wordCount / 200));
}

export function estimateReadingTimeLabel(article: { readingTime?: number | null; content?: BlocksContent }): string {
  const minutes = article.readingTime ?? (article.content ? estimateReadingTime(article.content) : null);
  if (!minutes) return "Lecture rapide";
  return `${minutes} min de lecture`;
}

const DATE_FORMATTER = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export function formatArticleDate(isoDate: string): string {
  return DATE_FORMATTER.format(new Date(isoDate));
}
