// leetcode 198. house robber
/**
 * @param {number[]} nums
 * @param {number} [n]
 * @param {Map<number, number>} [memo]
 * @return {number}
 */
const rob = function (nums, n = -1, memo = new Map()) {
  if (n >= nums.length) return 0;
  if (memo.has(n)) return memo.get(n);

  let max = 0;
  let current = 0;
  let i = n + 1;

  if (n !== -1) {
    current = nums[n];
    i = n + 2;
  }

  for (; i < nums.length; i++) {
    const result = rob(nums, i, memo);
    max = Math.max(max, result);
  }

  memo.set(n, max + current);
  return max + current;
};

const rob2 = function (nums) {
  const n = nums.length;
  if (n === 0) return nums[0];
  let first = nums[0];
  let second = Math.max(first, nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};

module.exports = rob2;
