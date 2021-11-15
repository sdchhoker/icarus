// leetcode 3. Longest Substring Without Repeating Characters
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  const memo = new Map();
  let l = 0;
  let r = 1;
  let max = 1;
  memo.set(s[0], 0);

  while (r < s.length) {
    const curr = s[r];
    const p = memo.get(curr);

    if (p !== undefined && p >= l && p <= r) {
      l = p + 1;
    }
    memo.set(curr, r);
    max = Math.max(r - l + 1, max);
    r += 1;
  }

  return max;
};

module.exports = lengthOfLongestSubstring;