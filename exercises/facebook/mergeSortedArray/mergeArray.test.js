const merge = require('./mergeArray');

test('test case 1', () => {
  const num1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
  const output = [1, 2, 2, 3, 5, 6];
  merge(num1, m, nums2, n);
  expect(num1).toEqual(output);
});


test('test case 2', () => {
  const num1 = [0, 0, 0], m = 0, nums2 = [2, 5, 6], n = 3;
  const output = [2, 5, 6];
  merge(num1, m, nums2, n);
  expect(num1).toEqual(output);
});
