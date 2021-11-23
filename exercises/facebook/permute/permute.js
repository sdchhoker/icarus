/**
 * @param {number[]} nums
 * @param {number[][]} [result]
 * @param {number} [first]
 * @return {number[][]}
 */
const permute = function (nums, result = [], first = 0) {
    if (first === nums.length) {
        result.push([...nums]);
        return result;
    }

    for (let i = first; i < nums.length; i++) {
        [nums[i], nums[first]] = [nums[first], nums[i]];
        permute(nums, result, first + 1);
        [nums[i], nums[first]] = [nums[first], nums[i]];
    }
    return result;
};

module.exports = permute;
