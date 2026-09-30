import { notFound } from "next/navigation";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import { servicesContent, serviceSlugs } from "@/lib/servicesContent";
import { siteUrl } from "@/lib/siteConfig";

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
    alternates: { canonical: url },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url,
      type: "website",
    },
    twitter: {
      title: service.title,
      description: service.metaDescription,
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
