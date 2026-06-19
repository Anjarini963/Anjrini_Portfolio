"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "./icons";

/**
 * The screenshot carousel shown at the top of the project modal. Shots are real
 * images read from public/projects/<slug>/ (see lib/shots.ts). With more than
 * one shot it gains prev/next arrows, dot navigation, and arrow-key support.
 */
export default function ProjectShots({
  shots,
  title,
}: {
  shots: string[];
  title: string;
}) {
  const [i, setI] = useState(0);
  const count = shots.length;

  // Wrap-around step. Functional update keeps this stable across renders.
  const go = (n: number) => setI((prev) => (prev + n + count) % count);

  // Left/right arrow keys flip through the gallery while the modal is open.
  useEffect(() => {
    if (count < 2) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const current = shots[i];

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2">
      <Image
        src={current}
        alt={`${title} screenshot ${i + 1}`}
        fill
        sizes="(min-width: 640px) 32rem, 100vw"
        className="object-cover"
      />

      {/* Ease the shot into the content band below. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-surface"
      />

      {count > 1 && (
        <>
          {/* Prev / next */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-canvas/70 text-muted backdrop-blur-sm transition-colors hover:text-text"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-canvas/70 text-muted backdrop-blur-sm transition-colors hover:text-text"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
            {shots.map((_, d) => (
              <button
                key={d}
                type="button"
                onClick={() => setI(d)}
                aria-label={`Go to screenshot ${d + 1}`}
                aria-current={d === i}
                className={`h-1.5 rounded-full transition-all ${
                  d === i ? "w-5 bg-accent" : "w-1.5 bg-muted/50 hover:bg-muted"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
