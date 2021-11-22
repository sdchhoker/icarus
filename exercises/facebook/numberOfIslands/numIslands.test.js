const numIslands = require('./numIslands');

test('test case 1', () => {
  const input = [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]];
  expect(numIslands(input)).toBe(1);
});


test('test case 2', () => {
  const input = [["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]];
  expect(numIslands(input)).toBe(3);
});
