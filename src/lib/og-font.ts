/**
 * Loads a Google font as TrueType, for `next/og` image routes.
 *
 * Satori (what `next/og` renders with) cannot read woff2, which is the only format
 * `next/font` keeps on disk — so the generated images fetch their own copy. A stale
 * User-Agent is what makes the CSS endpoint answer with `format('truetype')`.
 *
 * Returns null rather than throwing: a build with no network should still produce an
 * image in Satori's built-in font, not fail the whole build over a picture.
 */
export type OgFont = { name: string; data: ArrayBuffer; weight: 400 | 500; style: "normal" };

export async function loadOgFont(
  family: string,
  weight: 400 | 500,
  text: string
): Promise<OgFont | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`,
      { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8)" } }
    ).then((r) => r.text());

    const url = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1];
    if (!url) return null;

    const data = await fetch(url).then((r) => r.arrayBuffer());
    return { name: family, data, weight, style: "normal" };
  } catch {
    return null;
  }
}
