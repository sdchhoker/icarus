const allPath = require('./allPath');

test('simple case 1', () => {
  const graph = [[1, 2], [3], [3], []];
  expect(allPath(graph)).toEqual([[0, 1, 3], [0, 2, 3]]);
});

test('simple case 2', () => {
  const graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];
  expect(allPath(graph)).toEqual([[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 4]]);
});

test('simple case 3 unconnected', () => {
  const graph = [[1, 2], [2], [], []];
  expect(allPath(graph)).toEqual([]);
});