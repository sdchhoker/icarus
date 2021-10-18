const allPathsSourceTarget = require('./allPath');

test("simple case 1", () => {
  const graph = [[1, 2], [3], [3], []];
  const result = [[0, 1, 3], [0, 2, 3]];
  expect(allPathsSourceTarget(graph)).toEqual(result);
});

test("simple case 2", () => {
  const graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];
  const result = [[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 4]];
  expect(allPathsSourceTarget(graph).sort()).toEqual(result.sort());
});

