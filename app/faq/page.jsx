import Link from "next/link";
import Faq from "@/components/Faq";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { buildFaqPageGraphJsonLd } from "@/lib/jsonLd";
import { person, seo, siteUrl } from "@/lib/siteConfig";

const title = `FAQ — Hire ${person.name} | Full Stack Developer`;
const description =
  "FAQ about Manan Mazhar (Mnnan): Shopify, WordPress themes & plugins, WooCommerce, OpenCart, MERN stack, delivery timelines, and how to hire him.";

export const metadata = {
  title: "FAQ",
  description,
  keywords: seo.keywords,
  alternates: { canonical: `${siteUrl}/faq` },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/faq`,
    type: "website",
    images: [{ url: person.imagePath, alt: seo.ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [person.imagePath],
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLdScript data={buildFaqPageGraphJsonLd()} />
      <main className="faq-standalone">
        <nav className="faq-standalone-back" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true"> / </span>
          <span>FAQ</span>
        </nav>
        <h1 className="seo-page-h1">Frequently asked questions</h1>
        <p className="seo-page-lead">
          Answers about {person.name} — Full Stack Developer for Shopify,
          WordPress, WooCommerce, OpenCart, and MERN.
        </p>
        <Faq />
      </main>
    </>
  );
}
