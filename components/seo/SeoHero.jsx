import Link from "next/link";
import { featuredProjects } from "@/lib/featuredProjects";
import { agencies, person, seo } from "@/lib/siteConfig";
import { serviceSlugs } from "@/lib/servicesContent";

/** Visually hidden but crawlable identity + internal/external links for SEO. */
export default function SeoHero() {
  return (
    <section className="seo-crawl" aria-label="About Manan Mazhar">
      <h1>
        {person.name} — {person.jobTitle} (Shopify, WordPress, WooCommerce &
        MERN)
      </h1>
      <p>{seo.description}</p>
      <p>
        Also known as {person.alternateNames.join(", ")}. Based in{" "}
        {person.country}. Agency:{" "}
        <a href={agencies.starlent.url} rel="me noopener noreferrer">
          {agencies.starlent.name}
        </a>
        .
      </p>
      <nav aria-label="Services">
        <ul>
          {serviceSlugs.map((slug) => (
            <li key={slug}>
              <Link href={`/services/${slug}`}>
                {slug.replace(/-/g, " ")}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/faq">FAQ about {person.name}</Link>
          </li>
        </ul>
      </nav>
      <nav aria-label="Featured projects">
        <ul>
          {featuredProjects.map((project) => (
            <li key={project.url}>
              <a href={project.url} rel="noopener noreferrer">
                {project.name} — {project.category}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
