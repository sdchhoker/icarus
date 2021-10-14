const leadsToDestination = require('./leadsToDestination');

test("simple case 1", () => {
  const n = 3, edges = [[0, 1], [0, 2]], source = 0, destination = 2;
  expect(leadsToDestination(n, edges, source, destination)).toBe(false);
});

test("simple case 2", () => {
  const n = 4, edges = [[0, 1], [0, 3], [1, 2], [2, 1]], source = 0, destination = 3;
  expect(leadsToDestination(n, edges, source, destination)).toBe(false);
});

test("simple case 3", () => {
  const n = 4, edges = [[0, 1], [0, 2], [1, 3], [2, 3]], source = 0, destination = 3;
  expect(leadsToDestination(n, edges, source, destination)).toBe(true);
});

test("simple case 4", () => {
  const n = 2, edges = [[0, 1], [1, 1]], source = 0, destination = 1;
  expect(leadsToDestination(n, edges, source, destination)).toBe(false);
});
