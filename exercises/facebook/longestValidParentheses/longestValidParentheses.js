/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  const n = s.length;
  const memo = Array(n);
  let max = 0;
  memo[0] = 0;

  for (let i = 1; i < memo.length; i++) {
    memo[i] = 0;
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        memo[i] = (i > 1 ? memo[i - 2] : 0) + 2;
      } else if (i - memo[i - 1] > 0 && s[i - memo[i - 1] - 1] === '(') {
        memo[i] = memo[i - 1] + (i - memo[i - 1] - 2 >= 0 ? memo[i - memo[i - 1] - 2] : 0) + 2;
      }
      max = Math.max(memo[i], max);
    }
  }

  return max;
};

module.exports = longestValidParentheses;
