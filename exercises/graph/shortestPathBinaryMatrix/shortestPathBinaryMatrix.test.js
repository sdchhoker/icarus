const shortestPathBinaryMatrix = require('./shortestPathBinaryMatrix');

test("simple case 1", () => {
  const grid = [[0, 1], [1, 0]];
  expect(shortestPathBinaryMatrix(grid)).toBe(2)
});

test("simple case 2", () => {
  const grid = [[0, 0, 0], [1, 1, 0], [1, 1, 0]];
  expect(shortestPathBinaryMatrix(grid)).toBe(4)
});

test("simple case 3", () => {
  const grid = [[1, 0, 0], [1, 1, 0], [1, 1, 0]];
  expect(shortestPathBinaryMatrix(grid)).toBe(-1)
});