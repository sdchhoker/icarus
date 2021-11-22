const minWindow = require('./minWindow');

test('test case 1', () => {
  expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC');
  expect(minWindow('abc', '')).toBe('');
  expect(minWindow('aAbc', 'abc')).toBe('aAbc');
  expect(minWindow('a', 'a')).toBe('a');
});
