const validPath = require('./validPath');

test('simple case 1 connected', () => {
  const n = 3, edges = [[0, 1], [1, 2], [2, 0]], start = 0, end = 2;
  expect(validPath(n, edges, start, end)).toBe(true);
});

test('simple case 2 unconnected', () => {
  const n = 6, edges = [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], start = 0, end = 5;
  expect(validPath(n, edges, start, end)).toBe(false);
});

test('simple case 2 unconnected', () => {
  expect(validPath(1, [], 0, 0)).toBe(true);
});