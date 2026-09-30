"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Reveal from "@/components/animations/Reveal";
import { faqItems } from "@/lib/faq";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <article className="faq active">
      <header>
        <Reveal>
          <h2 className="h2 article-title mt20">FAQ</h2>
        </Reveal>
      </header>
      <section className="faq-accordion" aria-label="Frequently asked questions">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <Reveal key={item.question} delay={index * 60}>
              <div className={`faq-accordion-item${isOpen ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="faq-accordion-trigger"
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                  <FaChevronDown className="faq-accordion-icon" aria-hidden />
                </button>
                <div
                  className="faq-accordion-panel"
                  hidden={!isOpen}
                  id={`faq-panel-${index}`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>
      <style jsx>{`
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-accordion-item {
          background: var(--eerie-black-2);
          border: 1px solid var(--jet);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .faq-accordion-item.is-open {
          border-color: rgba(255, 214, 10, 0.35);
          box-shadow: var(--shadow-2);
        }

        .faq-accordion-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px 18px;
          background: transparent;
          border: none;
          color: var(--white-2);
          font-size: var(--fs-5);
          font-weight: var(--fw-500);
          text-align: left;
          cursor: pointer;
        }

        .faq-accordion-trigger span {
          display: inline;
          flex: 1;
        }

        .faq-accordion-icon {
          flex-shrink: 0;
          color: var(--orange-yellow-crayola);
          transition: transform 0.25s ease;
        }

        .faq-accordion-item.is-open .faq-accordion-icon {
          transform: rotate(180deg);
        }

        .faq-accordion-panel {
          padding: 0 18px 16px;
        }

        .faq-accordion-panel p {
          color: var(--light-gray);
          font-size: var(--fs-6);
          line-height: 1.65;
          margin: 0;
        }
      `}</style>
    </article>
  );
};

export default Faq;
