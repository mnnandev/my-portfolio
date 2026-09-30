"use client";
import About from "@/components/About";
import Aside from "@/components/Aside";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const PersonalPortfolio = () => {
  const [activeRoute, setActiveRoute] = useState("portfolio");
  const [lightMode, setLightMode] = useState(false);
  const [isHydrated, setIsHydrated] = useState(true);

  // Apply theme based on state
  const applyTheme = (isLightMode) => {
    const theme = isLightMode ? "light" : "dark";
    document.querySelector("body").setAttribute("data-theme", theme);
  };

  // Toggle theme and save preference in localStorage
  const toggleTheme = () => {
    const newLightMode = !lightMode; // Toggle mode
    setLightMode(newLightMode); // Update state
    applyTheme(newLightMode); // Apply theme
    localStorage.setItem("theme", newLightMode ? "light" : "dark"); // Save preference
  };

  // Load theme preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isLightMode = savedTheme === "light"; // Check if light mode is saved
    setLightMode(isLightMode); // Set state based on saved preference
    applyTheme(isLightMode); // Apply theme based on preference
    setIsHydrated(true); // Mark as hydrated
  }, []);

  return (
    <>
      <main>
        <Aside />
        <div className="main-content mt-[100px]">
          <span className="red-circle"></span>
          <span className="purple-circle"></span>
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item" onClick={() => setActiveRoute("portfolio")}>
                <button className={`navbar-link ${activeRoute === "portfolio" ? "active" : ""}`}>
                  Portfolio
                </button>
              </li>

              <li className="navbar-item" onClick={() => setActiveRoute("about")}>
                <button className={`navbar-link ${activeRoute === "about" ? "active" : ""}`}>
                  About
                </button>
              </li>

              <li className="navbar-item" onClick={() => setActiveRoute("resume")}>
                <button className={`navbar-link ${activeRoute === "resume" ? "active" : ""}`}>
                  Resume
                </button>
              </li>

              <li className="navbar-item" onClick={() => setActiveRoute("faq")}>
                <button className={`navbar-link ${activeRoute === "faq" ? "active" : ""}`}>
                  FAQ
                </button>
              </li>

              <li className="navbar-item" onClick={() => setActiveRoute("contact")}>
                <button className={`navbar-link ${activeRoute === "contact" ? "active" : ""}`}>
                  Contact
                </button>
              </li>
            </ul>
            <motion.button
              className="p-2 rounded-full focus:outline-none transition duration-300"
              onClick={toggleTheme}
              whileTap={{ rotate: 360 }}
            >
              {lightMode ? <FaMoon className="moon" /> : <FaSun className="sun" />}
            </motion.button>
          </nav>
          <div className={activeRoute === "about" ? "" : "tab-panel-hidden"}>
            <About />
          </div>
          <div className={activeRoute === "resume" ? "" : "tab-panel-hidden"}>
            <Resume />
          </div>
          <div className={activeRoute === "portfolio" ? "" : "tab-panel-hidden"}>
            <Portfolio />
          </div>
          <div className={activeRoute === "faq" ? "" : "tab-panel-hidden"}>
            <Faq />
          </div>
          <div className={activeRoute === "contact" ? "" : "tab-panel-hidden"}>
            <Contact />
          </div>
        </div>
      </main>
      <WhatsAppFloat />
    </>
  );
};

export default PersonalPortfolio;
