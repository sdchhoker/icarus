/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (arr) {
  const n = arr.length;
  const pre = Array(n);
  const result = Array(n);
  let p = arr[0];

  pre[0] = 1;
  for (let i = 1; i < n; i++) {
    pre[i] = p;
    p *= arr[i];
  }

  p = arr[n - 1];
  result[n - 1] = pre[n - 1];
  for (let i = n - 2; i >= 0; i -= 1) {
    result[i] = p * pre[i];
    p *= arr[i];
  }

  return result;
};

module.exports = productExceptSelf;
