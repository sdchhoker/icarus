const findMST = require('./mst');

test("simple case 1", () => {
  const edges = [[0, 1, 1], [0, 4, 7], [0, 3, 4], [0, 2, 3], [2, 3, 5], [3, 4, 2], [1, 4, 9]];
  const n = 5;

  expect(findMST(edges, n)).toEqual([[0, 1, 1], [3, 4, 2], [0, 2, 3], [0, 3, 4]])
});