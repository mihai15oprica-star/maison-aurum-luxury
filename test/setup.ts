import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(cleanup);

// jsdom implements neither of these, and both are called during first paint by
// components that gate motion on the user's reduced-motion setting.
if (!window.matchMedia) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })) as typeof window.matchMedia;
}

window.scrollTo = vi.fn();

// jsdom performs no layout, so `offsetParent` is null for every element — including
// fully visible ones. Focus traps use it as the standard "is this actually on screen"
// test, so without a stand-in they see zero focusable elements and quietly do nothing.
Object.defineProperty(HTMLElement.prototype, "offsetParent", {
  configurable: true,
  get(this: HTMLElement) {
    return this.style.display === "none" ? null : this.parentElement ?? document.body;
  },
});
