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

  // The project's stable production hostname (maison-aurum-luxury.vercel.app). Every
  // deploy keeps it, unlike VERCEL_URL.
  const projectHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (projectHost) return `https://${projectHost.replace(/\/+$/, "")}`;

  // Last resort: the hostname of this specific deployment. It is unique per build —
  // maison-aurum-luxury-2sx0hjlop-….vercel.app — so a preview canonicals to itself
  // rather than to production, which is what a preview should do.
  const vercel = process.env.NEXT_PUBLIC_VERCEL_URL?.trim() || process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/+$/, "")}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

/**
 * Whether this build knows a stable, intended public address for itself — the only
 * condition under which it is safe to invite crawlers.
 *
 * Deliberately NOT `VERCEL_ENV === "production"`. A production deploy with no domain
 * configured still only knows a per-build hostname, and opening that to crawlers asks
 * Google to index an address that dies at the next deploy, then hands it a canonical
 * pointing at the same doomed URL. Setting NEXT_PUBLIC_SITE_URL is the act of saying
 * "this is where the site lives" — until someone does, nothing gets indexed.
 */
export const IS_PRODUCTION_HOST = !!process.env.NEXT_PUBLIC_SITE_URL;

/** Absolute URL for a site-relative path, e.g. `/villas` → `https://…/villas`. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

/** `alternates.canonical` value for a page. Next resolves it against metadataBase. */
export function canonical(path = "/") {
  return { canonical: path };
}
