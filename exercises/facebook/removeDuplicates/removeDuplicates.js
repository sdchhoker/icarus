/**
 * @param {*[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let len = 0;
  const n = nums.length;
  const dub = '_';

  for (let i = 1; i < n; i++) {
    const num = nums[i];

    if (nums[len] === num) {
      nums[i] = dub;
    } else {
      if (len !== i - 1) {
        nums[len + 1] = num;
        nums[i] = dub;
      }
      len += 1;
    }
  }

  return len + 1;
};

module.exports = removeDuplicates;