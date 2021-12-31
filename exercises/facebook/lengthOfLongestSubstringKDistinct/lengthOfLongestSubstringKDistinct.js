/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const lengthOfLongestSubstringKDistinct = function (s, k) {
	if (k === 0) return 0;
	let l = 0;
	let r = 0;
	let max = 0;
	let map = new Map();
	const n = s.length;

	while (r < n) {
		const c = s[r];
		const count = map.get(c) || 0;
		map.set(c, count + 1);

		if (map.size > k) {
			while (l < r && map.size > k) {
				const c = s[l];
				const count = map.get(c);
				if (count === 1) {
					map.delete(c);
				} else map.set(c, count - 1);
				l += 1;
			}
		}

		max = Math.max(max, r - l + 1);
		r += 1;
	}

	return max;
};

console.log(lengthOfLongestSubstringKDistinct('eceba', 2)) // 3