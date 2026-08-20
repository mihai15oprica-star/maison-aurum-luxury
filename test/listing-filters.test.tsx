import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListingFilters from "@/components/ListingFilters";
import { destinationFilter, categoryConfig } from "@/data/listings";

const push = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: (...args: unknown[]) => push(...args) }),
  usePathname: () => "/villas",
}));

const filters = [destinationFilter, ...categoryConfig.villas.extraFilters];

describe("ListingFilters URL sync", () => {
  beforeEach(() => push.mockClear());

  it("pushes a history entry rather than replacing it", async () => {
    // ISSUE-002: the filters used router.replace, which overwrites the current entry,
    // so Back skipped every filter state and left the listing page altogether.
    const user = userEvent.setup();
    render(<ListingFilters filters={filters} current={{}} />);

    await user.selectOptions(screen.getAllByRole("combobox")[0], "ibiza");

    expect(push).toHaveBeenCalledTimes(1);
    const [url, opts] = push.mock.calls[0];
    expect(url).toBe("/villas?destination=ibiza");
    // Filtering must not yank the reader back to the top of the page.
    expect(opts).toEqual({ scroll: false });
  });

  it("carries the other active filters through when one changes", async () => {
    const user = userEvent.setup();
    render(<ListingFilters filters={filters} current={{ destination: "ibiza" }} />);

    const selects = screen.getAllByRole("combobox");
    const bedrooms = selects[1];
    await user.selectOptions(bedrooms, (bedrooms.querySelectorAll("option")[1] as HTMLOptionElement).value);

    const [url] = push.mock.calls[0];
    expect(url).toContain("destination=ibiza");
    expect(url.split("?")[1].split("&")).toHaveLength(2);
  });

  it("restores a deep-linked filter into the dropdown", () => {
    render(<ListingFilters filters={filters} current={{ destination: "mykonos" }} />);
    expect(screen.getAllByRole("combobox")[0]).toHaveValue("mykonos");
  });

  it("offers CLEAR only when something is filtered, and it drops the query string", async () => {
    const user = userEvent.setup();
    const { rerender } = render(<ListingFilters filters={filters} current={{}} />);
    expect(screen.queryByRole("button", { name: /clear/i })).not.toBeInTheDocument();

    rerender(<ListingFilters filters={filters} current={{ destination: "ibiza" }} />);
    await user.click(screen.getByRole("button", { name: /clear/i }));
    expect(push).toHaveBeenCalledWith("/villas", { scroll: false });
  });
});
