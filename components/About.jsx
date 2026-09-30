"use client";

import {
  icondesgin,
  iconquote,
  mobIcon,
  webIcon,
} from "@/public/assets/Data";
import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Reveal from "@/components/animations/Reveal";
import { ANIM } from "@/lib/animationConfig";
import { FaClosedCaptioning, FaCode, FaTimes, FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  const [showModel, setShowModel] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [slideStepPx, setSlideStepPx] = useState(0);
  const viewportRef = useRef(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "WordPress Client · E-commerce Owner",
      image: null,
      initial: "S",
      text: "Manan rebuilt our WooCommerce store with custom plugins and Elementor layouts. Page speed and checkout flow improved noticeably, and our conversion rate went up within the first month.",
      project: {
        title: "WordPress & WooCommerce Store",
        description: "Custom WordPress theme, WooCommerce setup, payment gateways, and SEO-focused performance tuning.",
        technologies: ["WordPress", "WooCommerce", "Elementor", "PHP", "MySQL"],
        live: "https://nylihomebuyers.com/",
        duration: "6 weeks",
        challenges: "Balanced heavy product catalogs with fast load times and mobile-first checkout."
      }
    },
    {
      name: "James Carter",
      role: "Shopify Brand Owner",
      image: null,
      initial: "J",
      text: "Our Shopify launch was smooth and on deadline. Manan handled Liquid customization, app integrations, and a custom product page that finally matches our brand.",
      project: {
        title: "Shopify Store Launch",
        description: "End-to-end Shopify build with custom Liquid sections, catalog setup, and conversion-focused product templates.",
        technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
        live: "https://laniglow.com/",
        duration: "7 days",
        challenges: "Delivered a polished storefront with third-party apps and payment setup under a tight timeline."
      }
    },
    {
      name: "Emily Roberts",
      role: "Shopify · Operations Manager",
      image: null,
      initial: "E",
      text: "We migrated from WordPress to Shopify with zero downtime on orders. Manan rebuilt sliders, reviews, and checkout flows — sales stayed stable through the switch.",
      project: {
        title: "WordPress to Shopify Migration",
        description: "Full migration with custom theme work, Judge.me reviews, and payment integration.",
        technologies: ["Shopify", "Liquid", "Judge.me", "JavaScript"],
        live: "https://spiritual-green-it.myshopify.com/it-it",
        duration: "15 days",
        challenges: "Preserved SEO and UX while moving a live catalog to Shopify."
      }
    },
    {
      name: "David Wilson",
      role: "Startup Founder · MERN",
      image: null,
      initial: "D",
      text: "Manan delivered our MERN MVP on schedule — clean API design, solid React UI, and MongoDB schemas that were easy to extend as we onboarded users.",
      project: {
        title: "MERN SaaS MVP",
        description: "Production MERN application with Next.js UI, Express APIs, and MongoDB data layer.",
        technologies: ["Next.js", "Express.js", "MongoDB", "Node.js", "React"],
        live: "https://form-hub-eight.vercel.app/",
        duration: "8 weeks",
        challenges: "Shipped auth, dashboards, and admin tools with room to scale post-launch."
      }
    },
    {
      name: "Michael Chen",
      role: "Product Lead · MERN Stack",
      image: null,
      initial: "M",
      text: "He integrated our React dashboard with Node services and optimized queries so reports load in seconds instead of timing out. Reliable communication throughout.",
      project: {
        title: "Analytics & Admin Portal",
        description: "Full-stack portal with role-based access, reporting, and real-time data views.",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        live: "https://movix-app-qmyi.vercel.app/",
        duration: "10 weeks",
        challenges: "Large datasets and role permissions without sacrificing UX."
      }
    },
    {
      name: "Anna Kowalski",
      role: "OpenCart Store Manager",
      image: null,
      initial: "A",
      text: "Manan fixed our OpenCart theme, shipping rules, and extension conflicts. Orders and inventory sync finally work the way we needed for EU customers.",
      project: {
        title: "OpenCart E-commerce Optimization",
        description: "Theme customization, extension setup, and checkout/shipping workflow improvements.",
        technologies: ["OpenCart", "PHP", "MySQL", "JavaScript"],
        live: "https://synergylandpartners.com",
        duration: "4 weeks",
        challenges: "Legacy extensions and multi-region shipping on a live store."
      }
    },
    {
      name: "Robert Hughes",
      role: "WordPress · Agency Partner",
      image: null,
      initial: "R",
      text: "We white-label WordPress builds with Manan — Elementor Pro, Fluent Forms, and custom PHP where needed. Clients get enterprise-quality sites in days, not months.",
      project: {
        title: "Agency WordPress Delivery",
        description: "Repeatable WordPress delivery with Elementor Pro, forms, and custom functionality.",
        technologies: ["WordPress", "Elementor Pro", "Fluent Forms", "PHP"],
        live: "https://poplasers.com/home/",
        duration: "7 days per site",
        challenges: "Fast turnaround without cutting quality or maintainability."
      }
    },
    {
      name: "Lisa Nguyen",
      role: "Shopify · Marketing Director",
      image: null,
      initial: "L",
      text: "Custom animations and preloaders on our Shopify product pages lifted engagement. Manan understands both design polish and what actually converts.",
      project: {
        title: "Shopify UX & Conversion Pass",
        description: "Custom product pages, motion, and performance tweaks for a retail brand.",
        technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
        live: "https://davesdeals.com.au/",
        duration: "10 days",
        challenges: "Rich visuals while keeping Core Web Vitals in a healthy range."
      }
    }
  ];

  const maxSlideIndex = Math.max(0, testimonials.length - slidesPerView);

  const measureSlider = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    setSlideStepPx(el.clientWidth / slidesPerView);
  }, [slidesPerView]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlideIndex : prev - 1));
  };

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    measureSlider();
    window.addEventListener("resize", measureSlider);
    return () => window.removeEventListener("resize", measureSlider);
  }, [measureSlider]);

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, maxSlideIndex));
  }, [maxSlideIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [maxSlideIndex]);

  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowModel(true);
  };

  const handleContactClick = () => {
    setShowModel(false);
    // Find and click the contact tab
    const contactTab = document.querySelector('[data-tab="contact"]');
    if (contactTab) {
      contactTab.click();
    }
  };

  return (
    <>
      <article className="about active">
        <header className="">
          <Reveal>
            <h2 className="h2 article-title mt20">About me</h2>
          </Reveal>
        </header>
        <section className="about-text">
          <Reveal>
          <p className="about-lead">
            <span className="about-lead-opening">
              Your website is either{" "}
              <span className="about-lead-win">making you money</span> — or{" "}
              <span className="about-lead-loss">losing it</span>.
            </span>{" "}
            Manan Mazhar (also known as Mnnan) is a Full Stack Developer from
            Pakistan who builds Shopify stores, WordPress and WooCommerce
            websites, OpenCart stores and MERN stack applications. He runs the
            digital agency Starlent Tech. With 5+ years of experience and 200+
            client projects, he delivers store launches, custom plugins, and
            scalable web apps. Open to freelance and long-term collaborations.
          </p>
          </Reveal>
        </section>

        <section className="service">
          <Reveal>
            <h3 className="h3 service-title">What I do</h3>
          </Reveal>
          <ul className="service-list">
            <Reveal as="li" className="service-item" delay={0}>
              <div className="service-icon-box">
                <Image
                  src={webIcon}
                  alt="MERN stack icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">MERN Stack apps</h4>
                <p className="service-item-text">
                  Build fast, scalable web apps with React, Node.js, Express,
                  and MongoDB.
                </p>
              </div>
            </Reveal>
            <Reveal as="li" className="service-item" delay={ANIM.reveal.staggerMs}>
              <div className="service-icon-box">
                <Image
                  src={mobIcon}
                  alt="E-commerce icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">E-commerce stores</h4>
                <p className="service-item-text">
                  Develop high-converting stores on Shopify, OpenCart, and
                  WooCommerce.
                </p>
              </div>
            </Reveal>
            <Reveal as="li" className="service-item" delay={ANIM.reveal.staggerMs * 2}>
              <div className="service-icon-box">
                <Image
                  src={icondesgin}
                  alt="WordPress icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">WordPress sites</h4>
                <p className="service-item-text">
                  Create custom WordPress sites that rank, convert, and impress.
                </p>
              </div>
            </Reveal>
            <Reveal as="li" className="service-item" delay={ANIM.reveal.staggerMs * 3}>
              <div className="service-icon-box text-[#FFCD67]">
                <FaCode color="#FFCD67" fontSize={39} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">AI integrations</h4>
                <p className="service-item-text">
                  Integrate AI-powered solutions to automate workflows and
                  accelerate growth.
                </p>
              </div>
            </Reveal>
          </ul>
        </section>

        <section className="testimonials">
          <Reveal>
            <h3 className="h3 testimonials-title">Testimonials</h3>
          </Reveal>
          <div className="testimonials-slider-container">
            <button type="button" className="slider-nav prev" onClick={prevSlide} aria-label="Previous review">
              <FaChevronLeft />
            </button>
            <div className="testimonials-slider-viewport" ref={viewportRef}>
              <div
                className="testimonials-slider"
                style={{
                  transform: `translateX(-${currentSlide * slideStepPx}px)`,
                }}
              >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-slide"
                  style={{ flex: `0 0 ${100 / slidesPerView}%` }}
                >
                  <div 
                    className="testimonial-card"
                    onClick={() => handleTestimonialClick(testimonial)}
                  >
                    <div className="testimonial-header">
                      <div className="testimonial-avatar">
                        {testimonial.image ? (
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="avatar-fallback">
                            {testimonial.initial}
                          </div>
                        )}
                      </div>
                      <div className="testimonial-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <Image
                        src={iconquote}
                        alt="quote"
                        width={24}
                        height={24}
                        className="quote-icon"
                      />
                      <p>{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
            <button type="button" className="slider-nav next" onClick={nextSlide} aria-label="Next review">
              <FaChevronRight />
            </button>
            <div className="slider-dots">
              {Array.from({ length: maxSlideIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <div className={`modal-container ${showModel ? "active" : ""}`}>
          <div className="overlay" onClick={() => setShowModel(false)} />
          <section className="testimonials-modal">
            <button
              className="modal-close-btn"
              onClick={() => setShowModel(false)}
            >
              <FaTimes />
            </button>
            {selectedTestimonial && (
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-avatar">
                    {selectedTestimonial.image ? (
                      <Image
                        src={selectedTestimonial.image}
                        alt={selectedTestimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="avatar-fallback-large">
                        {selectedTestimonial.initial}
                      </div>
                    )}
                  </div>
                  <div className="modal-title-section">
                    <h3 className="modal-title">{selectedTestimonial.project.title}</h3>
                    <p className="modal-subtitle">{selectedTestimonial.name} - {selectedTestimonial.role}</p>
                  </div>
                </div>
                
                <div className="modal-body">
                  <div className="project-details">
                    <p className="project-description">{selectedTestimonial.project.description}</p>
                    
                    <div className="project-tech">
                      <h4>Technologies Used:</h4>
                      <div className="tech-tags">
                        {selectedTestimonial.project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project-info">
                      <p><strong>Duration:</strong> {selectedTestimonial.project.duration}</p>
                      <p><strong>Key Challenges:</strong> {selectedTestimonial.project.challenges}</p>
                    </div>

                    <div className="project-links">
                      <a href={selectedTestimonial.project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button className="contact-btn" onClick={handleContactClick}>
                    Contact Me
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>

        <style jsx>{`
          .testimonials-slider-container {
            position: relative;
            width: 100%;
            max-width: 720px;
            margin: 2rem auto;
            padding: 0 3rem;
          }

          @media (min-width: 768px) {
            .testimonials-slider-container {
              max-width: 900px;
            }
          }

          .testimonials-slider-viewport {
            overflow: hidden;
            width: 100%;
            border-radius: 4px;
          }

          .testimonials-slider {
            display: flex;
            align-items: flex-start;
            transition: transform 0.5s ease-in-out;
            will-change: transform;
          }

          .testimonial-slide {
            padding: 0 0.4rem;
            box-sizing: border-box;
          }

          .testimonial-card {
            background: var(--eerie-black-2);
            border: 1px solid var(--jet);
            border-radius: 14px;
            padding: 1.25rem;
            box-shadow: var(--shadow-2);
            cursor: pointer;
            transition: var(--transition-1);
          }

          @media (min-width: 768px) {
            .testimonial-card {
              padding: 1.35rem;
            }
          }

          .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-3);
          }

          .testimonial-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
          }

          .testimonial-avatar {
            position: relative;
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            overflow: hidden;
          }

          .avatar-fallback {
            width: 100%;
            height: 100%;
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
          }

          .testimonial-info h4 {
            color: var(--white-2);
            font-size: var(--fs-3);
            font-weight: var(--fw-500);
            margin: 0;
          }

          .testimonial-info p {
            color: var(--light-gray);
            font-size: var(--fs-6);
            margin: 0.25rem 0 0;
          }

          .testimonial-content {
            position: relative;
            padding-left: 1.5rem;
          }

          .quote-icon {
            position: absolute;
            top: -0.5rem;
            left: -0.5rem;
            opacity: 0.2;
          }

          .testimonial-content p {
            color: var(--light-gray);
            font-size: var(--fs-6);
            line-height: 1.6;
            margin: 0;
          }

          .slider-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: var(--eerie-black-2);
            border: 1px solid var(--jet);
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--orange-yellow-crayola);
            transition: var(--transition-1);
            z-index: 10;
          }

          .slider-nav:hover {
            transform: translateY(-50%) scale(1.1);
            box-shadow: var(--shadow-2);
          }

          .slider-nav.prev {
            left: 0.25rem;
          }

          .slider-nav.next {
            right: 0.25rem;
          }

          .slider-dots {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1.5rem;
          }

          .dot {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background: var(--jet);
            border: none;
            padding: 0;
            cursor: pointer;
            transition: var(--transition-1);
          }

          .dot.active {
            background: var(--orange-yellow-crayola);
            transform: scale(1.2);
          }

          .modal-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: var(--transition-1);
          }

          .modal-container.active {
            opacity: 1;
            visibility: visible;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--smoky-black);
            opacity: 0.8;
          }

          .testimonials-modal {
            position: relative;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            background: var(--eerie-black-2);
            border: 1px solid var(--jet);
            border-radius: 14px;
            padding: 2rem;
            box-shadow: var(--shadow-5);
            z-index: 1001;
          }

          .modal-close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: var(--onyx);
            border-radius: 8px;
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--white-2);
            font-size: 18px;
            opacity: 0.7;
            transition: var(--transition-1);
          }

          .modal-close-btn:hover {
            opacity: 1;
          }

          .modal-header {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }

          .modal-avatar {
            flex-shrink: 0;
          }

          .avatar-fallback-large {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            font-weight: bold;
          }

          .modal-title-section {
            flex-grow: 1;
          }

          .modal-title {
            color: var(--white-2);
            font-size: var(--fs-2);
            font-weight: var(--fw-500);
            margin: 0;
          }

          .modal-subtitle {
            color: var(--light-gray);
            font-size: var(--fs-6);
            margin: 0.5rem 0 0;
          }

          .project-details {
            margin-bottom: 2rem;
          }

          .project-description {
            color: var(--light-gray);
            font-size: var(--fs-6);
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .project-tech {
            margin-bottom: 1.5rem;
          }

          .project-tech h4 {
            color: var(--white-2);
            font-size: var(--fs-4);
            font-weight: var(--fw-500);
            margin-bottom: 0.75rem;
          }

          .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .tech-tag {
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
            padding: 0.25rem 0.75rem;
            border-radius: 8px;
            font-size: var(--fs-7);
            font-weight: var(--fw-500);
          }

          .project-info {
            margin-bottom: 1.5rem;
          }

          .project-info p {
            color: var(--light-gray);
            font-size: var(--fs-6);
            margin: 0.5rem 0;
          }

          .project-links {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .project-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
            border-radius: 8px;
            font-size: var(--fs-6);
            font-weight: var(--fw-500);
            text-decoration: none;
            transition: var(--transition-1);
          }

          .project-link:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-2);
          }

          .contact-btn {
            width: 100%;
            padding: 1rem;
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
            border: none;
            border-radius: 8px;
            font-size: var(--fs-6);
            font-weight: var(--fw-500);
            cursor: pointer;
            transition: var(--transition-1);
          }

          .contact-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-2);
          }

          @media (max-width: 640px) {
            .testimonials-slider-container {
              padding: 0;
            }

            .testimonial-slide {
              padding: 0 0.5rem;
            }

            .testimonial-card {
              padding: 1.5rem;
            }

            .slider-nav {
              width: 2rem;
              height: 2rem;
            }

            .testimonials-modal {
              padding: 1.5rem;
            }

            .modal-header {
              flex-direction: column;
              text-align: center;
            }

            .project-links {
              flex-direction: column;
            }
          }
        `}</style>
      </article>
    </>
  );
};

export default About;
