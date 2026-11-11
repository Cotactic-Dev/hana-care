import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["/", "/patient-beds/", "/services/", "/about-us/", "/contact-us/", "/articles/", "/articles/how-to-choose-patient-bed/"];
  return [
    ...routes.map((r) => ({ url: `${SITE_URL}${r}`, lastModified: now, priority: r === "/" ? 1 : 0.7 })),
    ...products.map((p) => ({ url: `${SITE_URL}/patient-beds/${p.slug}/`, lastModified: now, priority: 0.9 })),
  ];
}
