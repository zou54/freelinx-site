import type { ReactNode } from "react";

export default function FeatureCard({
  icon,
  num,
  title,
  description,
  iconSize = "large",
}: {
  icon: ReactNode;
  num?: number;
  title: string;
  description: string;
  iconSize?: "large" | "small";
}) {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-[#F0F0F3] bg-white px-[26px] pb-[26px] pt-[30px] text-center shadow-[0_4px_24px_-12px_rgba(11,15,43,0.08)] after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[42px] after:-translate-x-1/2 after:rounded-t-[3px] after:bg-red">
      {num !== undefined && (
        <div className="mb-[18px] inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-navy text-[14px] font-bold text-white">
          {num}
        </div>
      )}
      <div
        className={`mx-auto mb-4 flex items-center justify-center rounded-full bg-pink-pale ${
          iconSize === "large" ? "h-[92px] w-[92px]" : "h-[56px] w-[56px]"
        }`}
      >
        {icon}
      </div>
      <h3 className="mb-2 text-[15px] font-bold leading-[1.35] text-navy">{title}</h3>
      <p className="text-[12.5px] leading-[1.6] text-gray-text">{description}</p>
    </div>
  );
}
