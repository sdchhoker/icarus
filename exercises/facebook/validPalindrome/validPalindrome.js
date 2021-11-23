/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const l = s.charCodeAt(left);
    const r = s.charCodeAt(right);
    if (!((l < 97 && l <= 122) || (l >= 48 && l <= 57))) {
      left += 1;
    } else if (!((r >= 97 && r <= 122) || (r >= 48 && r <= 57))) {
      right -= 1;
    } else {
      if (l === r) {
        left += 1;
        right -= 1;
      } else return false;
    }
  }
  return true;
};

module.exports = isPalindrome;