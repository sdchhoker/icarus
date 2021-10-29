/**
 * can sum to target
 * @param target {number}
 * @param nums {number[]}
 */
function canSum(target, nums) {
  return recurse(target, nums, new Map());
}

/**
 * recurse
 * @param target {number}
 * @param nums {number[]}
 * @param memo {Map<number, boolean>}
 * @return boolean
 */
function recurse(target, nums, memo) {
  if (memo.has(target)) return memo.get(target);
  if (target < 0) return false;
  if (target === 0) return true;

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (recurse(diff, nums, memo)) {
      // memo.set(target, true);
      return true;
    }
  }
 
  memo.set(target, false);
  return false;
}

module.exports = canSum;