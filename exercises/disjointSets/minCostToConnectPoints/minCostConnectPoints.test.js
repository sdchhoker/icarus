const minCostConnectPoints = require('./minCostConnectPoints');

test("simple case 1", () => {
  const points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]];
  const output = 20;
  expect(minCostConnectPoints(points)).toBe(output)
});

test("simple case 2", () => {
  const points = [[3, 12], [-2, 5], [-4, 1]];
  const output = 18;
  expect(minCostConnectPoints(points)).toBe(output)
});

test("simple case 3", () => {
  const points = [[-1000000, -1000000], [1000000, 1000000]];
  const output = 4000000;
  expect(minCostConnectPoints(points)).toBe(output);
});

test("simple case 4", () => {
  const points = [[0, 0]];
  const output = 0;
  expect(minCostConnectPoints(points)).toBe(output);
})