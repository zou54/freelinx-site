// Gradient overlay painted over a hero background photo so the text on the
// left stays readable while the photo remains visible on the right, mirroring
// design-reference/freelinx-portage-commercial.html's ".hero-sect" gradient
// (same rgba(255,246,248,*) as the --color-pink-pale-2 token). On mobile the
// text spans the full width over the photo, so the overlay is kept more
// opaque throughout instead of fading out on the right.
//
// NOTE: Tailwind's JIT scanner needs these arbitrary-value utility classes to
// appear as literal text in source — keep this as a single static string,
// never built by template-literal interpolation.
export const HERO_OVERLAY_GRADIENT_CLASS =
  "bg-[linear-gradient(90deg,rgba(255,246,248,0.98)_0%,rgba(255,246,248,0.95)_30%,rgba(255,246,248,0.92)_65%,rgba(255,246,248,0.85)_100%)] " +
  "lg:bg-[linear-gradient(90deg,rgba(255,246,248,0.98)_0%,rgba(255,246,248,0.95)_36%,rgba(255,246,248,0.6)_56%,rgba(255,246,248,0.15)_78%,rgba(255,246,248,0)_100%)]";
