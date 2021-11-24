/**
 * @param {number[]} nums
 * @param {number[][]} [result]
 * @param {number} [first]
 * @return {number[][]}
 */
const permuteUnique = function (nums, result = [], first = 0) {
  if (first === nums.length) {
    result.push([...nums]);
    return result;
  }
  const swapping = new Set();
  const f = nums[first];
  for (let i = first; i < nums.length; i++) {
    const num = nums[i];
    const key = `${f}-${num}`;

    if (swapping.has(key)) continue;
    swapping.add(key);

    if (f !== num) {
      [nums[i], nums[first]] = [nums[first], nums[i]];
    }
    permuteUnique(nums, result, first + 1)

    if (f !== num) {
      [nums[i], nums[first]] = [nums[first], nums[i]];
    }
  }
  return result;
};

module.exports = permuteUnique;
