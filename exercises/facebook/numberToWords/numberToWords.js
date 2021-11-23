const n = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen'
};

let n1 = {
  20: 'Twenty',
  30: 'Thirty',
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
}

let n2 = {
  100: 'Hundred',
  1000: 'Thousand',
  1000000: 'Million',
  1000000000: 'Billion'
}
/**
 * @param {number} num
 * @return {string}
 */
const numberToWords = function (num) {
  return build(num).join(' ');
};

function build(num) {
  if (n1[num] !== undefined) {
    return [n1[num]];
  } else if (n[num] !== undefined) return [n[num]];

  let result = [];
  let i = 0;
  //20001
  while (true) {
    if (n[num] !== undefined) {
      result.push(n[num]);
      break;
    } else if (String(num).length === 2) {
      const level = Math.floor(num / 10) * 10;
      num = num % 10;
      result.push(n1[level]);
      if (num !== 0) result.push(n[num]);
      break;
    } else {
      let len = String(num).length;
      const level = Math.pow(10, len - 1 - i);

      if (n2[level] !== undefined) {
        const num1 = Math.floor(num / level);
        result.push(...build(num1), n2[level]);
        num %= level;
        if (num === 0) break;
        i = 0;
        continue;
      }
    }
    i += 1;
  }
  return result;
}

module.exports = numberToWords;
