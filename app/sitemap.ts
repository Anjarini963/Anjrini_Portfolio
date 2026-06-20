import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

/**
 * Single-page site, so the sitemap is just the root. Kept as a route (rather
 * than a static file) so it tracks `siteUrl` automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
