"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { resolveIcon } from "@/lib/icon-map";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { HERO_OVERLAY_GRADIENT_CLASS } from "@/lib/hero-overlay";
import type { HeroData } from "@/types/strapi";

const AUTO_ADVANCE_MS = 5000;

export default function Hero({ data }: { data: HeroData }) {
  const stats = data.stats ?? [];
  const slides = (data.slides ?? []).filter((slide) => getStrapiMediaUrl(slide.image?.url));
  const hasSlides = slides.length > 0;
  const singleImageSrc = !hasSlides ? getStrapiMediaUrl(data.heroImage?.url) : null;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-pale-2 to-white to-78% pt-[72px] pb-10">
      {(hasSlides || singleImageSrc) && (
        <div className="absolute inset-0 z-0">
          {hasSlides
            ? slides.map((slide, i) => {
                const src = getStrapiMediaUrl(slide.image?.url)!;
                return (
                  <Image
                    key={src}
                    src={src}
                    alt={slide.alt || slide.image?.alternativeText || ""}
                    fill
                    priority={i === 0}
                    className={`object-cover transition-opacity duration-1000 ${
                      i === index ? "opacity-100" : "opacity-0"
                    }`}
                    sizes="100vw"
                  />
                );
              })
            : (
                <Image
                  src={singleImageSrc!}
                  alt={data.heroImageAlt || data.heroImage?.alternativeText || ""}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              )}
          <div className={`absolute inset-0 ${HERO_OVERLAY_GRADIENT_CLASS}`} />
        </div>
      )}

      <div
        aria-hidden
        className="pointer-events-none absolute -top-[120px] -right-[160px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(232,21,79,0.10)_0%,rgba(232,21,79,0)_70%)]"
      />

      <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center px-14 text-center">
        {data.badge && (
          <span className="mb-[22px] inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-red bg-white px-[18px] py-[7px] text-[12.5px] font-bold tracking-[0.6px] text-red">
            {data.badge}
          </span>
        )}

        <h1 className="mb-[18px] text-[32px] leading-[1.15] font-bold tracking-[-0.5px] text-navy lg:text-[44px]">
          {data.title}
        </h1>

        {data.highlight && (
          <p className="mb-3 text-[17px] font-semibold text-red">{data.highlight}</p>
        )}

        {data.description && (
          <p className="mx-auto mb-3.5 max-w-[560px] text-[16px] leading-[1.65] text-gray-text">
            {data.description}
          </p>
        )}

        {data.bannerText && (
          <div className="my-2.5 mb-[30px] inline-flex items-center gap-2.5 rounded-full bg-pink-pale px-[22px] py-2.5 text-[15px] font-bold text-navy">
            {data.bannerText} <span className="font-extrabold text-red">→</span> {data.bannerHighlight}
          </div>
        )}

        <div className="mb-11 flex w-full flex-col gap-3.5 lg:w-auto lg:flex-row">
          {data.primaryCtaLabel && (
            <a
              href={data.primaryCtaHref ?? "#"}
              className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-transparent bg-red px-[22px] py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.55)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark"
            >
              {data.primaryCtaLabel}
            </a>
          )}
          {data.secondaryCtaLabel && (
            <a
              href={data.secondaryCtaHref ?? "#"}
              className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#E3E4EA] bg-white px-[22px] py-3 text-[14.5px] font-semibold text-navy transition-all duration-150 hover:-translate-y-px hover:border-red hover:text-red"
            >
              {data.secondaryCtaLabel}
            </a>
          )}
        </div>

        <div className="mb-14 -mt-1 flex gap-2">
          {hasSlides
            ? slides.map((slide, i) => (
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
              ))
            : (
                <>
                  <span className="h-2 w-[22px] rounded-full bg-red" />
                  <span className="h-2 w-2 rounded-full bg-[#E7DCE0]" />
                  <span className="h-2 w-2 rounded-full bg-[#E7DCE0]" />
                </>
              )}
        </div>

        <div className="mx-auto grid max-w-[980px] grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = resolveIcon(stat.icon);
            return (
              <div key={stat.label} className="flex flex-col items-center gap-3.5 px-2.5 py-1.5 text-center">
                <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-pink-pale">
                  <Icon />
                </div>
                <p className="text-[14px] font-semibold leading-[1.4] text-navy">
                  {stat.label}
                  <br />
                  {stat.sublabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
