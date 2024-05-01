import { expect, describe, it, vi, beforeEach } from "vitest";
import {
  format,
  isDateTodayOrLater,
  isEndDateAfterStartDate,
} from "./GalaxyTrainsUtils.ts";

describe("date validation", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("April 30, 2024 10:00:00")); // "Now"
  });

  it("should format date as yyyy-mm-dd", () => {
    expect(format(new Date("April 30, 2024 10:00:00"))).toBe("2024-04-30");
    expect(format(new Date("December 1, 1912 00:00:00"))).toBe("1912-12-01");
  });

  it("should validate that date and time is now or later", () => {
    expect(isDateTodayOrLater(new Date("April 30, 2024 20:00:00"))).toBe(true);
    expect(isDateTodayOrLater(new Date("August 2, 2024 20:00:00"))).toBe(true);
    expect(isDateTodayOrLater(new Date("January 30, 1987 20:00:00"))).toBe(
      false
    );
    expect(isDateTodayOrLater(new Date("April 30, 2024 08:00:00"))).toBe(false);
  });

  it("should validate that end date is after start date", () => {
    const startDate = new Date("April 30, 2024 20:00:00");
    expect(
      isEndDateAfterStartDate(startDate, new Date("May 2, 2024 20:00:00"))
    ).toBe(true);

    expect(
      isEndDateAfterStartDate(startDate, new Date("April 30, 2024 20:00:00"))
    ).toBe(false);

    expect(
      isEndDateAfterStartDate(startDate, new Date("January 30, 1987 20:00:00"))
    ).toBe(false);
  });
});
