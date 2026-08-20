import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListingTabs from "@/components/ListingTabs";

/**
 * ISSUE-003: the tabs declared role="tab" without honouring the contract that role
 * implies. A screen reader announces "tab, 1 of 4" and the user reaches for the arrow
 * keys; nothing happened, and every tab was its own Tab stop.
 */
function renderTabs() {
  return render(
    <ListingTabs
      amenities={["Private pool", "Air-conditioning"]}
      area="Hillside"
      location="Can Furnet, Ibiza"
      distance="5 km to Ibiza Town"
    />
  );
}

describe("ListingTabs keyboard contract", () => {
  it("is a single Tab stop — only the selected tab is tabbable", () => {
    renderTabs();
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(4);
    expect(tabs.filter((t) => t.getAttribute("tabindex") === "0")).toHaveLength(1);
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
  });

  it("moves selection and focus with Left and Right, wrapping at both ends", async () => {
    const user = userEvent.setup();
    renderTabs();
    const tabs = screen.getAllByRole("tab");

    tabs[0].focus();
    await user.keyboard("{ArrowRight}");
    expect(tabs[1]).toHaveFocus();
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");

    // Wrapping backwards off the first tab lands on the last, not nowhere.
    await user.keyboard("{ArrowLeft}{ArrowLeft}");
    expect(tabs[3]).toHaveFocus();
    expect(tabs[3]).toHaveAttribute("aria-selected", "true");

    await user.keyboard("{ArrowRight}");
    expect(tabs[0]).toHaveFocus();
  });

  it("jumps to the ends with Home and End", async () => {
    const user = userEvent.setup();
    renderTabs();
    const tabs = screen.getAllByRole("tab");

    tabs[0].focus();
    await user.keyboard("{End}");
    expect(tabs[3]).toHaveAttribute("aria-selected", "true");
    await user.keyboard("{Home}");
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
  });

  it("keeps the panel wired to the selected tab", async () => {
    const user = userEvent.setup();
    renderTabs();
    const tabs = screen.getAllByRole("tab");

    const panel = screen.getByRole("tabpanel");
    expect(panel).toHaveAttribute("aria-labelledby", tabs[0].id);
    expect(panel.id).toBe(tabs[0].getAttribute("aria-controls"));
    expect(screen.getByText("Private pool")).toBeInTheDocument();

    await user.click(tabs[2]);
    const whereverPanel = screen.getByRole("tabpanel");
    expect(whereverPanel).toHaveAttribute("aria-labelledby", tabs[2].id);
    expect(screen.getByText(/Can Furnet, Ibiza/)).toBeInTheDocument();
    expect(screen.queryByText("Private pool")).not.toBeInTheDocument();
  });
});
