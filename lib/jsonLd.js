import { faqItems } from "./faq";
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
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    worksFor: { "@id": ids.organization },
    sameAs: getSameAsUrls(),
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": ids.organization,
    name: agencies.starlent.name,
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
    name: seo.title,
    description: seo.description,
    publisher: { "@id": ids.organization },
    inLanguage: "en",
  };
}

export function buildProfilePageJsonLd() {
  return {
    "@type": "ProfilePage",
    "@id": ids.profilePage,
    url: siteUrl,
    name: `${person.name} — ${person.jobTitle}`,
    mainEntity: { "@id": ids.person },
    isPartOf: { "@id": ids.website },
  };
}

function buildFaqPageEntity() {
  return {
    "@type": "FAQPage",
    "@id": `${siteUrl}/faq#faqpage`,
    url: `${siteUrl}/faq`,
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

export function buildProfessionalServicesJsonLd() {
  return Object.values(servicesContent).map((service) => ({
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/services/${service.slug}#service`,
    name: service.h1,
    serviceType: service.serviceType,
    url: `${siteUrl}/services/${service.slug}`,
    description: service.metaDescription,
    provider: { "@id": ids.person },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
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
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
