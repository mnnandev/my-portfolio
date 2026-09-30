export const serviceSlugs = [
  "shopify-development",
  "wordpress-development",
  "woocommerce-development",
  "opencart-development",
  "mern-stack-development",
];

export const servicesContent = {
  "shopify-development": {
    slug: "shopify-development",
    title: "Shopify Development | Manan Mazhar",
    h1: "Shopify Development Services",
    serviceType: "Shopify store development",
    metaDescription:
      "Shopify development by Manan Mazhar: custom Liquid themes, store setup, migrations, and app integrations for brands that need reliable e-commerce.",
    intro:
      "Manan Mazhar builds Shopify stores that are ready to sell: catalog setup, custom Liquid sections, conversion-focused product pages, and payment and app integrations aligned with your brand.",
    body: [
      "Whether you are launching a new brand or improving an existing storefront, Shopify development covers theme customization with Liquid, reusable sections, performance-conscious assets, and checkout flows that match how your customers buy.",
      "Typical work includes product and collection architecture, Judge.me or review apps, shipping and tax configuration, WordPress-to-Shopify migrations when needed, and handoff documentation so your team can manage day-to-day updates.",
    ],
    process: [
      "Discovery and scope for catalog, design, and integrations",
      "Theme build or customization in Liquid with mobile-first layouts",
      "QA, launch support, and post-launch tweaks",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS", "Shopify Apps"],
    faq: [
      {
        q: "Do you customize existing Shopify themes or build from scratch?",
        a: "Both. Many projects extend a base theme with custom Liquid sections; others need a tailored product detail and landing experience.",
      },
      {
        q: "Can you migrate from WordPress or WooCommerce to Shopify?",
        a: "Yes, when it fits the business model. Migrations are planned to protect SEO, orders, and customer experience.",
      },
      {
        q: "How do we start a Shopify project?",
        a: "Submit the contact form with your store URL or requirements. Manan will reply with timeline and next steps.",
      },
    ],
  },
  "wordpress-development": {
    slug: "wordpress-development",
    title: "WordPress Development | Manan Mazhar",
    h1: "WordPress Development Services",
    serviceType: "WordPress website development",
    metaDescription:
      "Custom WordPress development by Manan Mazhar: themes, plugins, Elementor builds, performance, and SEO-ready sites for businesses and agencies.",
    intro:
      "WordPress development spans marketing sites, lead-generation funnels, and content-heavy platforms with custom themes, plugins, and Elementor Pro implementations.",
    body: [
      "Projects include Figma-to-WordPress builds, Fluent Forms integrations, custom post types, security hardening, caching, and editor workflows that non-technical teams can use confidently.",
      "Agency partners often rely on repeatable delivery: consistent component libraries, staging environments, and maintainable PHP and JavaScript where custom logic is required.",
    ],
    process: [
      "Requirements, sitemap, and design alignment",
      "Theme or Elementor build with reusable blocks",
      "Testing, launch, and optional care plans",
    ],
    technologies: ["WordPress", "PHP", "MySQL", "Elementor", "JavaScript", "CSS"],
    faq: [
      {
        q: "Do you build custom WordPress plugins?",
        a: "Yes, when off-the-shelf plugins cannot meet the workflow. Plugins are scoped for security and maintainability.",
      },
      {
        q: "Is Elementor required?",
        a: "No. Projects use Elementor when it fits the client workflow; classic themes or hybrid approaches are used when they are a better fit.",
      },
      {
        q: "How are WordPress projects quoted?",
        a: "Share goals and examples via the contact form. You will receive a scope outline and timeline estimate.",
      },
    ],
  },
  "woocommerce-development": {
    slug: "woocommerce-development",
    title: "WooCommerce Development | Manan Mazhar",
    h1: "WooCommerce Development Services",
    serviceType: "WooCommerce store development",
    metaDescription:
      "WooCommerce development by Manan Mazhar: custom product flows, payment gateways, subscriptions-ready setups, and WordPress e-commerce that converts.",
    intro:
      "WooCommerce development combines WordPress content flexibility with a full cart, checkout, and product catalog tuned for your offer and fulfillment model.",
    body: [
      "Work includes custom single-product templates, variable products, shipping rules, tax configuration, email notifications, and integrations with CRM or ERP tools when required.",
      "Performance and mobile checkout are prioritized so large catalogs remain usable, with caching and asset strategies appropriate to your hosting environment.",
    ],
    process: [
      "Store audit or greenfield planning",
      "Theme and WooCommerce template customization",
      "Payment, shipping, and launch testing",
    ],
    technologies: ["WooCommerce", "WordPress", "PHP", "JavaScript", "MySQL"],
    faq: [
      {
        q: "Can you customize checkout and product pages?",
        a: "Yes. Custom templates and plugins support branded checkout, upsells, and complex product options.",
      },
      {
        q: "Do you work with existing WooCommerce stores?",
        a: "Yes. Audits cover theme debt, plugin conflicts, and speed improvements before new features ship.",
      },
      {
        q: "What do you need to begin?",
        a: "Current store URL or product list, payment providers, and shipping regions via the contact form.",
      },
    ],
  },
  "opencart-development": {
    slug: "opencart-development",
    title: "OpenCart Development | Manan Mazhar",
    h1: "OpenCart Development Services",
    serviceType: "OpenCart e-commerce development",
    metaDescription:
      "OpenCart development by Manan Mazhar: theme customization, extensions, multi-region shipping, and stable stores for established catalogs.",
    intro:
      "OpenCart development focuses on reliable catalogs, extension compatibility, and theme adjustments for stores that already depend on OpenCart’s ecosystem.",
    body: [
      "Services include theme fixes, payment and shipping extensions, admin workflow improvements, and troubleshooting legacy modules without breaking live orders.",
      "Multi-region tax and shipping rules, product options, and SEO-friendly category structures are handled with staging tests before production deploys.",
    ],
    process: [
      "Staging clone and extension audit",
      "Theme and checkout improvements",
      "Monitored rollout and post-launch support",
    ],
    technologies: ["OpenCart", "PHP", "MySQL", "JavaScript"],
    faq: [
      {
        q: "Can you fix extension conflicts on live OpenCart stores?",
        a: "Yes, using staging first so orders and inventory stay safe.",
      },
      {
        q: "Do you migrate stores to or from OpenCart?",
        a: "Migrations are evaluated case by case; data mapping and downtime windows are agreed upfront.",
      },
      {
        q: "How do I request OpenCart help?",
        a: "Use the contact form with admin URL (staging if available) and a short issue description.",
      },
    ],
  },
  "mern-stack-development": {
    slug: "mern-stack-development",
    title: "MERN Stack Development | Manan Mazhar",
    h1: "MERN Stack Development Services",
    serviceType: "MERN stack web application development",
    metaDescription:
      "MERN stack development by Manan Mazhar: MongoDB, Express.js, React, Node.js, and Next.js apps with APIs, dashboards, and scalable architecture.",
    intro:
      "MERN stack development delivers full web applications: React or Next.js interfaces, Express.js APIs, MongoDB data models, and deployment-ready project structure.",
    body: [
      "Use cases include admin portals, SaaS MVPs, internal tools, and customer-facing apps that need authentication, role-based access, and clear API boundaries.",
      "Projects emphasize maintainable code, Tailwind CSS for UI speed, and hosting patterns that work on Vercel, Node servers, or hybrid setups.",
    ],
    process: [
      "Technical discovery and data modeling",
      "Iterative UI and API delivery",
      "Testing, deployment, and documentation",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
    ],
    faq: [
      {
        q: "Do you use Next.js with the MERN stack?",
        a: "Yes. Next.js is used when SSR, routing, and deployment on Vercel benefit the product.",
      },
      {
        q: "Can you integrate MERN apps with Shopify or WordPress?",
        a: "Yes, via REST or webhooks when a unified workflow is required.",
      },
      {
        q: "What is the first step for a MERN project?",
        a: "Share user stories and any existing designs through the contact form for a phased plan.",
      },
    ],
  },
};
