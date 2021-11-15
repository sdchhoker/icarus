// leetcode 213. house robber ii
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const n = nums.length;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(...nums);

  return Math.max(max(nums, 0, n - 2), max(nums, 1, n - 1))
};

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} emd
 * @return {number}
 */
function max(nums, start, end) {
  let first = nums[start];
  let second = Math.max(first, nums[start + 1]);

  for (let i = start + 2; i <= end; i++) {
    const temp = second;
    second = Math.max(second, first + nums[i]);
    first = temp;
  }

  return second;
}

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([6, 6, 4, 8, 4, 3, 3, 10]));