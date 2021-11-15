const rob = require('./rob');

test("simple case 1", () => {
  const nums = [1, 2, 3, 1];
  const output = 4;
  expect(rob(nums)).toBe(output);
});

test("simple case 2", () => {
  const nums = [2, 7, 9, 3, 1];
  const output = 12;
  expect(rob(nums)).toBe(output);
});

test("simple case 3", () => {
  const nums = [114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223, 58, 170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187, 69, 129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240];
  const output = 4173;
  expect(rob(nums)).toBe(output);
});
