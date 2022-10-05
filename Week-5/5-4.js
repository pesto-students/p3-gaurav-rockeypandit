import mathOperations from "./calc";
let s = mathOperations.sum(1, 1);
let d = mathOperations.diff(1, 1);
let p = mathOperations.product(1, 1);

it("sum", () => {
  expect(s).toBe(2);
});

it("diff", () => {
  expect(d).toBe(0);
});

it("product", () => {
  expect(p).toBe(1);
});
