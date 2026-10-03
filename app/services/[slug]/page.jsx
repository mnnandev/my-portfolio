import { notFound } from "next/navigation";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import { servicesContent, serviceSlugs } from "@/lib/servicesContent";
import { person, seo, siteUrl } from "@/lib/siteConfig";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesContent[slug];
  if (!service) return {};

  const url = `${siteUrl}/services/${slug}`;

  return {
    title: service.title,
    description: service.metaDescription,
    keywords: [...seo.keywords, service.serviceType, service.h1],
    alternates: { canonical: url },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url,
      type: "website",
      siteName: `${person.name} — Portfolio`,
      images: [{ url: person.imagePath, alt: seo.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.metaDescription,
      images: [person.imagePath],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesContent[slug];
  if (!service) notFound();

  return <ServicePageLayout service={service} />;
}
