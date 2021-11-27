/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];

  return recurse(nums, target, 0, nums.length - 1);
};

/**
 * recurse
 * @param {number[]} nums
 * @param {number} target
 * @param {number} left
 * @param {number} right
 * @return {number[]|number|*[]}
 */
function recurse(nums, target, left, right) {
  if (left > right) return [-1, -1];
  let mid = null;

  while (left <= right) {
    mid = Math.ceil((left + right) / 2);
    if (nums[mid] === target) break;
    else if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  if (left > right) return [-1, -1];
  let [, r1] = recurse(nums, target, mid + 1, right);
  let [l2] = recurse(nums, target, left, mid - 1);

  let ans = [mid, mid];

  if (l2 !== -1) ans[0] = l2;
  if (r1 !== -1) ans[1] = r1;

  return ans;
}

module.exports = searchRange;