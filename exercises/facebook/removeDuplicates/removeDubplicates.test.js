const removeDubplicates = require('./removeDuplicates');

test('test 1', () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const output = 5;
  expect(removeDubplicates(nums)).toBe(output);
  console.log(nums);
});

test('test 2', () => {
  const nums = [1, 1, 2];
  const output = 2;
  expect(removeDubplicates(nums)).toBe(output);
  console.log(nums);
});
