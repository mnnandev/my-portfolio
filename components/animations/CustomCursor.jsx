"use client";

import React, { useEffect, useRef } from "react";
import { ANIM } from "@/lib/animationConfig";

const VIEW_LABEL = "View";

export default function CustomCursor() {
  const rootRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  const pos = useRef({ x: 0, y: 0, ringX: 0, ringY: 0 });
  const state = useRef({
    active: false,
    mode: "default",
    clicking: false,
  });
  const rafId = useRef(0);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reduced) return;

    document.body.classList.add("custom-cursor-active");

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    const root = rootRef.current;
    if (!dot || !ring || !root) return;

    const setVisible = (visible) => {
      root.style.opacity = visible ? "1" : "0";
      state.current.active = visible;
    };

    setVisible(false);

    const applyRingStyle = () => {
      const { ringX, ringY } = pos.current;
      const { mode, clicking } = state.current;
      let scale = 1;

      ring.classList.remove(
        "custom-cursor-ring--view",
        "custom-cursor-ring--hover"
      );

      if (clicking) {
        scale = ANIM.cursor.clickScale;
      } else if (mode === "view") {
        ring.classList.add("custom-cursor-ring--view");
      } else if (mode === "hover") {
        ring.classList.add("custom-cursor-ring--hover");
      } else if (mode === "text") {
        scale = 0.4;
      }

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;

      if (label) {
        label.style.opacity = mode === "view" && !clicking ? "1" : "0";
      }
    };

    const loop = () => {
      const { x, y } = pos.current;
      pos.current.ringX += (x - pos.current.ringX) * ANIM.cursor.lerp;
      pos.current.ringY += (y - pos.current.ringY) * ANIM.cursor.lerp;

      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      applyRingStyle();

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    const resolveMode = (target) => {
      if (!(target instanceof Element)) return "default";
      if (target.closest("input, textarea, select, [contenteditable='true']")) {
        return "text";
      }
      if (target.closest('[data-cursor="view"]')) return "view";
      if (
        target.closest(
          'a, button, [role="button"], [data-cursor="hover"], .form-btn, .navbar-link, .view-details-btn, .live-demo-btn, .show-more-btn, .filter-item button'
        )
      ) {
        return "hover";
      }
      return "default";
    };

    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (!state.current.active) setVisible(true);
      state.current.mode = resolveMode(e.target);
    };

    const onLeave = () => setVisible(false);

    const onEnter = () => {
      /* wait for move before showing — avoids 0,0 flash */
    };

    const onDown = () => {
      state.current.clicking = true;
    };

    const onUp = () => {
      state.current.clicking = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(rafId.current);
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <div ref={rootRef} className="custom-cursor-root" aria-hidden="true">
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring">
        <span ref={labelRef} className="custom-cursor-label">
          {VIEW_LABEL}
        </span>
      </div>
    </div>
  );
}
