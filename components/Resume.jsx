"use client";

import React from "react";
import { IoBookOutline } from "react-icons/io5";
import Reveal from "@/components/animations/Reveal";
import AnimatedSkillItem from "@/components/animations/AnimatedSkillItem";
import { ANIM } from "@/lib/animationConfig";

const Resume = () => {
  const stagger = ANIM.reveal.staggerMs;

  return (
    <>
      <article className="resume active">
        <header>
          <Reveal>
            <h2 className="h2 article-title mt20">Resume</h2>
          </Reveal>
        </header>
        <section className="timeline">
          <Reveal>
            <div className="title-wrapper">
              <div className="icon-box">
                <IoBookOutline color="goldenrod" />
              </div>
              <h3 className="h3">Education</h3>
            </div>
          </Reveal>
          <ol className="timeline-list">
            <Reveal
              as="li"
              className="timeline-item anim-timeline-item"
              delay={0}
            >
              <h4 className="h4 timeline-item-title">Graduation</h4>
              <span>2021 — 2026</span>
              <p className="timeline-text">
                I enrolled at the Virtual University of Pakistan (BS Computer
                Science), paused after my first semester to pursue an internship,
                then after 8 months of hands-on web development experience
                got my first job with XemenSolution. I balanced study
                and full-time work, and I successfully completed my degree in
                September 2026.
              </p>
            </Reveal>

            <Reveal
              as="li"
              className="timeline-item anim-timeline-item"
              delay={stagger}
            >
              <h4 className="h4 timeline-item-title">Intermediate</h4>
              <span>2019 — 2021</span>
              <p className="timeline-text">
                Completed Intermediate of Computer Science (ICS) with a focus on
                foundational skills in computer science, enhancing my analytical
                abilities and technical knowledge, essential for my journey in
                web development.
              </p>
            </Reveal>

            <Reveal
              as="li"
              className="timeline-item anim-timeline-item"
              delay={stagger * 2}
            >
              <h4 className="h4 timeline-item-title">High School</h4>
              <span>2017 — 2019</span>
              <p className="timeline-text">
                Completed high school with a focus in Computer Science, studying
                in an English-medium environment. This program covered
                foundational topics in programming, computer systems, and data
                management, equipping me with essential technical and analytical
                skills.
              </p>
            </Reveal>
          </ol>
        </section>
        <section className="timeline">
          <Reveal>
            <div className="title-wrapper">
              <div className="icon-box">
                <IoBookOutline color="goldenrod" />
              </div>
              <h3 className="h3">Experience</h3>
            </div>
          </Reveal>
          <ol className="timeline-list">
            <Reveal
              as="li"
              className="timeline-item anim-timeline-item"
              delay={0}
            >
              <h4 className="h4 timeline-item-title">WordPress Developer</h4>
              <span>3+ years experience</span>
              <p className="timeline-text">
                I now work mainly on WordPress: custom themes, custom plugins,
                Elementor, WooCommerce stores, and performance/SEO optimization.
              </p>
            </Reveal>
            <Reveal
              as="li"
              className="timeline-item anim-timeline-item"
              delay={stagger}
            >
              <h4 className="h4 timeline-item-title">Shopify Developer</h4>
              <span>3+ years experience</span>
              <p className="timeline-text">
                Shopify store setup, custom theme development and customization with
                Liquid, theme migrations, app integrations, and conversion-focused UI.
              </p>
            </Reveal>
            <Reveal
              as="li"
              className="timeline-item anim-timeline-item"
              delay={stagger * 2}
            >
              <h4 className="h4 timeline-item-title">OpenCart Developer</h4>
              <span>2+ years experience</span>
              <p className="timeline-text">
                OpenCart store setup, theme customization, extensions, payment and
                shipping integrations, and e-commerce performance optimization.
              </p>
            </Reveal>
            <Reveal
              as="li"
              className="timeline-item anim-timeline-item"
              delay={stagger * 3}
            >
              <h4 className="h4 timeline-item-title">Full-Stack Developer (MERN)</h4>
              <span>2+ years experience</span>
              <p className="timeline-text">
                I am actively working on MERN stack projects (Next.js, Express.js,
                MongoDB, Node.js), have completed multiple production projects, and
                handle them alongside my WordPress and Shopify work.
              </p>
            </Reveal>
          </ol>
        </section>

        <section className="skill">
          <Reveal>
            <h3 className="h3 skills-title">My skills after 2021</h3>
          </Reveal>
          <ul className="skills-list content-card">
            <AnimatedSkillItem title="WordPress" value={92} />
            <AnimatedSkillItem title="Shopify" value={90} />
            <AnimatedSkillItem title="MERN Stack" value={90} />
          </ul>
        </section>
      </article>
    </>
  );
};

export default Resume;
