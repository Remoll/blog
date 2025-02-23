import React from "react";
import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import useMediaQuery from "./useMediaQuery";

const TestComponent: React.FC<{ query: string }> = ({ query }) => {
  const matches = useMediaQuery(query);
  return <div data-testid="matches">{matches ? "true" : "false"}</div>;
};

describe("useMediaQuery", () => {
  let originalMatchMedia: typeof window.matchMedia;

  beforeEach(() => {
    originalMatchMedia = window.matchMedia;
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    vi.restoreAllMocks();
  });

  it("returns true when media query matches", () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      media: query,
      get matches() {
        return true;
      },
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<TestComponent query="(max-width: 767px)" />);
    expect(screen.getByTestId("matches").textContent).toBe("true");
  });

  it("returns false when media query does not match", () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      media: query,
      get matches() {
        return false;
      },
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<TestComponent query="(max-width: 767px)" />);
    expect(screen.getByTestId("matches").textContent).toBe("false");
  });

  it("updates when media query changes", () => {
    let currentMatches = false;
    const listeners: Array<(e: MediaQueryListEvent) => void> = [];

    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      media: query,
      get matches() {
        return currentMatches;
      },
      onchange: null,
      addEventListener: (
        event: string,
        callback: (e: MediaQueryListEvent) => void
      ) => {
        if (event === "change") {
          listeners.push(callback);
        }
      },
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<TestComponent query="(max-width: 767px)" />);
    expect(screen.getByTestId("matches").textContent).toBe("false");

    currentMatches = true;
    const event = new Event("change") as MediaQueryListEvent;
    Object.defineProperty(event, "matches", { value: true, writable: false });
    act(() => {
      listeners.forEach((callback) => callback(event));
    });
    expect(screen.getByTestId("matches").textContent).toBe("true");
  });
});
