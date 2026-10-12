import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ArticleCard from "@/components/articles/ArticleCard";
import ArticleContent from "@/components/articles/ArticleContent";
import CtaBannerFromData from "@/components/ui/CtaBannerFromData";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { getActualites, DEFAULT_ACTUALITES } from "@/lib/content/actualites";
import {
  getAllArticleSlugs,
  getArticleBySlug,
  getRelatedArticles,
  estimateReadingTimeLabel,
  formatArticleDate,
} from "@/lib/articles";

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const title = article.seo?.title || `${article.title} — Freelinx`;
  const description = article.seo?.description || article.excerpt;
  const coverSrc = getStrapiMediaUrl(article.coverImage?.url);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: coverSrc ? [{ url: coverSrc }] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  const [actualites, relatedArticles] = await Promise.all([
    getActualites(),
    getRelatedArticles(article.category?.slug, article.slug),
  ]);

  const data = actualites ?? DEFAULT_ACTUALITES;
  const coverSrc = getStrapiMediaUrl(article.coverImage?.url);

  return (
    <main>
      <section className="bg-gradient-to-r from-pink-pale-2 via-pink-pale-2/90 to-white pb-12 pt-16">
        <div className="mx-auto max-w-[760px] px-6 text-center">
          {article.category && (
            <span className="mb-3.5 inline-flex items-center rounded-full bg-pink-pale px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.4px] text-red">
              {article.category.name}
            </span>
          )}
          <h1 className="mb-4 text-[30px] font-bold leading-[1.25] text-navy sm:text-[34px]">{article.title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-[13px] text-gray-text">
            <span>{article.author || "Équipe Freelinx"}</span>
            <span aria-hidden>·</span>
            <span>{formatArticleDate(article.publishedAt)}</span>
            <span aria-hidden>·</span>
            <span>{estimateReadingTimeLabel(article)}</span>
          </div>
        </div>
      </section>

      {coverSrc && (
        <div className="mx-auto -mt-6 max-w-[900px] px-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] shadow-[0_20px_44px_-20px_rgba(11,15,43,0.25)]">
            <Image
              src={coverSrc}
              alt={article.coverImage?.alternativeText || article.title}
              fill
              priority
              className="object-cover"
              sizes="900px"
            />
          </div>
        </div>
      )}

      <section className="section-y">
        <ArticleContent content={article.content} />
      </section>

      {relatedArticles.length > 0 && (
        <section className="mx-auto max-w-[1120px] px-14 pb-[90px]">
          <h2 className="mb-7 text-center text-[22px] font-bold text-navy">Articles similaires</h2>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related) => (
              <ArticleCard key={related.documentId} article={related} />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1120px] px-14 pb-[90px]">
        <div className="mb-10 text-center">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-navy transition-colors duration-150 hover:text-red"
          >
            ← Retour aux actualités
          </Link>
        </div>
        <CtaBannerFromData data={data.cta} />
      </section>
    </main>
  );
}
