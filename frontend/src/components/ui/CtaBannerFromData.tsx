import CtaBanner from "@/components/ui/CtaBanner";
import { ResolvedIcon } from "@/lib/icon-map";
import { resolveCtaHref } from "@/lib/cta-href";
import type { CtaBannerData } from "@/types/strapi";

export default function CtaBannerFromData({
  data,
  className,
  primaryFallbackHref,
}: {
  data?: CtaBannerData;
  className?: string;
  primaryFallbackHref?: string;
}) {
  if (!data) return null;

  return (
    <CtaBanner
      className={className}
      icon={<ResolvedIcon name={data.icon} width={42} height={42} />}
      title={data.title}
      description={data.description}
      primaryLabel={data.primaryLabel ?? ""}
      primaryHref={resolveCtaHref(data.primaryLabel, data.primaryHref, primaryFallbackHref)}
      secondaryLabel={data.secondaryLabel}
      secondaryHref={resolveCtaHref(data.secondaryLabel, data.secondaryHref)}
    />
  );
}
