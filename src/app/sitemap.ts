import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { packages } from "@/data/packages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/packages",
    "/places-to-visit",
    "/gallery",
    "/testimonials",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const packageRoutes = packages.map((pkg) => ({
    url: `${siteConfig.url}/packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...packageRoutes];
}
