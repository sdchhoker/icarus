const searchRange = require('./searchRange');

test('test case 1', () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 5)).toEqual([0, 0]);
  expect(searchRange([1], 1)).toEqual([0, 0]);
});

test('test case 2', () => {
  expect(searchRange([5, 7, 7, 8, 8, 8, 10], 8)).toEqual([3, 5]);
  expect(searchRange([5, 7, 7, 8, 8, 8, 10], 5)).toEqual([0, 0]);
});

test('test case 3', () => {
  expect(searchRange([0], 8)).toEqual([-1, -1]);
  expect(searchRange([], 8)).toEqual([-1, -1]);
  expect(searchRange([1, 2, 3, 4], 8)).toEqual([-1, -1]);
});
