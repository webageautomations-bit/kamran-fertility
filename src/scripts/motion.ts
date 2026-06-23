/**
 * SITE MOTION STANDARD
 * ────────────────────
 * Every animation on this site uses this easing and base duration so the
 * whole experience feels like one consistent motion language. Do not
 * introduce ad-hoc eases/durations — import these instead.
 *
 *   ease:     "power3.out"   (confident, decelerating settle)
 *   duration: 0.8s           (base; scale up/down by small multiples only)
 *
 * Reveals, hero headline, stepper, magnetic hovers and scrubbed parallax all
 * reference EASE/DURATION. Scrubbed timelines use scrub (time is scroll-driven)
 * but still use EASE for sub-tweens where applicable.
 */
export const EASE = "power3.out";
export const DURATION = 0.8;
export const STAGGER = 0.12;

/** Single source of truth for the reduced-motion preference. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** True for coarse/touch pointers — used to gate pointer-driven effects. */
export function isTouch(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none), (pointer: coarse)").matches
  );
}
