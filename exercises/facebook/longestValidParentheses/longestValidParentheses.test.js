const longestValidParentheses = require('./longestValidParentheses');

test("test case 1", () => {
  expect(longestValidParentheses('(()')).toBe(2);
  expect(longestValidParentheses('()()')).toBe(4);
  expect(longestValidParentheses('()')).toBe(2);
  expect(longestValidParentheses('())')).toBe(2);
  expect(longestValidParentheses(')()())')).toBe(4);
  expect(longestValidParentheses('(((((((((((((((((((((((((((((((((((((()')).toBe(2);
});
