import type { MetadataRoute } from "next";
import { NOINDEX, SITE_URL } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  if (NOINDEX) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/thank-you/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
