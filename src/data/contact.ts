// Single source of truth for all contact details.
// Everything the client will eventually swap lives here — see TBD markers.

// TBD-1: real WhatsApp number(s) for the Contact Us button + floating button.
// Digits only, international format, no "+" or spaces (WhatsApp API requirement).
export const WHATSAPP_NUMBER = "40700000000"; // TBD-1: placeholder Romanian number

// TBD-5: real email address.
export const EMAIL = "info@baboo.com"; // TBD-5

// TBD-5: MADE shows two numbers (one per region). Structured as a list so Baboó can
// run a single central number or one per destination without touching components.
export const PHONES: { label: string; number: string }[] = [
  { label: "Central", number: "+40 700 000 000" }, // TBD-5
  // { label: "Ibiza", number: "+34 000 000 000" }, // TBD-5: add per-destination lines if desired
];

// Displayed office location (fixed per brief).
export const LOCATION = "Bucharest, Romania";

// TBD-5: real Instagram handle — shown large in the footer, like MADE.
export const INSTAGRAM_HANDLE = "@baboo"; // TBD-5

// TBD-5: real social profile URLs.
export const SOCIALS = {
  instagram: "#", // TBD-5
  tiktok: "#", // TBD-5
  facebook: "#", // TBD-5
  whatsapp: "#", // TBD-5 (set to whatsappHref() below if you want the icon to open chat)
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
