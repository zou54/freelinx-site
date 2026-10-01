import type { SVGProps } from "react";

// New icons extracted from the portage-salarial page's inline SVGs (simple
// 24x24 stroke-outline style, distinct from the filled-artwork icons in
// ./index.tsx). Kept in a separate file so this page's work doesn't touch
// the shared icon barrel; merged into the icon-name resolver afterward.

export function PortageSalarialShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 2l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function PortageSalarialShieldOutlineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 2l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5l8-3z" />
    </svg>
  );
}

export function PortageSalarialDocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  );
}

export function PortageSalarialDiamondIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14 3l7 7-8 8-7-7 8-8z" />
      <path d="M6 18l-3 3" />
    </svg>
  );
}

export function PortageSalarialPersonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1" />
    </svg>
  );
}

export function PortageSalarialBriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
    </svg>
  );
}

export function PortageSalarialPercentCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 9a3.5 3.5 0 00-3-1.7c-2 0-3.5 1.7-3.5 4.7s1.5 4.7 3.5 4.7a3.5 3.5 0 003-1.7" />
    </svg>
  );
}

export function PortageSalarialCoinHandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M7 11v9M7 11a3 3 0 013-3h6.5a1.5 1.5 0 010 3H12M7 11H4a1 1 0 00-1 1v6a1 1 0 001 1h3" />
    </svg>
  );
}

export function PortageSalarialMagnifierIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.8-4.8" />
    </svg>
  );
}

export function PortageSalarialInvoiceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M17 7.5a5 5 0 100 9" />
      <path d="M4 9.5h9M4 13.5h7" />
    </svg>
  );
}

export function PortageSalarialClipboardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

export function PortageSalarialCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="6.5" width="18" height="13" rx="2" />
      <path d="M3 10.5h18" />
      <circle cx="16" cy="14.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PortageSalarialCheckCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  );
}

export function PortageSalarialTeamIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20v-1a5 5 0 015-5h4a5 5 0 015 5v1" />
      <circle cx="18" cy="8" r="2.4" />
    </svg>
  );
}

export function PortageSalarialHeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M20 8.5c0-2-1.6-3.5-3.6-3.5-1.3 0-2.5.7-3.1 1.8a3.6 3.6 0 00-3.1-1.8C8.2 5 6.6 6.5 6.6 8.5c0 4 6.7 8 6.7 8s6.7-4 6.7-8z" />
    </svg>
  );
}

export function PortageSalarialLockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 018 0v3" />
    </svg>
  );
}

export function PortageSalarialPhoneWaveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.18 2 2 0 014.11 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" />
    </svg>
  );
}

export function PortageSalarialStarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 2l2.4 5 5.6.5-4.2 3.8 1.3 5.5L12 14l-5.1 2.8 1.3-5.5L4 7.5 9.6 7z" />
    </svg>
  );
}

export function PortageSalarialTrendingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}
