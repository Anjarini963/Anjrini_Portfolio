"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Render as a different element (e.g. "li", "article"). Defaults to div. */
  as?: ElementType;
  /** Stagger entrance, in ms. */
  delay?: number;
  className?: string;
};

/**
 * Fades/slides its children in once they enter the viewport. Honors
 * prefers-reduced-motion (the CSS shows content immediately in that case) and
 * degrades gracefully without IntersectionObserver.
 */
export default function Reveal({ children, as, delay = 0, className = "" }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle (not one-shot): re-hide when scrolled out of view so the
        // entrance animation replays each time the element comes back.
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
