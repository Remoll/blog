import { describe, it, expect } from "vitest";
import formatDate from "./formatDate";

describe("formatDate", () => {
  it("should format ISO string to 'dd.MM.yyyy'", () => {
    const isoString = "2025-02-23T00:00:00.000Z";
    const formattedDate = formatDate(isoString);
    expect(formattedDate).toBe("23.02.2025");
  });

  it("should handle different dates correctly", () => {
    const isoString1 = "2023-01-01T00:00:00.000Z";
    const formattedDate1 = formatDate(isoString1);
    expect(formattedDate1).toBe("01.01.2023");

    const isoString2 = "2024-12-31T00:00:00.000Z";
    const formattedDate2 = formatDate(isoString2);
    expect(formattedDate2).toBe("31.12.2024");
  });

  it("should return error string for invalid ISO string", () => {
    const invalidIsoString = "invalid-date";
    expect(formatDate(invalidIsoString)).toBe("Błędny format daty");
  });
});
