/**
 * The site's absolute origin — the one thing every canonical URL, the sitemap, the
 * robots policy and every Open Graph image URL have to agree on.
 *
 * The production domain is not settled yet, so it is read from the environment
 * rather than hard-coded: set `NEXT_PUBLIC_SITE_URL` once the domain lands and
 * nothing in the code has to change. Until then Vercel's own per-deploy hostname is
 * used, which keeps preview deployments self-consistent (a preview that canonicals
 * itself to production would ask Google to index the wrong host).
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  // Vercel exposes the deployment host without a scheme, and only at build/run time.
  const vercel = process.env.NEXT_PUBLIC_VERCEL_URL?.trim() || process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/+$/, "")}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

/**
 * True only for the real production domain. Preview and local builds must not be
 * indexed — otherwise the same 56 listings exist on a dozen hostnames.
 */
export const IS_PRODUCTION_HOST =
  process.env.VERCEL_ENV === "production" || !!process.env.NEXT_PUBLIC_SITE_URL;

/** Absolute URL for a site-relative path, e.g. `/villas` → `https://…/villas`. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

/** `alternates.canonical` value for a page. Next resolves it against metadataBase. */
export function canonical(path = "/") {
  return { canonical: path };
}
