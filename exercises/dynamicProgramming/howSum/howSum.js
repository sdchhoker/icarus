/**
 * how to sum
 * @param target {number}
 * @param nums {number[]}
 */
function howSum(target, nums) {
  return recurse(target, nums, new Map());
}

/**
 * @param target {number}
 * @param nums {number[]}
 * @param memo {Map<number, number[]>}
 * @returns {number[]}
 */
function recurse(target, nums, memo) {
  if (target < 0) return null;
  if (memo.has(target)) return memo.get(target)
  if (target === 0) return [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remainder = target - num;
    const result = recurse(remainder, nums, memo);
    if (result !== null) {
      result.push(num);
      const copy = [...result];
      memo.set(remainder, copy);
      return copy;
    }
  }
  memo.set(target, null);
  return null;
}

module.exports = howSum;
