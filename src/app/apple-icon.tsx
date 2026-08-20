import { ImageResponse } from "next/og";
import { loadOgFont } from "@/lib/og-font";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * The iOS home-screen mark: the wordmark's initial, gold on noir.
 *
 * Same mark as the tab icon at the size Apple asks for. iOS rounds the corners and
 * composites it onto its own background, so the artwork stays a full-bleed square.
 */
export default async function AppleIcon() {
  const serif = await loadOgFont("Playfair Display", 500, "B");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1208",
          color: "#e8d5a3",
          fontFamily: serif ? "Playfair Display" : "serif",
          fontSize: 128,
          // The cap sits slightly high in the em box; nudge it back to optical centre.
          paddingTop: 12,
        }}
      >
        B
      </div>
    ),
    { ...size, fonts: serif ? [serif] : undefined }
  );
}
