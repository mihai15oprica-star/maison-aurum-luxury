import { ImageResponse } from "next/og";
import { brand } from "@/data/site";

export const alt = "Baboó — luxury concierge for Ibiza, Mykonos and Saint Tropez";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NOIR = "#1a1208";
const GOLD = "#c9a84c";
const GOLD_LIGHT = "#e8d5a3";

/**
 * Loads a Google font as TrueType.
 *
 * Satori (what `next/og` renders with) cannot read woff2, which is the only format
 * `next/font` keeps on disk — so the OG card fetches its own copy. A stale User-Agent
 * is what makes the CSS endpoint answer with `format('truetype')` instead.
 *
 * Returns null rather than throwing: a build with no network should still produce a
 * card in Satori's built-in font, not fail the whole build over a picture.
 */
async function loadFont(family: string, weight: number, text: string) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`,
      { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8)" } }
    ).then((r) => r.text());

    const url = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1];
    if (!url) return null;

    const data = await fetch(url).then((r) => r.arrayBuffer());
    return { name: family, data, weight: weight as 400 | 500, style: "normal" as const };
  } catch {
    return null;
  }
}

// Static: one card for the whole site, baked at build time.
export default async function Image() {
  const wordmark = brand.name;
  const tagline = brand.slogan.toUpperCase();
  const places = "IBIZA · MYKONOS · SAINT TROPEZ";

  const [serif, sans] = await Promise.all([
    loadFont("Playfair Display", 500, wordmark),
    loadFont("Jost", 400, `${tagline}${places}`),
  ]);
  const fonts = [serif, sans].filter(Boolean) as NonNullable<Awaited<ReturnType<typeof loadFont>>>[];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: NOIR,
          // Warm centre glow so the card is not a flat rectangle of brown.
          backgroundImage: `radial-gradient(circle at 50% 42%, rgba(201,168,76,0.16) 0%, rgba(26,18,8,0) 62%)`,
        }}
      >
        {/* Gold hairline frame — the print register the site's page borders use. */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: `1px solid rgba(201,168,76,0.45)`,
          }}
        />
        <div
          style={{
            fontFamily: serif ? "Playfair Display" : "serif",
            fontSize: 152,
            color: GOLD_LIGHT,
            lineHeight: 1,
            letterSpacing: "-0.01em",
          }}
        >
          {wordmark}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            marginTop: 44,
          }}
        >
          <div style={{ width: 72, height: 1, background: GOLD }} />
          <div
            style={{
              fontFamily: sans ? "Jost" : "sans-serif",
              fontSize: 24,
              color: GOLD,
              letterSpacing: "0.34em",
            }}
          >
            {tagline}
          </div>
          <div style={{ width: 72, height: 1, background: GOLD }} />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 92,
            fontFamily: sans ? "Jost" : "sans-serif",
            fontSize: 20,
            color: "rgba(232,213,163,0.72)",
            letterSpacing: "0.3em",
            // Tracking adds space after the final letter too, so a centred tracked
            // line sits half a space left of true centre. Pay it back.
            paddingLeft: "0.3em",
          }}
        >
          {places}
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  );
}
