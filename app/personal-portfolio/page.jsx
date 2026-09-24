"use client";
import About from "@/components/About";
import Aside from "@/components/Aside";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const PersonalPortfolio = () => {
  const [activeRoute, setActiveRoute] = useState("portfolio");
  const [lightMode, setLightMode] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false); // Ensure no flicker

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

  // Only render once hydration is complete
  if (!isHydrated) return null;

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
          {activeRoute === "about" ? <About /> : ""}
          {activeRoute === "resume" ? <Resume /> : ""}
          {activeRoute === "portfolio" ? <Portfolio /> : ""}
          {activeRoute === "contact" ? <Contact /> : ""}
        </div>
      </main>
    </>
  );
};

export default PersonalPortfolio;
