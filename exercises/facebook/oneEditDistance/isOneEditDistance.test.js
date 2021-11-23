const isOneEditDistance = require('./isOneEditDistance');

test('test case 1', () => {
  expect(isOneEditDistance('ab', 'acb')).toBe(true);
});

test('test case 2', () => {
  expect(isOneEditDistance('abcd', 'abc')).toBe(true);
});

test('test case 3', () => {
  expect(isOneEditDistance('abcde', 'abc')).toBe(false);
});

test('test case 4', () => {
  expect(isOneEditDistance('a', 'abc')).toBe(false);
});

test('test case 5', () => {
  expect(isOneEditDistance('', '')).toBe(false);
});

test('test case 6', () => {
  expect(isOneEditDistance('aca', 'caca')).toBe(true);
});
