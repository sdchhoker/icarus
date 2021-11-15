// leetcode 55. Jump Game
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  return recurse(nums, 0, new Map());
};

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {Map<number, boolean>} memo
 * @return {boolean}
 */
function recurse(nums, n, memo) {
  if (n + 1 >= nums.length) return true;
  if (memo.has(n)) return memo.get(n);

  const current = nums[n];

  for (let i = 1; i <= current; i++) {
    const curr = n + i;
    const result = recurse(nums, curr, memo);

    if (result) return true;
    memo.set(curr, result);
  }
  return false;
}

module.exports = canJump;