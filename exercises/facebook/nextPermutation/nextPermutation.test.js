const nextPermutation = require('./nextPermutation');

test('testcase 1', () => {
  expect(nextPermutation([1, 2, 3])).toEqual([1, 3, 2]);
});

test('testcase 2', () => {
  expect(nextPermutation([3, 2, 1])).toEqual([1, 2, 3]);
});

test('testcase 3', () => {
  expect(nextPermutation([1])).toEqual([1]);
});
