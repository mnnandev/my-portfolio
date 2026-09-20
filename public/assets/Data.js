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
        src: "/assets/images/natural-cleaning.png",
        name: "Natural Cleaning Form",
        link: "https://natural-cleanig.vercel.app/",
        technologies: ["React", "Tailwind CSS"],
        date: "February 2024",
        githubUrl: "https://github.com/username/natural-cleaning"
      },
      {
        src: "/assets/images/Catpedigree.png",
        name: "Catpedigree",
        link: "https://catpedigree.vercel.app/",
        technologies: ["React", "Tailwind CSS"],
        date: "January 2024",
        githubUrl: "https://github.com/username/catpedigree"
      },
      {
        src: "/assets/images/Exploradoor.png",
        name: "Xploradoor",
        link: "https://xploradoor.vercel.app/",
        technologies: ["React", "Next.js"],
        date: "December 2023",
        githubUrl: "https://github.com/username/xploradoor"
      },
      {
        src: "/assets/images/Gifo.png",
        name: "Gifo",
        link: "https://g-ifo-app.vercel.app/",
        technologies: ["React", "Tailwind CSS"],
        date: "November 2023",
        githubUrl: "https://github.com/username/gifo"
      },
      {
        src: "/assets/images/zoom-clone.png",
        name: "Zoom Clone",
        link: "https://zoom-clone-uyg4.vercel.app/",
        technologies: ["React", "WebRTC"],
        date: "October 2023",
        githubUrl: "https://github.com/username/zoom-clone"
      },
      {
        src: "/assets/images/movix-app.png",
        name: "Movix App",
        link: "https://movix-app-qmyi.vercel.app/",
        technologies: ["React", "TMDB API"],
        date: "September 2023",
        githubUrl: "https://github.com/username/movix-app"
      },
      {
        src: "/assets/images/inco-landing-page-desing.png",
        name: "Inco Landing Page",
        link: "https://tour-m3s7.vercel.app/",
        technologies: ["React", "Tailwind CSS"],
        date: "August 2023",
        githubUrl: "https://github.com/username/inco-landing"
      },
      {
        src: "/assets/images/pokemon.png",
        name: "Pokemon App",
        link: "https://pokemon-app-p4wp.vercel.app",
        technologies: ["React", "PokeAPI"],
        date: "July 2023",
        githubUrl: "https://github.com/username/pokemon-app"
      },
      {
        src: "/assets/images/anime.png",
        name: "Anime App",
        link: "https://anime-app-two.vercel.app/",
        technologies: ["React", "Jikan API"],
        date: "June 2023",
        githubUrl: "https://github.com/username/anime-app"
      },
      {
        src: "/assets/images/ws-tect.png",
        name: "WS Tech",
        link: "https://wstech-mnnandev.vercel.app/",
        technologies: ["Tailwind CSS"],
        date: "May 2023",
        githubUrl: "https://github.com/username/ws-tech"
      },
      {
        src: "/assets/images/first-portfolio.png",
        name: "First Portfolio",
        link: "https://my-portfolio-gamma-seven-60.vercel.app/",
        technologies: ["React", "CSS"],
        date: "April 2023",
        githubUrl: "https://github.com/username/first-portfolio"
      },
      {
        src: "/assets/images/youtube-clone.png",
        name: "Youtube Clone",
        link: "https://youtube-clone-v3-jeth-78d17rikv-mnnandev.vercel.app/",
        technologies: ["React", "YouTube API"],
        date: "March 2023",
        githubUrl: "https://github.com/username/youtube-clone"
      }
    ]
  },
  {
    category: "Wordpress",
    projectDetail: [
      {
        src: "/assets/images/synergylandpartners.png",
        name: "Synergy Land Partners",
        link: "https://synergylandpartners.com",
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
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "January 2024",
        githubUrl: "https://github.com/username/nyli-home-buyers"
      },
      {
        src: "/assets/images/healthstylewellness.png",
        name: "Health Style Wellness",
        link: "https://healthstylewellness.com/",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "December 2023",
        githubUrl: "https://github.com/username/health-style-wellness"
      },
      {
        src: "/assets/images/medconnectstaffing.png",
        name: "Med Connect Staffing",
        link: "https://medconnectstaffing.com/",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "November 2023"
      },
      {
        src: "/assets/images/captivate-media.png",
        name: "Captivate Media",
        link: "https://captivate-media.vervixsolutions.com/",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "September 2023"
      },
      {
        src: "/assets/images/thepuppyposeyoga.png",
        name: "The Puppy Pose Yoga",
        link: "https://thepuppyposeyoga.com/",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "August 2023"
      },
      {
        src: "/assets/images/screencapture-brightfuturesclub.png",
        name: "Bright Futures Club",
        link: "https://brightfuturesclub.net/",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "July 2023"
      },
      {
        src: "/assets/images/maidsbygrace.png",
        name: "Maids by Grace",
        link: "https://maidsbygrace.com/",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "June 2023"
      },
      {
        src: "/assets/images/gfleadership.png",
        name: "GF Leadership",
        link: "https://gfleadership.com/",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "May 2023"
      },
      {
        src: "/assets/images/renniecurran.png",
        name: "Rennie Curran",
        link: "https://renniecurran.com",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "April 2023"
      },
      {
        src: "/assets/images/taxconsultant.png",
        name: "Tax Consultant",
        link: "https://taxconsultant.techtitanstudio.com/",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "March 2023"
      },
      {
        src: "/assets/images/Equote-life.png",
        name: "Equote Life",
        link: "https://equotelifeinsure.com/",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "February 2023"
      },
      {
        src: "/assets/images/mellowmushroo.png",
        name: "Mellow Mushroom",
        link: "https://mellowmushroom.com",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "January 2023"
      },
      {
        src: "/assets/images/ruizsalon.png",
        name: "Ruiz Salon",
        link: "https://ruizsalon.com",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "December 2022"
      },
      {
        src: "/assets/images/Gary-sprak.png",
        name: "Gary Karp Speaks",
        link: "https://garykarpspeaks.com/",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "November 2022"
      },
      {
        src: "/assets/images/Hip-lizard.png",
        name: "Hip Lizard",
        link: "https://hiplizard.com/",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "October 2022"
      },
      {
        src: "/assets/images/savvyinnovator.png",
        name: "Savvy Innovator",
        link: "https://savvyinnovator.com",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "September 2022"
      },
      {
        src: "/assets/images/urbanrealestate.png",
        name: "Urban Real Estate",
        link: "https://urbanrealestate.com",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "August 2022"
      },
      {
        src: "/assets/images/assetrsus.png",
        name: "Assetrsus",
        link: "https://assetrsus.com",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "July 2022"
      },
      {
        src: "/assets/images/interwood.png",
        name: "Interwood",
        link: "https://interwood.com",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "June 2022"
      },
      {
        src: "/assets/images/dentalpro7.png",
        name: "Dentalpro7",
        link: "https://dentalpro7.com",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "May 2022"
      },
      {
        src: "/assets/images/proservicesus.png",
        name: "Proservicesus",
        link: "https://proservicesus.com",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "April 2022"
      },
      {
        src: "/assets/images/predawnsolutions.xemensolutions.tech.png",
        name: "Predawn Solutions",
        link: "https://predawnsolutions.xemensolutions.tech",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "March 2022"
      },
      {
        src: "/assets/images/brightside.png",
        name: "Brightside",
        link: "https://brightside.com",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "February 2022"
      },
      {
        src: "/assets/images/bookclubs.png",
        name: "Bookclubs",
        link: "https://bookclubs.com",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "January 2022"
      },
      {
        src: "/assets/images/eco-mail.png",
        name: "Eco Mail",
        link: "https://eco-mail.com",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "December 2021"
      },
      {
        src: "/assets/images/boulevard.png",
        name: "Boulevard",
        link: "https://boulevard.com",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "November 2021"
      },
      {
        src: "/assets/images/smilebigdreambigger.png",
        name: "Smile Big Dream Bigger",
        link: "https://smilebigdreambigger.org",
        technologies: ["WordPress", "PHP", "MySQL"],
        date: "October 2021"
      }
    ]
  },
  {
    category: "Mern Stack",
    projectDetail: [
      {
        src: "/assets/images/project-1.jpg",
        name: "Finance Management System",
        link: "https://mern-project1.com",
        description: "A comprehensive financial management system built with the MERN stack.",
        features: [
          "User authentication and authorization",
          "Financial data visualization",
          "Transaction management",
          "Budget tracking",
          "Report generation"
        ],
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "Chart.js"],
        date: "January 2024",
        githubUrl: "https://github.com/username/finance-management",
        gallery: [
          "/assets/images/project-1.jpg",
          "/assets/images/project-1-detail.jpg"
        ]
      },
      {
        src: "/assets/images/project-1.jpg",
        name: "E-commerce Platform",
        link: "https://mern-project2.com",
        technologies: ["MongoDB", "Express.js", "React", "Node.js"],
        date: "December 2023",
        githubUrl: "https://github.com/username/ecommerce-platform"
      },
      {
        src: "/assets/images/project-1.jpg",
        name: "Task Management System",
        link: "https://mern-project3.com",
        technologies: ["MongoDB", "Express.js", "React", "Node.js"],
        date: "November 2023",
        githubUrl: "https://github.com/username/task-management"
      },
      {
        src: "/assets/images/project-1.jpg",
        name: "Social Media Dashboard",
        link: "https://mern-project4.com",
        technologies: ["MongoDB", "Express.js", "React", "Node.js"],
        date: "October 2023",
        githubUrl: "https://github.com/username/social-dashboard"
      }
    ]
  }
];
