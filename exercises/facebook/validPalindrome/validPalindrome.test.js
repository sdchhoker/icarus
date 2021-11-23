const isPalindrome = require('./validPalindrome');

test('test case 1', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
});

test('test case 2', () => {
  expect(isPalindrome(' aa')).toBe(true);
});
