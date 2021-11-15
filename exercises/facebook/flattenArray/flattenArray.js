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