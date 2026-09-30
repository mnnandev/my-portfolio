import Link from "next/link";
import FaqSection from "@/components/seo/FaqSection";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { buildFaqPageGraphJsonLd } from "@/lib/jsonLd";
import { seo, siteUrl } from "@/lib/siteConfig";

export const metadata = {
  title: "FAQ | Manan Mazhar",
  description:
    "Frequently asked questions about Manan Mazhar (Mnnan), Full Stack Developer for Shopify, WordPress, WooCommerce, OpenCart, and MERN stack.",
  alternates: { canonical: `${siteUrl}/faq` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "FAQ | Manan Mazhar",
    description: seo.description,
    url: `${siteUrl}/faq`,
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLdScript data={buildFaqPageGraphJsonLd()} />
      <main className="service-page">
        <p>
          <Link href="/">← Back to portfolio</Link>
        </p>
        <FaqSection />
      </main>
    </>
  );
}
