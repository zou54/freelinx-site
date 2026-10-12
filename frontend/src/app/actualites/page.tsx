import type { Metadata } from "next";
import ActualitesHero from "@/components/sections/ActualitesHero";
import ArticleCard from "@/components/articles/ArticleCard";
import CategoryFilterChips from "@/components/articles/CategoryFilterChips";
import Pagination from "@/components/articles/Pagination";
import CtaBannerFromData from "@/components/ui/CtaBannerFromData";
import { getActualites, DEFAULT_ACTUALITES } from "@/lib/content/actualites";
import { getArticles, getCategories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Actualités — Freelinx",
  description:
    "Conseils, décryptages et retours d'expérience sur le portage salarial et le travail indépendant.",
};

export default async function ActualitesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const { page: pageParam, category: categorySlug } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);

  const [actualites, categories, { articles, pagination }] = await Promise.all([
    getActualites(),
    getCategories(),
    getArticles({ page, categorySlug }),
  ]);

  const data = actualites ?? DEFAULT_ACTUALITES;

  return (
    <main>
      <ActualitesHero data={data.heroSection} />

      <section className="mx-auto max-w-[1120px] px-14 section-y">
        <CategoryFilterChips categories={categories} activeSlug={categorySlug} />

        {articles.length === 0 ? (
          <p className="mx-auto max-w-[480px] py-[60px] text-center text-[14.5px] leading-[1.7] text-gray-text">
            Aucun article pour le moment. Revenez bientôt pour découvrir nos prochaines publications.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.documentId} article={article} />
            ))}
          </div>
        )}

        {pagination && <Pagination pagination={pagination} categorySlug={categorySlug} />}
      </section>

      <section className="mx-auto max-w-[1120px] px-14 pb-[90px]">
        <CtaBannerFromData data={data.cta} />
      </section>
    </main>
  );
}
