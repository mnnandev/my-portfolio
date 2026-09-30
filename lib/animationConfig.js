/** Central animation tokens — tweak durations, easing, and accent here. */
export const ANIM = {
  accent: "#ffd60a",
  accentRgb: "255, 214, 10",
  reveal: {
    durationMs: 600,
    distancePx: 24,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    staggerMs: 100,
  },
  skillBar: {
    durationMs: 1200,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
  heroFloat: {
    durationMs: 5000,
    distancePx: 8,
  },
  heroGlow: {
    durationMs: 4000,
  },
  cursor: {
    dotSizePx: 8,
    ringSizePx: 36,
    ringBorderPx: 1.5,
    lerp: 0.18,
    hoverScale: 1.6,
    clickScale: 0.85,
    fillOpacity: 0.12,
  },
  navbarScroll: {
    thresholdPx: 50,
  },
};
