import type { ReactNode } from "react";

export default function CtaBanner({
  icon,
  title,
  description,
  primaryLabel,
  secondaryLabel,
  className = "",
}: {
  icon: ReactNode;
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel?: string;
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-6 rounded-[20px] bg-pink-pale px-[34px] py-[26px] sm:grid-cols-[1fr_auto] ${className}`}
    >
      <div className="flex min-w-0 items-center gap-4.5">
        <div className="flex h-[92px] w-[92px] flex-shrink-0 items-center justify-center rounded-full bg-white">
          {icon}
        </div>
        <div>
          <h4 className="mb-1 text-[16.5px] font-bold text-navy">{title}</h4>
          <p className="text-[14px] text-gray-text">{description}</p>
        </div>
      </div>
      <div className="flex min-w-[220px] flex-col gap-3">
        <a
          href="#"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border-[1.5px] border-transparent bg-red px-[22px] py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.55)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark"
        >
          {primaryLabel}
        </a>
        {secondaryLabel && (
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-[1.5px] border-[#E3E4EA] bg-white px-[22px] py-3 text-[14.5px] font-semibold text-navy transition-all duration-150 hover:-translate-y-px hover:border-red hover:text-red"
          >
            {secondaryLabel}
          </a>
        )}
      </div>
    </div>
  );
}
