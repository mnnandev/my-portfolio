'use client'

import { mnnan, PROFILE_PLACEHOLDER } from "@/public/assets/Data";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  MdMailOutline,
  MdPhone,
  MdCalendarToday,
  MdLocationOn,
} from "react-icons/md";
import { FaFacebook, FaInstagram, FaAngleDown, FaLinkedin, FaGithub } from "react-icons/fa";

const Aside = () => {
  const [show, setShow] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState(mnnan);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const syncOpen = () => {
      if (mq.matches) setShow(true);
    };
    syncOpen();
    mq.addEventListener("change", syncOpen);
    return () => mq.removeEventListener("change", syncOpen);
  }, []);

  return (
    <aside className={`sidebar ${show ? "active" : ""}`}>
      <div className="sidebar-info">
        <div className="avatar-box hero-avatar-float">
          <span className="hero-avatar-glow" aria-hidden="true" />
          <Image
            src={avatarSrc}
            alt="Manan Mazhar, Full Stack Developer"
            height={130}
            width={130}
            onError={() => setAvatarSrc(PROFILE_PLACEHOLDER)}
          />
        </div>
        <div className="info-content sidebar-info-content">
          <h1 className="name sidebar-name">Manan Mazhar</h1>
          <p className="title sidebar-tagline">
            MERN · WordPress · Shopify — full-stack builds
          </p>
        </div>
        <button type="button" className="info_more-btn" onClick={() => setShow(!show)}>
          <FaAngleDown className="text-[#ffda6b]" />
        </button>
      </div>

      <div className="sidebar-info_more">
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MdMailOutline color="goldenrod" size={24} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:mnnanhavibhutta@gmail.com" className="contact-link">
                mnnanhavibhutta@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <MdPhone color="goldenrod" size={24} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+923186812911" className="contact-link">
                +923186812911
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <MdCalendarToday color="goldenrod" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2003-04-28">April 28, 2003</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <MdLocationOn color="goldenrod" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Vehair</p>
              <address>vehari,punjab,pakistan</address>
            </div>
          </li>
        </ul>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/manan-mazhar-453b9b2b2/"
              className="social-link"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Manan Mazhar on LinkedIn"
            >
              <FaLinkedin className="text-gray-300" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://github.com/mnnandev"
              className="social-link"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Manan Mazhar on GitHub"
            >
              <FaGithub className="text-gray-300" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://web.facebook.com/mnnan.bhutta.94"
              className="social-link"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Manan Mazhar on Facebook"
            >
              <FaFacebook className="text-gray-300" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.instagram.com/mananmazhardev/"
              className="social-link"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Manan Mazhar on Instagram"
            >
              <FaInstagram className="text-gray-300" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
