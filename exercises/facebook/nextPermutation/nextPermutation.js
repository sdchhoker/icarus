/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
  const n = nums.length;
  let i = n - 2;

  for (; i >= 0; i -= 1) {
    if (nums[i] > nums[i + 1]) {
      break;
    }
  }

  if (i < 0) {
    nums.sort((a, b) => a - b);
    return;
  }

  const num = nums[i];

  for (let j = n - 1; j > i; j -= 1) {
    if (num < nums[j]) {
      nums[i] = nums[j];
      nums[j] = num;
      break;
    }
  }

  let left = i + 1;
  let right = n - 1;

  while (left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left += 1;
    right -= 1;
  }
};

module.exports = nextPermutation;