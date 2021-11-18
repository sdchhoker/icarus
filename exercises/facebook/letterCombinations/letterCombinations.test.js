const letterCombinations = require('./letterCombinations');

test('test 1', () => {
  const digits = "23";
  const output = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];

  expect(letterCombinations(digits)).toEqual(output);
});

test('test 2', () => {
  const digits = "2";
  const output = ["a", "b", "c"];

  expect(letterCombinations(digits)).toEqual(output);
});

test('test 2', () => {
  const digits = "";
  const output = [];

  expect(letterCombinations(digits)).toEqual(output);
});
