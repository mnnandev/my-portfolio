import Link from "next/link";
import Faq from "@/components/Faq";
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
      <main className="faq-standalone">
        <p className="faq-standalone-back">
          <Link href="/">← Back to portfolio</Link>
        </p>
        <Faq />
      </main>
    </>
  );
}
