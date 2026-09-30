"use client";

import { useState } from "react";
import { ChevronDownIcon, ClockIcon, PhoneIcon, PinIcon } from "@/components/icons";
import type { HeaderData } from "@/types/strapi";

export default function Header({ data }: { data: HeaderData }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = data.navLinks ?? [];

  return (
    <>
      <div className="border-b border-[#F5DCE2] bg-white py-3.5">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3.5 px-14">
          <div className="flex items-center gap-2 font-heading text-[19px] font-extrabold text-red">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-red text-[13px] font-extrabold text-white">
              F
            </span>
            {data.logoLabel ?? "Freelinx"}
          </div>
          <div className="hidden items-center lg:flex">
            {data.hours && (
              <div className="flex items-center gap-3 px-[26px]">
                <ClockIcon />
                <div>
                  <div className="text-[12.5px] font-bold leading-[1.4] text-red">{data.hours.label}</div>
                  <div className="mt-0.5 text-[12.5px] leading-[1.4] text-navy-soft">{data.hours.detail}</div>
                </div>
              </div>
            )}
            {data.phone && (
              <div className="flex items-center gap-3 border-l border-[#EFE0E4] px-[26px]">
                <PhoneIcon />
                <div>
                  <div className="text-[12.5px] font-bold leading-[1.4] text-red">{data.phone.label}</div>
                  <div className="mt-0.5 text-[12.5px] leading-[1.4] text-navy-soft">{data.phone.detail}</div>
                </div>
              </div>
            )}
            {data.address && (
              <div className="flex items-center gap-3 border-l border-[#EFE0E4] px-[26px]">
                <PinIcon className="text-red" />
                <div>
                  <div className="text-[12.5px] font-bold leading-[1.4] text-red">{data.address.label}</div>
                  <div className="mt-0.5 text-[12.5px] leading-[1.4] text-navy-soft">{data.address.detail}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-[100] bg-red shadow-[0_12px_30px_-20px_rgba(11,15,43,0.25)]">
        <header className="mx-auto flex min-h-[65px] max-w-[1120px] items-center justify-between gap-6 px-14">
          <nav className="hidden lg:block">
            <ul className="flex flex-shrink-0 items-center gap-7">
              {navLinks.map((link, i) => (
                <li key={link.label} className="flex-shrink-0">
                  <a
                    href={link.href}
                    className={`flex items-center gap-1.5 whitespace-nowrap text-[15px] font-semibold transition-colors duration-150 ${
                      i === 0 ? "text-white" : "text-white/92 hover:text-white/85"
                    }`}
                  >
                    {link.label}
                    {link.hasChevron && <ChevronDownIcon className="opacity-80" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden flex-shrink-0 items-center gap-3.5 lg:flex">
            {data.primaryCtaLabel && (
              <a
                href={data.primaryCtaHref ?? "#"}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-navy px-[26px] py-[13px] text-[13px] font-bold uppercase tracking-[0.6px] text-white transition-all duration-150 hover:-translate-y-px hover:bg-[#161B3D]"
              >
                {data.primaryCtaLabel}
              </a>
            )}
            {data.secondaryCtaLabel && (
              <a
                href={data.secondaryCtaHref ?? "#"}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border-[1.5px] border-white/55 bg-transparent px-[26px] py-[13px] text-[13px] font-bold uppercase tracking-[0.6px] text-white transition-all duration-150 hover:-translate-y-px hover:bg-white/12"
              >
                {data.secondaryCtaLabel}
              </a>
            )}
          </div>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="ml-auto flex h-[38px] w-[38px] flex-shrink-0 flex-col items-center justify-center gap-[5px] border-none bg-transparent p-0 lg:hidden"
          >
            <span
              className={`block h-[2.5px] w-6 rounded-sm bg-white transition-transform duration-200 ${
                mobileOpen ? "translate-y-[7.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2.5px] w-6 rounded-sm bg-white transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2.5px] w-6 rounded-sm bg-white transition-transform duration-200 ${
                mobileOpen ? "-translate-y-[7.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </header>

        {mobileOpen && (
          <div className="absolute inset-x-0 top-full max-h-[calc(100vh-65px)] overflow-y-auto border-t border-white/15 bg-red shadow-[0_20px_30px_-10px_rgba(11,15,43,0.3)]">
            <div className="flex flex-col px-6 pb-7 pt-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between border-b border-white/15 py-4 text-[16px] font-semibold text-white"
                >
                  {link.label}
                  {link.hasChevron && <ChevronDownIcon width={13} height={13} />}
                </a>
              ))}
              <div className="mt-5 flex flex-col gap-3">
                {data.primaryCtaLabel && (
                  <a
                    href={data.primaryCtaHref ?? "#"}
                    className="w-full rounded-lg bg-navy px-[26px] py-[13px] text-center text-[13px] font-bold uppercase tracking-[0.6px] text-white"
                  >
                    {data.primaryCtaLabel}
                  </a>
                )}
                {data.secondaryCtaLabel && (
                  <a
                    href={data.secondaryCtaHref ?? "#"}
                    className="w-full rounded-lg border-[1.5px] border-white/55 bg-transparent px-[26px] py-[13px] text-center text-[13px] font-bold uppercase tracking-[0.6px] text-white"
                  >
                    {data.secondaryCtaLabel}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
