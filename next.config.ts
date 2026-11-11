import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server bundle for Docker (see Dockerfile)
  output: "standalone",
  // Keep legacy URLs: /about-us/, /patient-beds/comfort-care/ ... (matches canonical + hreflang)
  trailingSlash: true,
  poweredByHeader: false,
  // Old mockup model URLs → real France Bed models
  async redirects() {
    return [
      { source: "/patient-beds/essential-care/", destination: "/patient-beds/espoir/", permanent: true },
      { source: "/patient-beds/comfort-care/", destination: "/patient-beds/granmax/", permanent: true },
      { source: "/patient-beds/premier-care/", destination: "/patient-beds/multi-position/", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
