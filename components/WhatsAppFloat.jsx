"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "923186812911";
const WHATSAPP_MESSAGE =
  "Hi Manan! I saw your portfolio and would like to discuss a project, get more details, or request a quote.";

const WhatsAppFloat = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp about projects and quotes"
    >
      <span className="whatsapp-float__icon" aria-hidden="true">
        <FaWhatsapp size={26} />
      </span>
      <span className="whatsapp-float__text">
        <span className="whatsapp-float__title">Let&apos;s build something</span>
        <span className="whatsapp-float__subtitle">
          WhatsApp me for project details, quotes &amp; new builds
        </span>
      </span>
      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          right: 1.25rem;
          bottom: 1.25rem;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          max-width: min(320px, calc(100vw - 2rem));
          padding: 0.65rem 0.85rem 0.65rem 0.65rem;
          border-radius: 999px;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          box-shadow:
            0 8px 24px rgba(37, 211, 102, 0.35),
            0 2px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .whatsapp-float:hover {
          transform: translateY(-3px);
          box-shadow:
            0 12px 28px rgba(37, 211, 102, 0.45),
            0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .whatsapp-float__icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
        }

        .whatsapp-float__text {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          line-height: 1.25;
          min-width: 0;
        }

        .whatsapp-float__title {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .whatsapp-float__subtitle {
          font-size: 0.6875rem;
          font-weight: 400;
          opacity: 0.92;
        }

        @media (max-width: 768px) {
          .whatsapp-float {
            right: 1rem;
            bottom: 5.75rem;
            padding: 0;
            border-radius: 50%;
            width: 3.5rem;
            height: 3.5rem;
            min-width: 3.5rem;
            max-width: 3.5rem;
            justify-content: center;
            align-items: center;
          }

          .whatsapp-float__text {
            display: none !important;
          }

          .whatsapp-float__icon {
            width: 100%;
            height: 100%;
            background: transparent;
          }
        }
      `}</style>
    </a>
  );
};

export default WhatsAppFloat;
