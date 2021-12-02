/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = function (nums, k) {
	const n = nums.length;
	if (nums.length <= 1) return false;

	const map = new Map();
	let sum = nums[0];
	map.set(sum % k, 0);

	for (let i = 1; i < n; i++) {
		sum += nums[i];
		const q = sum % k;
		if (q === 0) return true;
		if (map.has(q) && i - map.get(q) >= 2) return true;
		if (!map.has(q)) map.set(q, i);
	}
	return false;
};

/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @param {number} [sum]
 * @param {number} [idx]
 * @param {number} [count]
 * @returns {boolean}
 */

function recurse(nums, k, sum = 0, idx = 0, count = 0, memo = new Map()) {
	const key = `${sum}-${idx}`;

	if (memo.has(key)) return memo.get(key);
	if (count > 1 && sum % k === 0) {
		return true;
	}
	if (idx >= nums.length) {
		return false;
	}

	const result = recurse(nums, k, sum + nums[idx], idx + 1, count + 1, memo) || recurse(nums, k, nums[idx], idx + 1, 1, memo);
	memo.set(key, result);
	return result;
}

module.exports = checkSubarraySum;