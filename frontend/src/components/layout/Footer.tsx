import type { FooterData } from "@/types/strapi";

const SOCIAL_SVGS: Record<string, React.ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7M7 7v.01M12 17v-4.5a2.5 2.5 0 015 0V17M12 10v7" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M15 8h2V4h-2a4 4 0 00-4 4v2H9v4h2v6h4v-6h2.5l.5-4H15V8z" />
    </svg>
  ),
};

export default function Footer({ data }: { data: FooterData }) {
  const socialLinks = data.socialLinks ?? [];
  const navLinks = data.navLinks ?? [];
  const resourceLinks = data.resourceLinks ?? [];
  const legalLinks = data.legalLinks ?? [];

  return (
    <footer className="relative mt-5 overflow-hidden bg-navy text-white">
      <div className="h-1 bg-gradient-to-r from-red via-[#FF7A9C] to-red" />
      <div className="mx-auto max-w-[1120px] px-6 pt-16 sm:px-14">
        <div className="grid grid-cols-1 gap-10 border-b border-white/8 pb-[46px] sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-4 flex items-center gap-2 font-heading text-[23px] font-extrabold tracking-[-0.5px] text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-red text-[15px] font-extrabold text-white">
                F
              </span>
              {data.logoLabel ?? "Freelinx"}
            </div>
            {data.description && (
              <p className="max-w-[280px] text-[13px] leading-[1.75] text-white/60">{data.description}</p>
            )}
            <div className="mt-5 flex gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white transition-all duration-150 hover:bg-red"
                >
                  {SOCIAL_SVGS[link.label] ?? null}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-5 font-heading text-[13px] font-extrabold uppercase tracking-[0.5px] text-white">
              {data.navTitle ?? "Nos services"}
            </h5>
            <ul className="mt-2 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13.5px] text-white/65 transition-colors duration-150 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-5 font-heading text-[13px] font-extrabold uppercase tracking-[0.5px] text-white">
              {data.resourcesTitle ?? "L'entreprise"}
            </h5>
            <ul className="mt-2 flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13.5px] text-white/65 transition-colors duration-150 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-5 font-heading text-[13px] font-extrabold uppercase tracking-[0.5px] text-white">
              {data.contactTitle ?? "Contact"}
            </h5>
            <ul className="mt-2 flex flex-col gap-2.5">
              {data.address && (
                <li className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-white/65">
                  <svg className="mt-0.5 flex-shrink-0 text-red" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {data.address}
                </li>
              )}
              {data.phone && (
                <li className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-white/65">
                  <svg className="mt-0.5 flex-shrink-0 text-red" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.18 2 2 0 014.11 2h3" />
                  </svg>
                  {data.phone}
                </li>
              )}
              {data.email && (
                <li className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-white/65">
                  <svg className="mt-0.5 flex-shrink-0 text-red" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  {data.email}
                </li>
              )}
              {data.hours && (
                <li className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-white/65">
                  <svg className="mt-0.5 flex-shrink-0 text-red" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.5 2" />
                  </svg>
                  {data.hours}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/12 py-[22px] text-[12.5px] text-white/50">
          {data.copyrightText && <span>{data.copyrightText}</span>}
          <div className="flex flex-wrap gap-[22px]">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors duration-150 hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
