// Single source of truth for all contact details.
// Everything the client will eventually swap lives here — see TBD markers.

// The concierge line, confirmed by the client 20.08.2026. Digits only, international
// format, no "+" or spaces — the WhatsApp click-to-chat API rejects anything else.
export const WHATSAPP_NUMBER = "40721252839";

// Same line, formatted for display and for the tel: href.
// Structured as a list so Baboó can add a second number per destination later
// without touching a single component.
export const PHONES: { label: string; number: string }[] = [
  { label: "Concierge", number: "+40 721 252 839" },
  // { label: "Ibiza", number: "+34 000 000 000" }, // add per-destination lines if desired
];

// TBD-5: real email address. Until it exists, nothing renders an address at all —
// a mailto: that bounces is worse than no address, and this is the one contact
// detail a visitor cannot verify before they use it.
export const EMAIL: string | null = null; // TBD-5

// Displayed office location (fixed per brief).
export const LOCATION = "Bucharest, Romania";

// TBD-5: real Instagram handle — shown large in the footer, like MADE.
export const INSTAGRAM_HANDLE = "@baboo"; // TBD-5

// TBD-5: real social profile URLs. WhatsApp is live — it is built from the number
// above rather than being a profile URL someone has to supply.
export const SOCIALS = {
  instagram: "#", // TBD-5
  tiktok: "#", // TBD-5
  facebook: "#", // TBD-5
  whatsapp: `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`,
} as const;

/**
 * True once a TBD placeholder above has been swapped for a real URL.
 *
 * Rendering a placeholder as a link is worse than not linking at all: clicking
 * href="#" scrolls the page back to the top, rewrites the URL, and burns a history
 * entry, so the back button goes to the wrong place. Callers render the icon or
 * handle as plain text until the real destination lands.
 */
export function isRealHref(href: string): boolean {
  const h = href.trim();
  return h !== "" && h !== "#";
}

/**
 * Builds a WhatsApp click-to-chat URL. Used by the Contact Us button, the floating
 * button, and every inline CTA. Optionally pre-fills a message.
 */
export function whatsappHref(message?: string): string {
  const base = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;
  return message ? `${base}&text=${encodeURIComponent(message)}` : base;
}
