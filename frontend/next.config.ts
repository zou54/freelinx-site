import type { NextConfig } from "next";

// Builds a next/image remotePattern from a Strapi base URL (e.g.
// "https://cms.freelinx.fr") so uploaded media can be served through
// next/image regardless of environment.
function strapiRemotePattern(rawUrl: string | undefined) {
  if (!rawUrl) return null;
  try {
    const url = new URL(rawUrl);
    return {
      protocol: url.protocol.replace(":", "") as "http" | "https",
      hostname: url.hostname,
      port: url.port || undefined,
      pathname: "/uploads/**",
    };
  } catch {
    return null;
  }
}

const remotePatterns = [
  { protocol: "http" as const, hostname: "localhost", port: "1337", pathname: "/uploads/**" },
  strapiRemotePattern(process.env.NEXT_PUBLIC_STRAPI_URL),
].filter((pattern): pattern is NonNullable<typeof pattern> => pattern !== null);

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
    remotePatterns,
    // The local Strapi dev server resolves to localhost/127.0.0.1; Next.js
    // blocks that by default as an SSRF precaution. Safe here since
    // remotePatterns already restricts sources to our own Strapi instance.
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;
