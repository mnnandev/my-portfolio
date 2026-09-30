"use client";

import { useEffect, useState } from "react";

/**
 * @param {React.RefObject<Element | null>} ref
 * @param {{ rootMargin?: string; threshold?: number }} [options]
 */
export function useInViewOnce(ref, options = {}) {
  const { rootMargin = "0px 0px -8% 0px", threshold = 0.12 } = options;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, inView, rootMargin, threshold]);

  return inView;
}
