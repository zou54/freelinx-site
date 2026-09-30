import { createElement, type SVGProps } from "react";
import * as Icons from "@/components/icons";

export type IconName = keyof typeof Icons;

export function resolveIcon(name: string | null | undefined) {
  if (name && name in Icons) {
    return Icons[name as IconName];
  }
  return Icons.DocumentIcon;
}

// Wraps dynamic (CMS-driven) icon resolution so callers can render a
// string icon name directly without assigning the resolved component to a
// JSX tag themselves.
export function ResolvedIcon({ name, ...props }: { name?: string | null } & SVGProps<SVGSVGElement>) {
  return createElement(resolveIcon(name), props);
}
