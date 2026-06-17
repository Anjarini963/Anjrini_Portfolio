"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

/**
 * Dark/light switch. The initial theme is applied pre-paint by the inline
 * script in layout.tsx (dark by default), so this component only mirrors and
 * persists changes. We read the actual <html> class on mount to stay in sync
 * with that script and avoid a hydration mismatch.
 */
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable — non-fatal */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      aria-pressed={mounted ? isDark : undefined}
      className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-text"
    >
      {/* Render only after mount so the icon matches the resolved theme. */}
      {mounted && (isDark ? <MoonIcon /> : <SunIcon />)}
    </button>
  );
}
