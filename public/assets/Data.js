import avtar from "@/public/assets/images/my-avatar.png";
import mnnan from "@/public/assets/images/profile-image-mnnan.jpg";
import icondesgin from "@/public/assets/images/icon-design.svg";
import webIcon from "@/public/assets/images/icon-dev.svg";
import mobIcon from "@/public/assets/images/icon-app.svg";
import iconphoto from "@/public/assets/images/icon-photo.svg";
import avatar1 from "@/public/assets/images/avatar-1.png";
import iconquote from "@/public/assets/images/icon-quote.svg";
import project1 from "@/public/assets/images/project-1.jpg";

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
    category: "Frontend",
    projectDetail: [
      {
        src: "/assets/images/formhub.png",
        name: "Form Hub",
        link: "https://form-hub-eight.vercel.app/",
        description: "FarmHub is a modern agricultural platform blending sustainable practices with smart technology to revolutionize farming. It offers eco-friendly solutions, premium produce, and expert services to empower farmers and nourish communities.",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        date: "March 2024",
        githubUrl: "https://github.com/username/form-hub",
        gallery: [
          "/assets/images/formhub.png",
          "/assets/images/formhub-detail.png",
          "/assets/images/formhub-mobile.png"
        ]
      },
      {
        src: "/assets/images/anime.png",
        name: "Anime App",
        link: "https://anime-app-two.vercel.app/",
        technologies: ["React", "Jikan API"],
        date: "June 2023",
        githubUrl: "https://github.com/username/anime-app"
      }
    ]
  },
  {
    category: "Wordpress",
    subcategories: ["Theme", "Plugin", "Project"],
    projectDetail: [
      {
        src: "/assets/images/screencapture-poplasers-home-2026-09-24-17_49_24.png",
        name: "POP Lasers",
        link: "https://poplasers.com/home/",
        subcategory: "Project",
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
          "/assets/images/screencapture-poplasers-home-2026-09-24-17_49_24.png"
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
          "A travel metasearch platform converted from a complete Figma design into a fully functional WordPress website in 7 days — frontend and backend end to end. Users compare flights, hotels, cars, cruises, tours, trains, and insurance in one place. Pegazus does not sell tickets directly; it connects travelers to the best deals from hundreds of providers worldwide.",
        features: [
          "Figma → WordPress pixel-perfect conversion",
          "7 full pages built from scratch",
          "Custom frontend (HTML, CSS, JS) in WordPress",
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
        src: "/assets/images/synergylandpartners.png",
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
        gallery: [
          "/assets/images/synergylandpartners.png",
          "/assets/images/synergylandpartners-mobile.png"
        ]
      },
      {
        src: "/assets/images/nylihomebuyers.png",
        name: "Nyli Home Buyers",
        link: "https://nylihomebuyers.com/",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "January 2024",
        githubUrl: "https://github.com/username/nyli-home-buyers"
      },
      {
        src: "/assets/images/maidsbygrace.png",
        name: "Maids by Grace",
        link: "https://maidsbygrace.com/",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "June 2023"
      },
      {
        src: "/assets/images/assetrsus.png",
        name: "Assetrsus",
        link: "https://assetrsus.com",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "July 2022"
      },
      {
        src: "/assets/images/interwood.png",
        name: "Interwood",
        link: "https://interwood.com",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "June 2022"
      },
      {
        src: "/assets/images/brightside.png",
        name: "Brightside",
        link: "https://brightside.com",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "February 2022"
      },
      {
        src: "/assets/images/bookclubs.png",
        name: "Bookclubs",
        link: "https://bookclubs.com/",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "January 2022"
      },
      {
        src: "/assets/images/eco-mail.png",
        name: "Eco Mail",
        link: "https://eco-mail.com",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "December 2021"
      },
      {
        src: "/assets/images/boulevard.png",
        name: "Boulevard",
        link: "https://boulevard.com",
        subcategory: "Project",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "November 2021"
      },
      {
        src: "/assets/images/smilebigdreambigger.png",
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
        src: "/assets/images/screencapture-atjaunojies-qid40bnt-myshopify-2026-09-24-17_31_07.png",
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
          "/assets/images/screencapture-atjaunojies-qid40bnt-myshopify-2026-09-24-17_31_07.png"
        ]
      },
      {
        src: "/assets/images/screencapture-laniglow-2026-09-24-17_38_18.png",
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
          "/assets/images/screencapture-laniglow-2026-09-24-17_38_18.png"
        ]
      },
      {
        src: "/assets/images/screencapture-davesdeals-au-2026-09-24-17_40_45.png",
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
          "/assets/images/screencapture-davesdeals-au-2026-09-24-17_40_45.png"
        ]
      },
      {
        src: "/assets/images/screencapture-spiritual-green-it-myshopify-it-it-2026-09-24-17_44_06.png",
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
          "/assets/images/screencapture-spiritual-green-it-myshopify-it-it-2026-09-24-17_44_06.png"
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
