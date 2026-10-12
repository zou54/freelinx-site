"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getStrapiMediaUrl } from "@/lib/strapi";
import type { MediaSlide } from "@/types/strapi";

const AUTO_ADVANCE_MS = 5000;

// Purely additive: renders nothing when no slides are set in Strapi, so the
// homepage hero is visually unchanged until an editor adds images.
export default function HeroSlider({ slides }: { slides: MediaSlide[] }) {
  const validSlides = slides.filter((slide) => getStrapiMediaUrl(slide.image?.url));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (validSlides.length < 2) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % validSlides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [validSlides.length]);

  if (validSlides.length === 0) return null;

  return (
    <div className="mx-auto mt-10 max-w-[980px]">
      <div className="relative overflow-hidden rounded-[20px] shadow-[0_20px_44px_-20px_rgba(11,15,43,0.25)]">
        {validSlides.map((slide, i) => {
          const src = getStrapiMediaUrl(slide.image?.url)!;
          return (
            <Image
              key={src}
              src={src}
              alt={slide.alt || slide.image?.alternativeText || ""}
              width={slide.image?.width ?? 1200}
              height={slide.image?.height ?? 600}
              className={`h-auto w-full object-cover ${i === index ? "block" : "hidden"}`}
              sizes="(min-width: 1024px) 980px, 100vw"
              priority={i === 0}
            />
          );
        })}
      </div>

      {validSlides.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {validSlides.map((slide, i) => (
            <button
              key={`dot-${slide.image?.url ?? i}`}
              type="button"
              aria-label={`Image ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === index ? "w-[22px] bg-red" : "w-2 bg-[#E7DCE0]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
