import Link from "next/link";
import { agencies, person, socialProfiles } from "@/lib/siteConfig";
import { serviceSlugs } from "@/lib/servicesContent";

const profileLinks = [
  {
    href: socialProfiles.linkedin,
    label: "Manan Mazhar on LinkedIn",
    show: socialProfiles.linkedin.startsWith("http"),
  },
  {
    href: socialProfiles.github,
    label: "Manan Mazhar on GitHub",
    show: socialProfiles.github.startsWith("http"),
  },
  {
    href: socialProfiles.instagram,
    label: "Manan Mazhar on Instagram",
    show: socialProfiles.instagram.startsWith("http"),
  },
  {
    href: socialProfiles.facebook,
    label: "Manan Mazhar on Facebook",
    show: socialProfiles.facebook.startsWith("http"),
  },
  {
    href: socialProfiles.fiverr,
    label: "Manan Mazhar on Fiverr",
    show: socialProfiles.fiverr.startsWith("http"),
  },
  {
    href: socialProfiles.upwork,
    label: "Manan Mazhar on Upwork",
    show: socialProfiles.upwork.startsWith("http"),
  },
  {
    href: agencies.starlent.url,
    label: "Starlent Tech",
    show: true,
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="site-footer__identity">
        {person.name} — {person.jobTitle} · {person.country}
      </p>
      <p className="site-footer__agency">
        {agencies.starlent.name} ({agencies.starlent.alsoKnown}) ·{" "}
        <a href={agencies.starlent.url} rel="me noopener noreferrer">
          {agencies.starlent.url.replace("https://", "")}
        </a>
      </p>
      <nav aria-label="Services">
        <ul className="site-footer__services">
          {serviceSlugs.map((slug) => (
            <li key={slug}>
              <Link href={`/services/${slug}`}>
                {slug.replace(/-/g, " ")}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav aria-label="Social profiles">
        <ul className="site-footer__social">
          {profileLinks
            .filter((l) => l.show)
            .map((link) => (
              <li key={link.href}>
                <a href={link.href} rel="me noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
        </ul>
      </nav>
      <p className="site-footer__contact">
        Contact: use the{" "}
        <a href="/#contact">contact form</a> on this site (no public email).
      </p>
    </footer>
  );
}
