const smallestStringWithSwaps = require('./smallestStringWithSwaps');

test('test 1 with simple case', () => {
  expect(smallestStringWithSwaps("dcab", [[0,3],[1,2]])).toBe('bacd');
});

test('test 2 with simple case', () => {
  expect(smallestStringWithSwaps("dcab", [[0,3],[1,2],[0,2]])).toBe('abcd');
});

test('test 3 with simple case', () => {
  expect(smallestStringWithSwaps("cba", [[0,1],[1,2]])).toBe('abc');
});

test('test 3 with simple case', () => {
  expect(smallestStringWithSwaps("cbad", [])).toBe('cbad');
});
