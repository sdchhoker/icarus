const threeSum = require('./3Sum');

test('test 1', () => {
  const nums = [-1, 0, 1, 2, -1, -4, -1];
  const output = [[-1, -1, 2], [-1, 0, 1]];
  expect(threeSum(nums)).toEqual(output);
});

test('test 2', () => {
  const nums = [0, 0, 0, 0, 0, 0];
  const output = [[0, 0, 0]];
  expect(threeSum(nums)).toEqual(output);
});
