import CtaBanner from "@/components/ui/CtaBanner";
import { ResolvedIcon } from "@/lib/icon-map";
import type { CtaBannerData } from "@/types/strapi";

export default function CtaBannerFromData({ data, className }: { data?: CtaBannerData; className?: string }) {
  if (!data) return null;

  return (
    <CtaBanner
      className={className}
      icon={<ResolvedIcon name={data.icon} width={42} height={42} />}
      title={data.title}
      description={data.description}
      primaryLabel={data.primaryLabel ?? ""}
      primaryHref={data.primaryHref}
      secondaryLabel={data.secondaryLabel}
      secondaryHref={data.secondaryHref}
    />
  );
}
