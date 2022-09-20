import { describe, expect, it } from "vitest";
import sum from "./sum";

describe("When I try to calculate the sum of numbers", () => {
  it("should return 0 with no numbers", () => {
    expect(sum()).toEqual(0);
  });

  it("should return the same number with one number", () => {
    expect(sum(2)).toEqual(2);
  });

  it("should return sum with multiple numbers", () => {
    expect(sum(1, 2, 3)).toEqual(6);
  });
});
