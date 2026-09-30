import Link from "next/link";
import JsonLdScript from "./JsonLdScript";
import { buildServicePageGraphJsonLd } from "@/lib/jsonLd";

export default function ServicePageLayout({ service }) {
  const jsonLd = buildServicePageGraphJsonLd(service.slug);

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <main className="service-page">
        <p>
          <Link href="/">← Back to portfolio</Link>
        </p>
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
          <Link href="/#contact">Contact Manan Mazhar about {service.serviceType}</Link>
        </p>
      </main>
    </>
  );
}
