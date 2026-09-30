import { getSameAsUrls, person, seo, siteUrl } from "@/lib/siteConfig";

export const siteConfig = {
  name: seo.title,
  description: seo.description,
  url: siteUrl,
  ogImage: person.imagePath,
  links: {
    github: getSameAsUrls().find((u) => u.includes("github.com")) || "",
    linkedin: getSameAsUrls().find((u) => u.includes("linkedin.com")) || "",
  },
  keywords: seo.keywords,
  author: person.name,
};

export const defaultMetadata = {
  title: {
    default: seo.title,
    template: `%s | ${person.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: person.name }, { name: "Mnnan Mazhar" }],
  creator: person.name,
  publisher: person.name,
  links: siteConfig.links,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: seo.title,
    description: seo.description,
    siteName: person.name,
    images: [
      {
        url: person.imagePath,
        width: 1200,
        height: 630,
        alt: seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [person.imagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "gTSOWpNvkGYsqnxxY7EnZeXyN8SQh5Ue6EcekfVTBZY",
  },
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL(siteUrl),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
