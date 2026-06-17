"use client";

import { useEffect, useState } from "react";
import { hero } from "@/lib/content";

/**
 * Headshot slot with a graceful placeholder.
 *
 * Drop a photo at /public/headshot.jpg (or update `hero.headshot` in
 * lib/content.ts to point at any file in /public) and it appears automatically.
 * Until then — or if the file is missing — a calm monogram placeholder shows
 * instead of a broken image.
 *
 * The placeholder is the server-rendered default; we preload the real image in
 * the background and only swap it in once it has loaded successfully. That way
 * a missing file never flashes a broken-image icon (the native error can fire
 * before React hydrates, so an onError handler alone isn't reliable).
 */
/*
 * Framing controls for the square headshot slot. The image is cropped to fill
 * the square (object-cover), so you can drop in any photo and tune it here:
 *
 *   ZOOM  — 1 = no zoom (shows head + shoulders). Raise toward 1.4 to crop in
 *           closer on the face. (For best quality, also crop the photo itself.)
 *   FOCUS — which part to keep centered. "center 25%" pulls the framing UP
 *           toward the face (good for most portraits). Use "center" for middle,
 *           "center 10%" for higher, "center 40%" for lower.
 */
const ZOOM = 1.15;
const FOCUS = "center 25%";

export default function Headshot() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setSrc(hero.headshot);
    img.src = hero.headshot;
    return () => {
      img.onload = null;
    };
  }, []);

  return (
    <div className="gradient-border relative mx-auto aspect-square w-44 overflow-hidden rounded-2xl sm:w-56 md:w-64 lg:w-72">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={hero.headshotAlt}
          className="h-full w-full object-cover"
          style={{ objectPosition: FOCUS, transform: ZOOM !== 1 ? `scale(${ZOOM})` : undefined }}
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-surface-2 text-center"
          role="img"
          aria-label={`${hero.headshotAlt} (placeholder)`}
        >
          <span className="font-mono text-4xl font-semibold text-accent" aria-hidden>
            AA
          </span>
          <span
            className="px-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted"
            aria-hidden
          >
            headshot
            <br />
            /public/headshot.jpg
          </span>
        </div>
      )}
    </div>
  );
}
