import { serviceSlugs } from "@/lib/servicesContent";
import { siteUrl } from "@/lib/siteConfig";

export default function sitemap() {
  const now = new Date();

  const routes = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.9 },
    ...serviceSlugs.map((slug) => ({
      path: `/services/${slug}`,
      changeFrequency: "monthly",
      priority: 0.85,
    })),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
