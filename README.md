# Baboó

Marketing site for Baboó, a luxury concierge operating in Ibiza, Mykonos and Saint
Tropez. Next.js 14 App Router, TypeScript, Tailwind. Every page is statically
rendered; there is no database, no CMS and no backend — the site's content lives in
five typed files under `src/data/`, and enquiries leave over WhatsApp.

## Running it

```bash
npm install
npm run dev            # http://localhost:3000
```

```bash
npm run build && npm start   # production build
npx tsc --noEmit             # types
npm run lint                 # eslint
npm test                     # vitest
```

## Environment

| Variable | Required | What it does |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | production | The site's absolute origin, e.g. `https://baboo.com`. Every canonical URL, the sitemap, `robots.txt` and every Open Graph image URL are built from it. |

**It is read at build time, not at run time.** `NEXT_PUBLIC_*` values are inlined into
the bundle by the compiler, so setting it on a running server changes nothing — it has
to be present when `next build` runs. On Vercel that means adding it as a Production
environment variable and redeploying.

Leaving it unset is deliberate and safe: the site falls back to the per-deploy Vercel
hostname so preview deployments canonical to themselves rather than to production, and
`robots.txt` serves `Disallow: /` for anything that is not the production host. The
same 56 listings indexed under a dozen throwaway hostnames would be pure duplication.

## Where the content lives

| File | Holds |
|---|---|
| `src/data/listings.ts` | All 56 listings — 30 villas, 14 yachts, 6 cars, 6 beach clubs — plus the filter definitions for each category. |
| `src/data/destinations.ts` | Ibiza, Mykonos, Saint Tropez: hero copy, welcome text, partner grids. |
| `src/data/partners.ts` | Club and restaurant partners, per destination. |
| `src/data/extra-services.ts` | The extra-services rows. |
| `src/data/site.ts` | Brand strings, primary navigation, membership band, brand highlights, trust blocks. |
| `src/data/contact.ts` | Every contact detail in one place: WhatsApp number, email, socials. |

Adding a listing to `listings.ts` is the whole job — its detail page, its slot in the
grid, its filters, its sitemap entry and its structured data all derive from that one
record.

### Listing photos

Lead photos are self-hosted at `public/listings/<slug>.jpg`, matched to the listing by
filename. Villas and yachts are complete; cars and beach clubs still fall back to
stock imagery. See `docs/foto-brief.md` for the shoot brief and the twelve filenames
still outstanding.

## Placeholders still open

Marked in the source with `TBD-n` comments. `grep -rn "TBD-" src/` lists them.

| Marker | What is still placeholder |
|---|---|
| `TBD-1`, `TBD-5` | Contact details in `src/data/contact.ts` — WhatsApp number, email, Instagram handle, four social URLs. Icons and links re-activate on their own once real values land; until then they render as plain text rather than as `href="#"`. |
| `TBD-2` | Final copy for the membership band, brand highlights, trust blocks and page subtitles. |
| `TBD-3` | Real partner names, logos and links; per-listing amenities. |
| `TBD-6` | Stock imagery standing in for commissioned photography. |
| `TBD-7` | Whether About is a page or an anchor. |

Placeholder contact details are deliberately excluded from the JSON-LD and never
rendered as links — publishing a fake telephone number as structured data is worse
than publishing none.

## Docs

- `docs/foto-brief.md` — photo brief for the twelve outstanding listing photos.
- `docs/brand-typography.md` — the approved type direction.
- `.gstack/qa-reports/` — QA reports and the issue baseline.
