import Image from "next/image";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { estimateReadingTimeLabel, formatArticleDate } from "@/lib/articles";
import type { ArticleSummary } from "@/lib/articles";

export default function ArticleCard({ article }: { article: ArticleSummary }) {
  const coverSrc = getStrapiMediaUrl(article.coverImage?.url);

  return (
    <article className="flex flex-col overflow-hidden rounded-[20px] border border-[#F0F0F3] bg-white shadow-[0_4px_24px_-12px_rgba(11,15,43,0.08)]">
      <div className="relative aspect-[16/10] w-full bg-pink-pale">
        {coverSrc && (
          <Image
            src={coverSrc}
            alt={article.coverImage?.alternativeText || article.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 360px, 100vw"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-[22px]">
        {article.category && (
          <span className="mb-2.5 inline-flex w-fit items-center rounded-full bg-pink-pale px-3 py-1 text-[11px] font-bold uppercase tracking-[0.4px] text-red">
            {article.category.name}
          </span>
        )}
        <h3 className="mb-2 text-[17px] font-bold leading-[1.35] text-navy">{article.title}</h3>
        {article.excerpt && (
          <p className="mb-4 flex-1 text-[13.5px] leading-[1.6] text-gray-text">{article.excerpt}</p>
        )}
        <div className="mb-3 flex items-center gap-2.5 text-[12px] text-gray-text">
          <span>{formatArticleDate(article.publishedAt)}</span>
          <span aria-hidden>·</span>
          <span>{estimateReadingTimeLabel(article)}</span>
        </div>
        <a
          href={`/actualites/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-red transition-colors duration-150 hover:text-red-dark"
        >
          Lire l&apos;article →
        </a>
      </div>
    </article>
  );
}
