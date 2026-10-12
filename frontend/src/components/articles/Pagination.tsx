import type { StrapiPagination } from "@/lib/strapi";

function pageHref(page: number, categorySlug?: string) {
  const params = new URLSearchParams();
  if (categorySlug) params.set("category", categorySlug);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return `/actualites${qs ? `?${qs}` : ""}`;
}

export default function Pagination({
  pagination,
  categorySlug,
}: {
  pagination: StrapiPagination;
  categorySlug?: string;
}) {
  if (pagination.pageCount <= 1) return null;

  const pages = Array.from({ length: pagination.pageCount }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
      {pagination.page > 1 && (
        <a
          href={pageHref(pagination.page - 1, categorySlug)}
          className="inline-flex h-10 items-center rounded-full border-[1.5px] border-[#E3E4EA] px-4 text-[13.5px] font-semibold text-navy transition-colors duration-150 hover:border-red hover:text-red"
        >
          ← Précédent
        </a>
      )}
      <div className="flex items-center gap-1.5">
        {pages.map((p) => (
          <a
            key={p}
            href={pageHref(p, categorySlug)}
            aria-current={p === pagination.page ? "page" : undefined}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-[13.5px] font-semibold transition-colors duration-150 ${
              p === pagination.page ? "bg-red text-white" : "text-navy hover:bg-pink-pale"
            }`}
          >
            {p}
          </a>
        ))}
      </div>
      {pagination.page < pagination.pageCount && (
        <a
          href={pageHref(pagination.page + 1, categorySlug)}
          className="inline-flex h-10 items-center rounded-full border-[1.5px] border-[#E3E4EA] px-4 text-[13.5px] font-semibold text-navy transition-colors duration-150 hover:border-red hover:text-red"
        >
          Suivant →
        </a>
      )}
    </nav>
  );
}
