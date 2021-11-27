const numDecodings = require('./decodeWays');

test('test case 1', () => {
  expect(numDecodings('226')).toBe(3);
});

test('test case 2', () => {
  expect(numDecodings('0')).toBe(0);
});

test('test case 2', () => {
  expect(numDecodings('111111111111111111111111111111111111111111111')).toBe(1836311903);
});
