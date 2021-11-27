/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
  return recurse(s);
};

/**
 * recurse and return
 * @param {string} s
 * @param {number} [idx]
 * @param {Map<number, number>} [memo]
 * @return {number}
 */
function recurse(s = '', idx = 0, memo = new Map()) {
  if (s.length <= idx) return idx > s.length ? 0 : 1;
  if (memo.has(idx)) return memo.get(idx);

  const num1 = parseInt(s.substr(idx, 1));
  const num2 = parseInt(s.substr(idx, 2));

  if (num1 <= 0) return 0;
  const count1 = recurse(s, idx + 1, memo);

  let count2 = 0
  if (num2 > 0 && num2 <= 26) {
    count2 = recurse(s, idx + 2, memo);
  }
  memo.set(idx, count1 + count2);
  return count2 + count1;
};

module.exports = numDecodings;