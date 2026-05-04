import { describe, expect, it } from "vitest";
import { sum } from "./sum.ts";

describe("sum", () => {
  it("returns the sum of two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("returns the sum of two negative numbers", () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it("returns the sum when one number is zero", () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it("returns the sum of a positive and negative number", () => {
    expect(sum(10, -3)).toBe(7);
  });

  it("returns zero when both numbers are zero", () => {
    expect(sum(0, 0)).toBe(0);
  });
});
