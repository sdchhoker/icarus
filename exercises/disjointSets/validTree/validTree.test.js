const validTree = require('./validTree');

test("test cycle in tree failing", () => {
  const n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]];
  expect(validTree(n, edges)).toBe(false);
});

test("test cycle in tree passing", () => {
  const n = 5, edges = [[0,1],[0,2],[0,3],[1,4]];
  expect(validTree(n, edges)).toBe(true);
});

test("test nodes connected failing", () => {
  const n = 5, edges = [[0,1],[0,2],[3,4]];
  expect(validTree(n, edges)).toBe(false);
});
