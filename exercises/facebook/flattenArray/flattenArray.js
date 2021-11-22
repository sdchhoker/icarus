//In JavaScript, write a function that takes an array as input that can contain both ints and
// more arrays (which can also contain an array or int) and return the flattened array. [1, [2, [ [3, 4], 5], 6]] => [1, 2, 3, 4, 5, 6]


/**
 * flattens array
 * @param {*[]} arr
 * @param {number[]} [result]
 * @returns {number[]}
 */
function flattenArray(arr, result = []) {
  arr.forEach((val) => {
    if (Array.isArray(val)) {
      flattenArray(val, result);
    } else {
      result.push(val);
    }
  });
  return result;
}

module.exports = flattenArray;