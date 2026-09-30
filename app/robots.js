import { siteUrl } from "@/lib/siteConfig";

const allowAll = [
  "*",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots() {
  return {
    rules: allowAll.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
