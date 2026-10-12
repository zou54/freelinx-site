import Link from "next/link";
import type { ArticleCategory } from "@/lib/articles";

export default function CategoryFilterChips({
  categories,
  activeSlug,
}: {
  categories: ArticleCategory[];
  activeSlug?: string;
}) {
  if (categories.length === 0) return null;

  const chipClass = (active: boolean) =>
    `inline-flex items-center rounded-full border-[1.5px] px-[18px] py-2 text-[13px] font-semibold transition-all duration-150 ${
      active
        ? "border-red bg-red text-white"
        : "border-[#E3E4EA] bg-white text-navy hover:border-red hover:text-red"
    }`;

  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2.5">
      <Link href="/actualites" className={chipClass(!activeSlug)}>
        Tous les articles
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/actualites?category=${category.slug}`}
          className={chipClass(activeSlug === category.slug)}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
