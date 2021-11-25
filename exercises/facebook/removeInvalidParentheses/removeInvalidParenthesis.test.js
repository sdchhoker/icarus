const removeInvalidParentheses = require('./removeInvalidParentheses');

test('test case 1', () => {
  expect(removeInvalidParentheses('()())()')).toEqual(['()()()', '(())()']);
});

test('test case 2', () => {
  expect(removeInvalidParentheses(')(')).toEqual(['']);
});

test('test case 3', () => {
  expect(removeInvalidParentheses('(a)())()')).toEqual(["(a())()", "(a)()()"]);
});
