const networkDelayTime = require('./networkDelayTime');

test("simple case 1", () => {
  const times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2;
  expect(networkDelayTime(times, n, k)).toBe(2);
});

test("simple case 2", () => {
  const times = [[1, 2, 1]], n = 2, k = 1;
  expect(networkDelayTime(times, n, k)).toBe(1);
});

test("simple case 3", () => {
  const times = [[1, 2, 1]], n = 2, k = 2;
  expect(networkDelayTime(times, n, k)).toBe(-1);
});

test("simple case 4", () => {
  const times = [[2, 4, 10], [5, 2, 38], [3, 4, 33], [4, 2, 76], [3, 2, 64], [1, 5, 54], [1, 4, 98], [2, 3, 61], [2, 1, 0], [3, 5, 77], [5, 1, 34], [3, 1, 79], [5, 3, 2], [1, 2, 59], [4, 3, 46], [5, 4, 44], [2, 5, 89], [4, 5, 21], [1, 3, 86], [4, 1, 95]],
    n = 5, k = 1;
  expect(networkDelayTime(times, n, k)).toBe(69);
});
