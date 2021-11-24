const permuteUniqure = require('./permute2');

test('test case 1', () => {
  const nums = [1, 1, 2];
  const output = [[1, 1, 2], [1, 2, 1], [2, 1, 1]];

  expect(permuteUniqure(nums)).toEqual(output);
});
