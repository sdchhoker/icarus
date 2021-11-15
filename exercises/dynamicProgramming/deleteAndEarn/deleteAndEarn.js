/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
  const length = Math.max(...nums);
  const memo = Array(length + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    memo[nums[i]] += 1;
  }

  let prev = -1, using = 0, avoid = 0;

  for (let i = 0; i < memo.length; i++) {
    const curr = memo[i] * i;
    if (curr !== 0) {
      const m = Math.max(using, avoid);
      if (prev === i - 1) {
        using = avoid + curr;
      } else {
        using = m + curr;
      }
      avoid = m;
      prev = i;
    }
  }
  return Math.max(avoid, using);
};

module.exports = deleteAndEarn;
