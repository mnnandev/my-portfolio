/** Site-wide identity, URLs, and social profiles (no private contact data). */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://my-portfolio-nu-two-55.vercel.app";

export const person = {
  name: "Manan Mazhar",
  alternateNames: ["Mnnan Mazhar", "Mnnan", "mnnandev"],
  handle: "mnnandev",
  jobTitle: "Full Stack Developer",
  country: "Pakistan",
  imagePath: "/assets/images/profile-image-mnnan.jpg",
};

export const agencies = {
  starlent: {
    name: "Starlent Tech",
    url: "https://starlent.tech",
    alsoKnown: "Tech Titan Studio",
  },
};

/** Fill TODO URLs before publishing — omitted from sameAs until valid http(s) URL. */
export const socialProfiles = {
  linkedin: "https://www.linkedin.com/in/manan-mazhar-453b9b2b2/",
  github: "https://github.com/mnnandev",
  instagram: "https://www.instagram.com/mananmazhardev/",
  facebook: "https://web.facebook.com/mnnan.bhutta.94",
  fiverr: "TODO_ADD_FIVERR_PROFILE_URL",
  upwork: "TODO_ADD_UPWORK_PROFILE_URL",
  starlent: agencies.starlent.url,
};

export function getSameAsUrls() {
  return Object.values(socialProfiles).filter(
    (url) => typeof url === "string" && url.startsWith("http")
  );
}

export const seo = {
  title:
    "Manan Mazhar | Full Stack Developer — Shopify, WordPress, WooCommerce & MERN",
  description:
    "Hire Manan Mazhar (Mnnan) — Full Stack Developer from Pakistan. Custom Shopify stores, WordPress themes & plugins, WooCommerce, OpenCart, and MERN stack apps with fast delivery.",
  ogImageAlt: "Manan Mazhar — Full Stack Developer (Shopify, WordPress, MERN)",
  keywords: [
    "Manan Mazhar",
    "Mnnan Mazhar",
    "Mnnan",
    "mnnandev",
    "Full Stack Developer",
    "Full Stack Developer Pakistan",
    "Hire Full Stack Developer",
    "Hire Shopify Developer",
    "Hire WordPress Developer",
    "Shopify Developer",
    "Shopify Developer Pakistan",
    "WordPress Developer",
    "WordPress Developer Pakistan",
    "WooCommerce Developer",
    "OpenCart Developer",
    "MERN Stack Developer",
    "custom WordPress theme",
    "custom WordPress plugin",
    "Shopify Liquid developer",
    "ecommerce developer",
    "Starlent Tech",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Talkback Snacks",
    "Bright Dreamers",
    "Clinical Training Academy",
  ],
};

export const knowsAbout = [
  "Shopify",
  "Liquid",
  "WordPress",
  "WooCommerce",
  "OpenCart",
  "Custom WordPress themes",
  "Custom WordPress plugins",
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "MERN stack",
  "Ecommerce development",
  "TikTok ads integration",
];

export const ids = {
  person: `${siteUrl}/#person`,
  organization: `${siteUrl}/#organization`,
  website: `${siteUrl}/#website`,
  profilePage: `${siteUrl}/#profilepage`,
  portfolio: `${siteUrl}/#portfolio`,
};
