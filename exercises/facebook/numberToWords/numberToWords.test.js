const numberToWords = require('./numberToWords');

test('test case 1', () => {
  expect(numberToWords(22341)).toBe('Twenty Two Thousand Three Hundred Forty One');
});

test('test case 2', () => {
  expect(numberToWords(10000)).toBe('Ten Thousand');
});
