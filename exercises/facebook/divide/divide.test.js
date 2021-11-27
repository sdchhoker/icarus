const divide = require('./divide');

test('test case 1', () => {
  // expect(divide(10, 3)).toBe(3);
});

test('test case 2', () => {
  // expect(divide(12, 3)).toBe(4);
  // expect(divide(1, 3)).toBe(0);
  // expect(divide(-100, 3)).toBe(-33);
  // expect(divide(-100, -3)).toBe(33);
  expect(divide(-2147483648, 1)).toBe(-2147483648);
  expect(divide(2147483647, 1)).toBe(2147483647);
  // expect(divide(2147483647, 3)).toBe(715827882);
  // expect(divide(-2147483647, -3)).toBe(715827882);
});
