import { describe, expect, it } from "vitest";

// export function divide(x: number, y: number) {
//   if (y === 0) {
//     throw new Error("You can't divide by zero");
//   }
//   return Math.round(x / y);
// }

// describe("divide function", () => {
//   describe("when given to integers", () => {
//     it("should return a division result", () => {});
//   });
// });

// it("should return a division result", () => {
//   const [x, y, expected] = [40, 4, 10];
//   const result = divide(x, y);
//   expect(result).toEqual(expected);
// });

export function sum(...numbers: number[]) {
  return numbers.reduce((total, number) => total + number, 0);
}
describe("When I try to calculate the sum of numbers", () => {
  it("should return 0 with no numbers", () => {
    expect(sum()).toEqual(0);
  });

  it("should return the same number with one number", () => {
    expect(sum(2)).toEqual(1);
  });

  it("should return sum with multiple numbers", () => {
    expect(sum(1, 2, 3)).toEqual(6);
  });
});
