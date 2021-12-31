/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);

	const result = [];
	let l = intervals[0][0];
	let r = intervals[0][1];

	for (let i = 1; i < intervals.length; i += 1) {
		const c = intervals[i];

		if (c[0] <= r) {
			r = Math.max(r, c[1]);
		} else {
			result.push([l, r]);
			l = c[0];
			r = c[1];
		}
	}

	result.push([l, r]);

	return result;
};

console.log(merge([[1, 1], [2, 2]]));
