/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const result = [];
  const resSet = new Set();
  const seen = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    const num = nums[i];
    if (seen.has(num)) continue;

    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      const ln = nums[l];
      const rn = nums[r]
      const sum = num + ln + rn;
      if (sum === 0) {
        const key = `${num}-${ln}-${rn}`;
        if (!resSet.has(key)) {
          result.push([num, ln, rn]);
          resSet.add(key);
        }
        l += 1;
        r -= 1;
      } else if (sum < 0) {
        l += 1;
      } else {
        r -= 1;
      }
    }
    seen.add(num);
  }
  return result;
};

module.exports = threeSum;