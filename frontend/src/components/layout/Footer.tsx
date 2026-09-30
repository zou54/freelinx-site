import type { FooterData } from "@/types/strapi";

const SOCIAL_SVGS: Record<string, React.ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7M7 7v.01M12 17v-4.5a2.5 2.5 0 015 0V17M12 10v7" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
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
    <footer className="relative mt-[60px] overflow-hidden bg-navy text-[#C7C9DA]">
      <div className="h-1 bg-gradient-to-r from-red via-[#FF7A9C] to-red" />
      <div className="mx-auto max-w-[1120px] px-6 pt-[50px] sm:px-14">
        <div className="grid grid-cols-1 gap-10 border-b border-white/8 pb-[46px] sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-4 flex items-center gap-0.5 font-heading text-[23px] font-extrabold tracking-[-0.5px] text-white">
              {data.logoLabel ?? "freelinx"}
            </div>
            {data.description && (
              <p className="max-w-[280px] text-[13.5px] leading-[1.7] text-[#9A9DB8]">{data.description}</p>
            )}
            <div className="mt-5 flex gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/6 text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-red"
                >
                  {SOCIAL_SVGS[link.label] ?? null}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="relative mb-2.5 pb-3.5 font-heading text-[14.5px] font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-7 after:rounded-full after:bg-red">
              {data.navTitle ?? "Navigation"}
            </h5>
            <ul className="mt-2 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13.5px] text-[#9A9DB8] transition-colors duration-150 hover:text-[#FF7A9C]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="relative mb-2.5 pb-3.5 font-heading text-[14.5px] font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-7 after:rounded-full after:bg-red">
              {data.resourcesTitle ?? "Ressources"}
            </h5>
            <ul className="mt-2 flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13.5px] text-[#9A9DB8] transition-colors duration-150 hover:text-[#FF7A9C]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="relative mb-2.5 pb-3.5 font-heading text-[14.5px] font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-7 after:rounded-full after:bg-red">
              {data.contactTitle ?? "Contact"}
            </h5>
            <ul className="mt-2 flex flex-col gap-2.5">
              {data.email && (
                <li className="flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-[#9A9DB8]">
                  <svg className="mt-0.5 flex-shrink-0 text-red" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  {data.email}
                </li>
              )}
              {data.phone && (
                <li className="flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-[#9A9DB8]">
                  <svg className="mt-0.5 flex-shrink-0 text-red" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.18 2 2 0 014.11 2h3" />
                  </svg>
                  {data.phone}
                </li>
              )}
              {data.city && (
                <li className="flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-[#9A9DB8]">
                  <svg className="mt-0.5 flex-shrink-0 text-red" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {data.city}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 py-[22px] text-[12.5px] text-[#7C7F9C]">
          {data.copyrightText && <span>{data.copyrightText}</span>}
          <div className="flex gap-[22px]">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors duration-150 hover:text-[#FF7A9C]">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
