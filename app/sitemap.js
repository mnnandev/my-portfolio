import { serviceSlugs } from "@/lib/servicesContent";
import { siteUrl } from "@/lib/siteConfig";

export default function sitemap() {
  const base = siteUrl;
  const now = new Date();

  const staticRoutes = ["", "/faq", ...serviceSlugs.map((s) => `/services/${s}`)];

  return staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.85,
  }));
}
