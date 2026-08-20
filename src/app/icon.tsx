import { ImageResponse } from "next/og";
import { loadOgFont } from "@/lib/og-font";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * The browser-tab mark: the wordmark's initial, gold on noir.
 *
 * The full "Baboó" is illegible at 16px, so the icon carries the B alone — the
 * letterform and the two brand colours are what a tab strip can actually show.
 * Rendered at 64px so the browser downsamples rather than upscales.
 */
export default async function Icon() {
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
          fontSize: 46,
          // The cap sits slightly high in the em box; nudge it back to optical centre.
          paddingTop: 4,
        }}
      >
        B
      </div>
    ),
    { ...size, fonts: serif ? [serif] : undefined }
  );
}
