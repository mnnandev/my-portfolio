import icondesgin from "@/public/assets/images/icon-design.svg";
import webIcon from "@/public/assets/images/icon-dev.svg";
import mobIcon from "@/public/assets/images/icon-app.svg";
import iconphoto from "@/public/assets/images/icon-photo.svg";
import iconquote from "@/public/assets/images/icon-quote.svg";

const avtar = "/assets/images/my-avatar.png";
const mnnan = "/assets/images/profile-image-mnnan.jpg";
const avatar1 = "/assets/images/avatar-1.png";
const project1 = "/assets/images/project-1.jpg";
export const PROJECT_PLACEHOLDER = "/assets/images/project-placeholder.svg";
export const PROFILE_PLACEHOLDER = "/assets/images/profile-placeholder.svg";

// Export all static assets
export {
  avtar,
  mnnan,
  icondesgin,
  webIcon,
  mobIcon,
  avatar1,
  iconphoto,
  iconquote,
  project1,
  projectcategories,
};

// Optimized project categories with unique entries and consistent structure
const projectcategories = [
  {
    category: "All",
  },
  {
    category: "Wordpress",
    subcategories: ["Theme", "Plugin", "Project"],
    projectDetail: [
      {
        src: "/assets/images/brightdreamers.png",
        name: "Bright Dreamers",
        link: "https://brightdreamers.org/",
        subcategory: "Theme",
        problem:
          "A nonprofit needed a kid-friendly branded site with a custom look — not a stock theme — built fast and easy for the team to manage in WordPress.",
        result:
          "Delivered a custom WordPress theme from HTML/CSS in 10 days, live at brightdreamers.org with donate, apply, and program sections ready for content updates.",
        description:
          "Bright Dreamers is a nonprofit community site inspiring children to dream, create, learn, lead, and give. I designed and built the full UI in HTML and CSS, then converted it into a custom WordPress theme with the needed theme customizations so the client can manage pages, CTAs, and content in WordPress. Delivered end to end in 10 days.",
        features: [
          "Custom UI built from scratch in HTML & CSS",
          "Converted into a custom WordPress theme",
          "Theme customizations for WordPress content editing",
          "Hero, mission, experiences, and CTA sections",
          "Donate & Apply to Join CTAs",
          "Newsletter / subscribe section",
          "Fully responsive, kid-friendly brand layout",
          "Delivered in 10 days"
        ],
        technologies: [
          "HTML",
          "CSS",
          "WordPress",
          "Custom Theme",
          "PHP",
          "JavaScript"
        ],
        date: "October 2026",
        gallery: ["/assets/images/brightdreamers.png"]
      },
      {
        src: "/assets/images/screencapture-clinicaltrainingacademy-2026-10-03-17_14_18.png",
        name: "Clinical Training Academy",
        link: "https://clinicaltrainingacademy.com/",
        live: "https://clinicaltrainingacademy.com/",
        subcategory: "Plugin",
        problem:
          "A clinical education platform needed a full learning system in WordPress — courses, exam prep, users, emails, certificates, and supervision booking — without stitching together multiple third-party plugins.",
        result:
          "Built a complete custom WordPress plugin with admin dashboard, CE/exam management, user & email control, auto certificates, enrollment workflows, and supervision booking — delivered in 15 days.",
        description:
          "Clinical Training Academy is a continuing education platform for clinical professionals. I built a full custom WordPress plugin that powers the whole system: admin dashboard, CE course add/manage, exam preparation control, user/candidate management, email workflows (welcome + enrollment), auto-generated certificates, and a supervision booking system. The entire backend logic is custom — delivered in 15 days.",
        features: [
          "Custom WordPress plugin (full system)",
          "Admin dashboard",
          "CE courses — add, edit, and manage",
          "Exam preparation — add and control",
          "User / candidate management",
          "Email control (welcome + enrollment mails)",
          "Auto-generated certificates on completion",
          "Supervision booking system",
          "Delivered in 15 days"
        ],
        technologies: [
          "WordPress",
          "Custom Plugin",
          "PHP",
          "MySQL",
          "JavaScript",
          "HTML",
          "CSS"
        ],
        date: "October 2026",
        gallery: [
          "/assets/images/screencapture-clinicaltrainingacademy-2026-10-03-17_14_18.png"
        ]
      },
      {
        src: "/assets/images/screencapture-velmorascents-us-2026-10-03-17_41_03.png",
        name: "Velmora Scents",
        link: "https://velmorascents.us/",
        subcategory: "Project",
        problem:
          "A luxury perfume brand needed a complete WooCommerce store with product catalog, custom product pages, payments, and TikTok ads tracking ready for sales.",
        result:
          "Delivered a full WordPress ecommerce store in 7 days — products loaded, custom single product page, payment integration, and TikTok ads system connected.",
        description:
          "Velmora Scents is a luxury perfume ecommerce store built on WordPress + WooCommerce. I set up the full store, added products, built a fully custom single product page, completed payment integration, and integrated the TikTok ads system for tracking and campaigns. Delivered in 7 days.",
        features: [
          "WordPress + WooCommerce ecommerce store",
          "Full product catalog setup",
          "Custom single product page",
          "Complete payment integration",
          "TikTok ads system integration",
          "Shop, brands, and best-sellers sections",
          "Responsive storefront",
          "Delivered in 7 days"
        ],
        technologies: [
          "WordPress",
          "WooCommerce",
          "PHP",
          "JavaScript",
          "HTML",
          "CSS",
          "TikTok Ads"
        ],
        date: "October 2026",
        gallery: [
          "/assets/images/screencapture-velmorascents-us-2026-10-03-17_41_03.png"
        ]
      },
      {
        src: "/assets/images/screencapture-mana-pucoo-nl-2026-10-03-17_44_55.png",
        name: "MANA Interior",
        link: "https://mana.pucoo.nl/",
        subcategory: "Project",
        problem:
          "An interior architecture studio needed a premium custom WordPress site with editable sliders/widgets, polished animations, and a branded preloader — without relying only on stock Elementor blocks.",
        result:
          "Built the site from scratch in 5 days with custom slider widgets controllable from a dashboard like Elementor, custom animations, and a custom preloader.",
        description:
          "MANA Interior is a high-end interior architecture website for crafting soulful spaces. I built it from scratch with custom slider widgets that are controllable from a dashboard similar to Elementor, custom animations throughout the experience, and a custom preloader. Delivered in 5 days.",
        features: [
          "Built from scratch (custom WordPress build)",
          "Custom slider widgets (Elementor-style dashboard control)",
          "Custom animations",
          "Custom preloader",
          "Portfolio / selected work sections",
          "Process and academy content sections",
          "Premium responsive layout",
          "Delivered in 5 days"
        ],
        technologies: [
          "WordPress",
          "HTML",
          "CSS",
          "JavaScript",
          "PHP",
          "Custom Widgets"
        ],
        date: "October 2026",
        gallery: [
          "/assets/images/screencapture-mana-pucoo-nl-2026-10-03-17_44_55.png"
        ]
      },
      {
        src: "/assets/images/screencapture-poplasers-home-2026-09-24-17_49_24.jpg",
        name: "POP Lasers",
        link: "https://poplasers.com/home/",
        subcategory: "Project",
        problem:
          "The client needed a polished WordPress site with lead capture, payment flows, and password-protected areas within a tight deadline.",
        result:
          "TODO: Add client-reported metrics (traffic, leads, or launch timeline confirmation).",
        description:
          "A WordPress website built with Elementor and Elementor Pro, delivered in 7 days. Includes Fluent Forms, password protection on all pages, payment integration as per client requirements, complete mail setup, and custom-built tables.",
        features: [
          "Built with Elementor & Elementor Pro",
          "Fluent Forms integration",
          "Password protection on all pages",
          "Payment integration",
          "Complete mail setup",
          "Custom-built tables",
          "Delivered in 7 days"
        ],
        technologies: [
          "WordPress",
          "Elementor",
          "Elementor Pro",
          "Fluent Forms",
          "PHP",
          "MySQL"
        ],
        date: "September 2026",
        gallery: [
          "/assets/images/screencapture-poplasers-home-2026-09-24-17_49_24.jpg"
        ]
      },
      {
        src: "/assets/images/1781710175251.jpg",
        name: "PrideMark Cards",
        link: "https://pridemarkcards.com/",
        subcategory: "Project",
        description:
          "A WordPress + WooCommerce store delivered in 7 days. Built with Elementor and Elementor Pro, Fluent Forms, HTML, CSS3, PHP, and JavaScript. Includes a custom design plugin so customers can build their own card design and send it by email, full payment integration, WooCommerce product listings, and a fully custom single product detail page.",
        features: [
          "Elementor & Elementor Pro",
          "Fluent Forms",
          "Custom card design plugin (build & email design)",
          "WooCommerce product listings",
          "Complete payment integration",
          "Custom single product detail page",
          "Delivered in 7 days"
        ],
        technologies: [
          "WordPress",
          "WooCommerce",
          "Elementor",
          "Elementor Pro",
          "Fluent Forms",
          "HTML",
          "CSS3",
          "PHP",
          "JavaScript"
        ],
        date: "September 2026",
        gallery: [
          "/assets/images/1781710175251.jpg"
        ]
      },
      {
        src: "/assets/images/1780908265971.jpg",
        name: "Pegazus Global Travel",
        link: "https://pegazusglobaltravel.com/",
        subcategory: "Project",
        description:
          "A travel metasearch platform converted from a complete Figma design into a fully functional WordPress website in 7 days — UI and backend end to end. Users compare flights, hotels, cars, cruises, tours, trains, and insurance in one place. Pegazus does not sell tickets directly; it connects travelers to the best deals from hundreds of providers worldwide.",
        features: [
          "Figma → WordPress pixel-perfect conversion",
          "7 full pages built from scratch",
          "Custom UI (HTML, CSS, JS) in WordPress",
          "Backend: forms, dynamic content, plugins, performance",
          "Fully responsive across all devices",
          "Search filters, comparison UI, FAQ accordion",
          "Multi-section landing page",
          "Delivered in 7 days"
        ],
        technologies: [
          "WordPress",
          "HTML",
          "CSS",
          "JavaScript",
          "PHP",
          "Figma"
        ],
        date: "September 2026",
        gallery: [
          "/assets/images/1780908265971.jpg"
        ]
      },
      {
        src: "/assets/images/synergylandpartners.jpg",
        name: "Synergy Land Partners",
        link: "https://synergylandpartners.com",
        subcategory: "Project",
        description: "A professional real estate website built with WordPress, featuring property listings and agent profiles.",
        features: [
          "Property search and filtering",
          "Agent profiles and contact forms",
          "Blog section for real estate news",
          "Mobile responsive design",
          "SEO optimization"
        ],
        technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3"],
        date: "February 2024",
        githubUrl: "https://github.com/username/synergy-land-partners",
        gallery: ["/assets/images/synergylandpartners.jpg"]
      },
      {
        src: "/assets/images/nylihomebuyers.jpg",
        name: "Nyli Home Buyers",
        link: "https://nylihomebuyers.com/",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "January 2024",
        githubUrl: "https://github.com/username/nyli-home-buyers"
      },
      {
        src: "/assets/images/maidsbygrace.jpg",
        name: "Maids by Grace",
        link: "https://maidsbygrace.com/",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "June 2023"
      },
      {
        src: "/assets/images/assetrsus.jpg",
        name: "Assetrsus",
        link: "https://assetrsus.com",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "July 2022"
      },
      {
        src: "/assets/images/interwood.jpg",
        name: "Interwood",
        link: "https://interwood.com",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "June 2022"
      },
      {
        src: "/assets/images/brightside.jpg",
        name: "Brightside",
        link: "https://brightside.com",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "February 2022"
      },
      {
        src: "/assets/images/bookclubs.jpg",
        name: "Bookclubs",
        link: "https://bookclubs.com/",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "January 2022"
      },
      {
        src: "/assets/images/eco-mail.jpg",
        name: "Eco Mail",
        link: "https://eco-mail.com",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "December 2021"
      },
      {
        src: "/assets/images/boulevard.jpg",
        name: "Boulevard",
        link: "https://boulevard.com",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "November 2021"
      },
      {
        src: "/assets/images/smilebigdreambigger.jpg",
        name: "Smile Big Dream Bigger",
        link: "https://smilebigdreambigger.org",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "October 2021"
      }
    ]
  },
  {
    category: "Shopify",
    projectDetail: [
      {
        src: "/assets/images/screencapture-atjaunojies-qid40bnt-myshopify-2026-09-24-17_31_07.jpg",
        name: "Atjaunojies",
        link: "https://atjaunojies-qid40bnt.myshopify.com/",
        description:
          "A complete Shopify store delivered in 7 days. Includes full product setup, custom store design, app system integration, a custom single product detail page, and end-to-end payment integration.",
        features: [
          "Full product catalog setup",
          "Custom store design",
          "App system integration",
          "Custom single product detail page",
          "Complete payment integration",
          "Delivered in 7 days"
        ],
        technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
        date: "September 2026",
        gallery: [
          "/assets/images/screencapture-atjaunojies-qid40bnt-myshopify-2026-09-24-17_31_07.jpg"
        ]
      },
      {
        src: "/assets/images/screencapture-laniglow-2026-09-24-17_38_18.jpg",
        name: "Lani Glow",
        link: "https://laniglow.com/",
        description:
          "A complete Shopify store delivered in 7 days. Includes full product setup, custom store design, app system integration, a custom single product detail page, and end-to-end payment integration.",
        features: [
          "Full product catalog setup",
          "Custom store design",
          "App system integration",
          "Custom single product detail page",
          "Complete payment integration",
          "Delivered in 7 days"
        ],
        technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
        date: "September 2026",
        gallery: [
          "/assets/images/screencapture-laniglow-2026-09-24-17_38_18.jpg"
        ]
      },
      {
        src: "/assets/images/screencapture-davesdeals-au-2026-09-24-17_40_45.jpg",
        name: "Dave's Deals",
        link: "https://davesdeals.com.au/",
        description:
          "A complete Shopify store delivered in 10 days. Includes full product setup, custom store design, app system integration, a custom single product detail page, custom image animations, a card preloader before images load, and end-to-end payment integration.",
        features: [
          "Full product catalog setup",
          "Custom store design",
          "App system integration",
          "Custom single product detail page",
          "Custom image animations",
          "Image card preloader",
          "Complete payment integration",
          "Delivered in 10 days"
        ],
        technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
        date: "September 2026",
        gallery: [
          "/assets/images/screencapture-davesdeals-au-2026-09-24-17_40_45.jpg"
        ]
      },
      {
        src: "/assets/images/screencapture-spiritual-green-it-myshopify-it-it-2026-09-24-17_44_06.jpg",
        name: "Spiritual Green",
        link: "https://spiritual-green-it.myshopify.com/it-it",
        description:
          "A WordPress-to-Shopify store conversion delivered in 15 days as per client requirements. Includes fully custom-built sliders, design via Shopify editor, complete payment integration, app systems including review handling (Judge.me and similar), and a fully custom single product detail page.",
        features: [
          "WordPress to Shopify store conversion",
          "Fully custom-built sliders",
          "Design with Shopify editor",
          "Complete payment integration",
          "App system setup (Judge.me reviews and more)",
          "Custom single product detail page",
          "Delivered in 15 days"
        ],
        technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "Judge.me"],
        date: "September 2026",
        gallery: [
          "/assets/images/screencapture-spiritual-green-it-myshopify-it-it-2026-09-24-17_44_06.jpg"
        ]
      }
    ]
  },
  {
    category: "Mern Stack",
    comingSoon: true,
    projectDetail: []
  }
];
