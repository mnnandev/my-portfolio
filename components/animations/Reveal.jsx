"use client";

import React, { useRef } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { ANIM } from "@/lib/animationConfig";

/**
 * Additive scroll reveal wrapper. Final visible state matches unwrapped layout.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  displayContents = false,
  rootMargin,
  threshold,
  style,
  ...rest
}) {
  const ref = useRef(null);
  const inView = useInViewOnce(ref, { rootMargin, threshold });

  return (
    <Tag
      ref={ref}
      className={`anim-reveal${inView ? " anim-reveal--visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{
        ...(displayContents ? { display: "contents" } : undefined),
        ...(delay
          ? { transitionDelay: `${delay}ms` }
          : undefined),
        ...style,
      }}
      data-anim-reveal-duration={ANIM.reveal.durationMs}
      {...rest}
    >
      {children}
    </Tag>
  );
}
