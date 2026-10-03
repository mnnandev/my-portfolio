import { faqItems } from "./faq";
import { featuredProjects } from "./featuredProjects";
import {
  agencies,
  getSameAsUrls,
  ids,
  knowsAbout,
  person,
  seo,
  siteUrl,
  socialProfiles,
} from "./siteConfig";
import { servicesContent } from "./servicesContent";

function absoluteImage(path) {
  return path.startsWith("http") ? path : `${siteUrl}${path}`;
}

export function buildPersonJsonLd() {
  return {
    "@type": "Person",
    "@id": ids.person,
    name: person.name,
    alternateName: person.alternateNames,
    jobTitle: person.jobTitle,
    url: siteUrl,
    image: absoluteImage(person.imagePath),
    description: seo.description,
    knowsAbout,
    nationality: {
      "@type": "Country",
      name: "Pakistan",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    worksFor: { "@id": ids.organization },
    sameAs: getSameAsUrls(),
    hasOccupation: {
      "@type": "Occupation",
      name: person.jobTitle,
      occupationLocation: {
        "@type": "Country",
        name: "Pakistan",
      },
      skills: knowsAbout.join(", "),
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": ids.organization,
    name: agencies.starlent.name,
    alternateName: agencies.starlent.alsoKnown,
    url: agencies.starlent.url,
    description: `${agencies.starlent.name} (${agencies.starlent.alsoKnown}) — digital agency led by ${person.name}.`,
    founder: { "@id": ids.person },
    sameAs: [agencies.starlent.url, socialProfiles.starlent].filter((u) =>
      u.startsWith("http")
    ),
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: siteUrl,
    name: `${person.name} Portfolio`,
    alternateName: seo.title,
    description: seo.description,
    publisher: { "@id": ids.person },
    inLanguage: "en",
    about: { "@id": ids.person },
  };
}

export function buildProfilePageJsonLd() {
  return {
    "@type": "ProfilePage",
    "@id": ids.profilePage,
    url: siteUrl,
    name: `${person.name} — ${person.jobTitle}`,
    description: seo.description,
    mainEntity: { "@id": ids.person },
    isPartOf: { "@id": ids.website },
    inLanguage: "en",
  };
}

export function buildPortfolioItemListJsonLd() {
  return {
    "@type": "ItemList",
    "@id": ids.portfolio,
    name: `${person.name} — Featured Projects`,
    description:
      "Selected Shopify, WordPress, WooCommerce, and custom plugin/theme projects by Manan Mazhar.",
    numberOfItems: featuredProjects.length,
    itemListElement: featuredProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        url: project.url,
        description: project.description,
        creator: { "@id": ids.person },
        about: project.category,
        inLanguage: "en",
      },
    })),
  };
}

function buildFaqPageEntity() {
  return {
    "@type": "FAQPage",
    "@id": `${siteUrl}/faq#faqpage`,
    url: `${siteUrl}/faq`,
    name: `FAQ — ${person.name}`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildProfessionalServicesJsonLd() {
  return Object.values(servicesContent).map((service) => ({
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/services/${service.slug}#service`,
    name: service.h1,
    serviceType: service.serviceType,
    url: `${siteUrl}/services/${service.slug}`,
    description: service.metaDescription,
    provider: { "@id": ids.person },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Place", name: "Worldwide" },
    ],
    availableLanguage: ["English", "Urdu"],
  }));
}

export function buildHomeGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonJsonLd(),
      buildOrganizationJsonLd(),
      buildWebSiteJsonLd(),
      buildProfilePageJsonLd(),
      buildPortfolioItemListJsonLd(),
      ...buildProfessionalServicesJsonLd(),
    ],
  };
}

export function buildFaqPageGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonJsonLd(),
      buildWebSiteJsonLd(),
      buildFaqPageEntity(),
      buildBreadcrumbJsonLd([
        { name: "Home", url: siteUrl },
        { name: "FAQ", url: `${siteUrl}/faq` },
      ]),
    ],
  };
}

export function buildServicePageGraphJsonLd(slug) {
  const service = servicesContent[slug];
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonJsonLd(),
      buildOrganizationJsonLd(),
      buildWebSiteJsonLd(),
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/services/${slug}#service`,
        name: service.h1,
        serviceType: service.serviceType,
        url: `${siteUrl}/services/${slug}`,
        description: service.metaDescription,
        provider: { "@id": ids.person },
        areaServed: [
          { "@type": "Country", name: "Pakistan" },
          { "@type": "Place", name: "Worldwide" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/services/${slug}#faq`,
        mainEntity: service.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      buildBreadcrumbJsonLd([
        { name: "Home", url: siteUrl },
        { name: "Services", url: `${siteUrl}/services/${slug}` },
        { name: service.h1, url: `${siteUrl}/services/${slug}` },
      ]),
    ],
  };
}
