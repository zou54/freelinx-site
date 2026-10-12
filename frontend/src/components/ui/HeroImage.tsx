import Image from "next/image";
import { getStrapiMediaUrl } from "@/lib/strapi";
import type { MediaData } from "@/types/strapi";

// Purely additive: renders nothing (and takes up no space) when no image is
// set in Strapi, so existing hero layouts are visually unchanged until an
// editor uploads one.
export default function HeroImage({
  image,
  alt,
  className = "",
}: {
  image?: MediaData | null;
  alt?: string;
  className?: string;
}) {
  const src = getStrapiMediaUrl(image?.url);
  if (!src) return null;

  return (
    <div
      className={`relative mt-8 overflow-hidden rounded-[20px] shadow-[0_20px_44px_-20px_rgba(11,15,43,0.25)] ${className}`}
    >
      <Image
        src={src}
        alt={alt || image?.alternativeText || ""}
        width={image?.width ?? 1200}
        height={image?.height ?? 600}
        className="h-auto w-full object-cover"
        sizes="(min-width: 1024px) 1120px, 100vw"
      />
    </div>
  );
}
