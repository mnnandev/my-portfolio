import Link from "next/link";
import { agencies } from "@/lib/siteConfig";
import { serviceSlugs } from "@/lib/servicesContent";

export default function SeoHero() {
  return (
    <section className="seo-hero" aria-labelledby="seo-hero-heading">
      <h1 id="seo-hero-heading" className="seo-hero__h1">
        Manan Mazhar - Full Stack Developer
      </h1>
      <p className="seo-hero__lead">
        Manan Mazhar (also known as Mnnan) is a Full Stack Developer from
        Pakistan who builds Shopify stores, WordPress and WooCommerce websites,
        OpenCart stores and MERN stack applications. He runs the digital agency{" "}
        <a href={agencies.starlent.url} rel="me noopener noreferrer">
          {agencies.starlent.name}
        </a>
        .
      </p>
      <nav className="seo-hero__services" aria-label="Services">
        <ul>
          {serviceSlugs.map((slug) => (
            <li key={slug}>
              <Link href={`/services/${slug}`}>{slug.replace(/-/g, " ")}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
