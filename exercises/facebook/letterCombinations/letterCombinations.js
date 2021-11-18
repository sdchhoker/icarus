/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (digits === "") return [];
  const map = new Map();
  map.set('2', ['a', 'b', 'c']);
  map.set('3', ['d', 'e', 'f']);
  map.set('4', ['g', 'h', 'i']);
  map.set('5', ['j', 'k', 'l']);
  map.set('6', ['m', 'n', 'o']);
  map.set('7', ['p', 'q', 'r', 's']);
  map.set('8', ['t', 'u', 'v']);
  map.set('9', ['w', 'x', 'y', 'z']);

  const arr = [];
  for (let i = 0; i < digits.length; i++) {
    arr.push(map.get(digits[i]));
  }
  const result = []
  recurse(arr, result, "", 0);
  return result;
};

/**
 *
 * @param {string[][]} arr
 * @param {string[]} result
 * @param {string} str
 * @param {number} idx
 */
function recurse(arr, result, str, idx) {
  if (arr.length === idx) {
    result.push(str);
    return;
  }

  const curr = arr[idx];
  for (let i = 0; i < curr.length; i++) {
    recurse(arr, result, str + curr[i], idx + 1);
  }
}

module.exports = letterCombinations;
