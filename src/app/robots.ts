import type { MetadataRoute } from "next";
import { SITE_URL, IS_PRODUCTION_HOST } from "@/lib/site-url";

/**
 * Crawl policy. Only the real production domain is opened to crawlers — preview
 * deployments serve the identical 56 listings, and indexing them would scatter
 * duplicates of every page across throwaway hostnames.
 */
export default function robots(): MetadataRoute.Robots {
  if (!IS_PRODUCTION_HOST) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
