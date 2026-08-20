import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Footer from "@/components/Footer";
import { isRealHref } from "@/data/contact";

/**
 * ISSUE-005. The social icons rendered href="#" while the real URLs were outstanding.
 * Clicking one scrolled the reader back to the top, rewrote the URL and burned a
 * history entry, so Back then went somewhere they had never been.
 */
describe("placeholder links", () => {
  it("never renders a bare '#' anchor in the footer", () => {
    const { container } = render(<Footer />);
    const dead = Array.from(container.querySelectorAll("a")).filter(
      (a) => !isRealHref(a.getAttribute("href") ?? "")
    );
    expect(dead.map((a) => a.outerHTML)).toEqual([]);
  });

  it("recognises which hrefs are real", () => {
    expect(isRealHref("#")).toBe(false);
    expect(isRealHref("")).toBe(false);
    expect(isRealHref("   ")).toBe(false);
    expect(isRealHref("https://instagram.com/baboo")).toBe(true);
    expect(isRealHref("/villas")).toBe(true);
  });
});
