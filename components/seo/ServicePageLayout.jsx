import Link from "next/link";
import JsonLdScript from "./JsonLdScript";
import { buildServicePageGraphJsonLd } from "@/lib/jsonLd";
import { person } from "@/lib/siteConfig";

export default function ServicePageLayout({ service }) {
  const jsonLd = buildServicePageGraphJsonLd(service.slug);

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <main className="service-page">
        <nav className="service-page__breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true"> / </span>
          <span>Services</span>
          <span aria-hidden="true"> / </span>
          <span>{service.h1}</span>
        </nav>
        <h1>{service.h1}</h1>
        <p className="service-page__intro">{service.intro}</p>
        {service.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <h2>Process</h2>
        <ol>
          {service.process.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <h2>Technologies</h2>
        <ul>
          {service.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <h2>FAQ</h2>
        <dl>
          {service.faq.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
        <p className="service-page__cta">
          <Link href="/#contact">
            Contact {person.name} about {service.serviceType}
          </Link>
        </p>
        <p>
          <Link href="/faq">More FAQs</Link>
          {" · "}
          <Link href="/">Back to portfolio</Link>
        </p>
      </main>
    </>
  );
}