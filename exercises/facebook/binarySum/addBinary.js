/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  const result = [];
  const n = Math.max(a.length, b.length);
  const an = a.split('').reverse();
  const bn = b.split('').reverse();
  let carry = 0;

  for (let i = 0; i < n; i++) {
    const n1 = an[i] !== undefined ? parseInt(an[i]) : 0;
    const n2 = bn[i] !== undefined ? parseInt(bn[i]) : 0;
    const sum = n1 + n2 + carry;

    result.push(sum % 2);
    carry = Math.floor(sum / 2);
  }

  if (carry !== 0) result.push(carry);
  
  return result.reverse().join('');
};

module.exports = addBinary;
