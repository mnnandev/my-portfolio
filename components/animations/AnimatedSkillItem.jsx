"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { ANIM } from "@/lib/animationConfig";

export default function AnimatedSkillItem({ title, value }) {
  const ref = useRef(null);
  const inView = useInViewOnce(ref);
  const [width, setWidth] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      setWidth(0);
      setDisplayValue(0);
      return;
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      setWidth(value);
      setDisplayValue(value);
      return;
    }

    setWidth(0);
    setDisplayValue(0);

    const barDuration = ANIM.skillBar.durationMs;
    const start = performance.now();

    let rafId;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / barDuration);
      const eased = 1 - (1 - t) ** 3;
      setWidth(Math.round(value * eased));
      setDisplayValue(Math.round(value * eased));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [inView, value]);

  return (
    <li className="skills-item" ref={ref}>
      <div className="title-wrapper">
        <h5 className="h5">{title}</h5>
        <data value={value}>{displayValue}%</data>
      </div>
      <div className="skill-progress-bg">
        <div
          className="skill-progress-fill anim-skill-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </li>
  );
}
