import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "@/components/Nav";
import { nav } from "@/data/site";

vi.mock("next/navigation", () => ({ usePathname: () => "/" }));

/**
 * ISSUE-001 and ISSUE-004. The overlay menu shipped with two defects that a keyboard
 * or screen-reader user hit immediately: items below the fold were unreachable while
 * the page scrolled behind the overlay, and Tab walked straight out of a dialog that
 * had declared aria-modal, into content the user could not see.
 */
function openMenu() {
  return screen.getByRole("button", { name: /menu/i });
}

describe("Nav overlay menu", () => {
  beforeEach(() => {
    document.body.style.overflow = "";
  });

  it("exposes every navigation entry once open", async () => {
    const user = userEvent.setup();
    render(<Nav />);
    await user.click(openMenu());

    const dialog = screen.getByRole("dialog");
    for (const item of nav) {
      // Each entry is numbered, so its accessible name is "01Villas", not "Villas".
      expect(
        within(dialog).getByRole("link", { name: new RegExp(`^\\d+\\s*${item.label}$`) })
      ).toBeInTheDocument();
    }
  });

  it("locks the page behind the overlay and releases it on close", async () => {
    const user = userEvent.setup();
    render(<Nav />);

    await user.click(openMenu());
    expect(document.body.style.overflow).toBe("hidden");

    await user.keyboard("{Escape}");
    expect(document.body.style.overflow).not.toBe("hidden");
  });

  it("keeps Tab inside the dialog instead of walking into hidden content", async () => {
    const user = userEvent.setup();
    render(<Nav />);
    await user.click(openMenu());

    const dialog = screen.getByRole("dialog");
    // Twice around the loop: a trap that only holds for one cycle is not a trap.
    for (let i = 0; i < 40; i++) {
      await user.tab();
      expect(dialog.contains(document.activeElement)).toBe(true);
    }
  });

  it("returns focus to the trigger when the menu closes", async () => {
    const user = userEvent.setup();
    render(<Nav />);
    const trigger = openMenu();

    await user.click(trigger);
    await user.keyboard("{Escape}");
    expect(trigger).toHaveFocus();
  });
});
