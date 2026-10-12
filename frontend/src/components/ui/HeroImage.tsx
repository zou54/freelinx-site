import Image from "next/image";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { HERO_OVERLAY_GRADIENT_CLASS } from "@/lib/hero-overlay";
import type { MediaData } from "@/types/strapi";

// Renders the hero's background photo (full-bleed, behind the text) plus its
// readability overlay. Purely additive: renders nothing when no image is set
// in Strapi, so existing hero layouts are visually unchanged until an editor
// uploads one. Place as the first child of a `relative overflow-hidden`
// section, with the text content wrapped in a sibling `relative z-10` div.
export default function HeroImage({ image, alt }: { image?: MediaData | null; alt?: string }) {
  const src = getStrapiMediaUrl(image?.url);
  if (!src) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={src}
        alt={alt || image?.alternativeText || ""}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${HERO_OVERLAY_GRADIENT_CLASS}`} />
    </div>
  );
}
