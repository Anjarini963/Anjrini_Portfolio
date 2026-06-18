"use client";

import { useEffect, useRef } from "react";

/**
 * A soft sage light that follows the cursor — an interactive extension of the
 * site's "aurora" glow. Fixed overlay, screen-blended so it only adds light and
 * never obscures content. Disabled for touch devices and reduced-motion users.
 * Position updates are throttled to one rAF per frame for smoothness.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let x = 0;
    let y = 0;
    let shown = false;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!shown) {
        el.style.opacity = "1";
        shown = true;
      }
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          raf = 0;
        });
      }
    };

    // Intentionally no mouseleave handler: the glow stays at its last position
    // when the cursor leaves the window rather than disappearing.
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} aria-hidden className="cursor-glow" />;
}
