/**
 * product array
 * @param {number[]} arr
 * @returns {number[]}
 */
function product1(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;

    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      product *= arr[j];
    }

    result.push(product);
  }
  return result;
}

/**
 * product array
 * @param {number[]} arr
 * @returns {number[]}
 */
function product2(arr) {
  let product = 1;
  let zeros = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    const num = arr[i];

    if (num === 0) {
      zeros += 1;
      if (zeros > 1) break;
    } else {
      product *= num;
    }
  }

  if (zeros > 1) return Array(n).fill(0);

  const result = [];

  for (let i = 0; i < n; i++) {
    const num = arr[i];

    if (zeros === 1) {
      if (num === 0) {
        result.push(product);
      } else {
        result.push(0);
      }
    } else {
      result.push(product / num);
    }
  }
  return result;
}

/**
 * product array without division
 * @param {number[]} arr
 * @returns {number[]}
 */
function product3(arr) {
  const n = arr.length;
  const prefix = Array(n);
  const suffix = Array(n);
  let prev = 1;

  for (let i = 0; i < n; i++) {
    prefix[i] = prev;
    prev *= arr[i];
  }

  prev = 1;
  for (let i = n - 1; i >= 0; i--) {
    suffix[i] = prev;
    prev *= arr[i];
  }

  const answer = Array(n);
  for (let i = 0; i < n; i++) {
    answer[i] = prefix[i] * suffix[i];
  }

  return answer;
}

/**
 * product array without division
 * @param {number[]} arr
 * @returns {number[]}
 */
function product4(arr) {
  const n = arr.length;
  const answer = Array(n);

  let prev = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prev;
    prev *= arr[i];
  }

  prev = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    answer[i] *= prev;
    prev *= arr[i];
  }

  return answer;
}

module.exports = {
  product1,
  product2,
  product3,
  product4
}
