import { createElement, type SVGProps } from "react";
import * as Icons from "@/components/icons";
import * as PortageCommercialIcons from "@/components/icons/portage-commercial";
import * as PortageSalarialIcons from "@/components/icons/portage-salarial";
import * as QuiSommesNousIcons from "@/components/icons/qui-sommes-nous";
import * as TarifsIcons from "@/components/icons/tarifs";

const ALL_ICONS = {
  ...Icons,
  ...PortageCommercialIcons,
  ...PortageSalarialIcons,
  ...QuiSommesNousIcons,
  ...TarifsIcons,
};

export type IconName = keyof typeof ALL_ICONS;

export function resolveIcon(name: string | null | undefined) {
  if (name && name in ALL_ICONS) {
    return ALL_ICONS[name as IconName];
  }
  return Icons.DocumentIcon;
}

// Wraps dynamic (CMS-driven) icon resolution so callers can render a
// string icon name directly without assigning the resolved component to a
// JSX tag themselves.
export function ResolvedIcon({ name, ...props }: { name?: string | null } & SVGProps<SVGSVGElement>) {
  return createElement(resolveIcon(name), props);
}
