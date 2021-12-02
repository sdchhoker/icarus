/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
	let p = 0;

	for (let i = 0; i < nums.length; i += 1) {
		const num = nums[i];

		if (num !== 0) {
			nums[i] = nums[p];
			nums[p] = num;
			p += 1;
		}
	}
};

const nums = [0, 1, 0, 2, 12]
moveZeroes(nums);

console.log(nums);
