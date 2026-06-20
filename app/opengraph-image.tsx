import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

/**
 * Build-time-generated social share card (the preview shown when the site link
 * is pasted into LinkedIn / WhatsApp / Slack / iMessage).
 *
 * Rendered from code rather than a static PNG so it stays locked to the live
 * "Sage Onyx" theme — same base (#171a17), same sage→teal accent, same dotted
 * blueprint grid as the page. No design tool, no asset to keep in sync.
 *
 * Next.js auto-wires this into `openGraph.images`; combined with
 * `twitter.card = "summary_large_image"` in the layout, it also serves as the
 * Twitter/X card. The standard OG canvas is 1200×630.
 */
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#171a17",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Dotted blueprint grid — the site's signature backdrop. */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.07) 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
            display: "flex",
          }}
        />
        {/* Ambient sage glow, top-right, echoing the hero. */}
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-120px",
            width: "560px",
            height: "560px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(93,202,165,0.20), transparent 60%)",
            display: "flex",
          }}
        />

        {/* Mono logo mark, top-left. */}
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: 30,
            letterSpacing: "0.04em",
            color: "#9cc587",
          }}
        >
          {profile.logo}
        </div>

        {/* Name + role, anchored bottom-left. */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              color: "#e8ebe6",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              fontSize: 44,
              fontWeight: 600,
              // Sage→teal gradient text — the page's one signature flourish.
              backgroundImage: "linear-gradient(90deg, #9cc587, #5dcaa5)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.role}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
