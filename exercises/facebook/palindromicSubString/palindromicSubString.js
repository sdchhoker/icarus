/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let startIdx = 0;
  let max = 0;
  const n = s.length;

  for (let i = 0; i < n; i++) {
    checkP(i - 1, i + 1);
    checkP(i, i + 1);
  }

  function checkP(left, right) {
    while (left >= 0 && right < n && s[left] === s[right]) {
      if (right - left > max) {
        startIdx = left;
        max = right - left;
      }
      right += 1;
      left -= 1;
    }
  }

  return s.substr(startIdx, max + 1);
};

module.exports = longestPalindrome;