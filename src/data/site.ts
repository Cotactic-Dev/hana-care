const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "https://phatracare.phatra-leasing.com");

/** Mockup/demo deploys (Vercel, or NOINDEX=true) must never be indexed by search engines. */
export const NOINDEX = process.env.NOINDEX === "true" || process.env.VERCEL === "1";

export const contact = {
  phoneDisplay: "02-290-7575",
  phoneHref: "tel:022907575",
  lineId: "@hanacare",
  lineUrl: process.env.NEXT_PUBLIC_LINE_URL ?? "https://line.me",
};

export const navItems = [
  { href: "/", key: "nav_home" },
  { href: "/about-us/", key: "nav_about" },
  { href: "/services/", key: "nav_services" },
  { href: "/patient-beds/", key: "nav_products" },
  { href: "/articles/", key: "nav_articles" },
  { href: "/contact-us/", key: "nav_contact" },
] as const;
