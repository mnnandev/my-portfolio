"use client";

import React, { useEffect } from "react";
import CustomCursor from "./CustomCursor";
import ScrollProgress from "./ScrollProgress";
import { ANIM } from "@/lib/animationConfig";

export default function ClientAnimationShell() {
  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector(".navbar");
      if (!nav) return;
      if (window.scrollY > ANIM.navbarScroll.thresholdPx) {
        nav.classList.add("navbar--scrolled");
      } else {
        nav.classList.remove("navbar--scrolled");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
    </>
  );
}
