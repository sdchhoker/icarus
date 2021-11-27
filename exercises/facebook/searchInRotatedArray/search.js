/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  return recurse(nums, target, 0, nums.length - 1);
};

function recurse(nums, target, l, r) {
  if (l > r) return -1;

  const mid = Math.ceil((l + r) / 2);
  if (nums[mid] === target) return mid;

  else if (nums[mid] >= nums[l]) {
    if (target < nums[mid] && target >= nums[l]) return recurse(nums, target, l, mid - 1);
    return recurse(nums, target, mid + 1, r);
  } else {
    if (target > nums[mid] && target <= nums[r]) return recurse(nums, target, mid + 1, r);
    return recurse(nums, target, l, mid - 1);
  }
}

module.exports = search;
