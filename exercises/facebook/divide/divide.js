/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
  if (dividend === 0) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  if (dividend === -2147483648 && divisor === 1) return -2147483648;

  let dd = dividend < 0 ? dividend : -dividend;
  let d = divisor < 0 ? divisor : -divisor;

  if (dd > d) return 0;
  let count = 1;

  while (dd < d) {
    const t = d << 1;
    if (t > 0 || dd > t) break;
    d = t;
    count <<= 1;
  }

  let d1 = divisor > 0 ? -divisor : divisor;
  count += divide(dd - d, d1);

  if (divisor < 0 && dividend < 0 || dividend > 0 && divisor > 0) return count;
  return -count;
};

module.exports = divide;