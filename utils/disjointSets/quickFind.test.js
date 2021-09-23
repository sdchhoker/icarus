const QuickFind = require("./quickFind")

let uf = null;

beforeEach(() => {
  uf = QuickFind(10)
  uf.union(1, 2)
  uf.union(2, 5)
  uf.union(5, 6)
  uf.union(6, 7)
  uf.union(3, 8)
  uf.union(8, 9)
});

afterEach(() => {
  uf = null;
});

test('test connectivity', () => {
  expect(uf.connected(1, 5)).toBe(true);
  expect(uf.connected(7, 5)).toBe(true);
  expect(uf.connected(4, 9)).toBe(false);
  expect(uf.find(8)).toBe(3);
});

//  commands
// jest --coverage
//  jest --watch