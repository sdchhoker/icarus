const canSum = require('./canSum');

test("simple case 1", () => {
  expect(canSum(7, [5, 3, 4, 9])).toBe(true);
});

test("simple case 2", () => {
  expect(canSum(10, [5, 3, 4, 9, 1])).toBe(true);
});

test("simple case 3", () => {
  expect(canSum(10, [1, 0])).toBe(true);
});

test("simple case 4", () => {
  expect(canSum(300, [7, 14])).toBe(false);
});