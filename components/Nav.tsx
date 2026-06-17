"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";
import { CloseIcon, MenuIcon } from "./icons";

const sectionIds = nav.map((item) => item.href.replace("#", ""));

/**
 * Sticky top nav. Tracks the section currently in view to highlight the active
 * link, and collapses to a slide-down menu on mobile. Anchor links rely on the
 * page's native smooth-scroll (set in globals.css).
 */
export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  // Highlight the nav link for whichever section dominates the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="font-mono text-sm text-text transition-colors hover:text-accent"
        >
          {profile.logo}
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  isActive ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 bottom-1 h-px origin-left bg-accent transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden
                />
              </a>
            );
          })}
          <div className="ms-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-text"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-canvas md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-5 py-2 sm:px-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-muted transition-colors hover:text-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
