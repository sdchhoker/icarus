const flattenArray = require('./flattenArray');

test("test case 1", () => {
  const input = [1, [2, [3, [4]]], 5, [6]];
  const output = [1, 2, 3, 4, 5, 6];

  expect(flattenArray(input)).toEqual(output);
});
