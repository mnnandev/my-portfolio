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
  applicationName: person.name,
  keywords: seo.keywords,
  authors: [
    { name: person.name, url: siteUrl },
    { name: "Mnnan Mazhar", url: siteUrl },
  ],
  creator: person.name,
  publisher: person.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: seo.title,
    description: seo.description,
    siteName: `${person.name} — Portfolio`,
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
    creator: `@${person.handle}`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
    types: {
      "text/plain": `${siteUrl}/llms.txt`,
    },
  },
  verification: {
    google: "gTSOWpNvkGYsqnxxY7EnZeXyN8SQh5Ue6EcekfVTBZY",
  },
  category: "technology",
  classification: "Portfolio / Full Stack Developer",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL(siteUrl),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "PK",
    "geo.placename": "Pakistan",
  },
};
