import { ImageResponse } from "next/og";

/**
 * Generated favicon — the "AA" monogram on a sage rounded square, matching the
 * site accent (#9cc587) on the onyx base. Code-generated for the same reason as
 * the OG card: no binary asset to maintain, always on-palette. Next.js serves
 * this at /icon and references it from <head> automatically.
 */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#9cc587",
          borderRadius: "7px",
          color: "#1f3614",
          fontSize: 19,
          fontWeight: 700,
          fontFamily: "monospace",
          letterSpacing: "-0.04em",
        }}
      >
        AA
      </div>
    ),
    { ...size },
  );
}
