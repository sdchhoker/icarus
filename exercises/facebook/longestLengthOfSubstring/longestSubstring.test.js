const lengthOfLongestSubstring = require('./longestSubstring');

test('test case 1', () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  expect(lengthOfLongestSubstring("aaaaabbbbbcbbbb")).toBe(2);
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});
