var longestIncreasingPath = function (matrix) {
	const m = matrix.length;
	const n = matrix[0].length;
	const memo = Array(m);
	for (let i = 0; i < m; i += 1) {
		memo[i] = Array(n);
	}
	const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
	let max = 0;

	for (let i = 0; i < m; i += 1) {
		for (let j = 0; j < n; j += 1) {
			const count = dfs(matrix, i, j, dirs, -Infinity, memo);
			max = Math.max(max, count);
			memo[i][j] = count;
		}
	}

	return max;
};

function dfs(matrix, row, col, dirs, prev, memo) {
	const val = matrix[row][col];
	const saved = memo[row][col];
	const m = matrix.length;
	const n = matrix[0].length;

	if (val <= prev) return 0;
	if (saved !== undefined) return saved;

	let max = 0;

	for (let i = 0; i < dirs.length; i += 1) {
		const dir = dirs[i];
		const nr = row + dir[0];
		const nc = col + dir[1];

		if (nr >= 0 && nc >= 0 && nr < m && nc < n) {
			const count = dfs(matrix, nr, nc, dirs, val, memo);
			max = Math.max(max, count);
			memo[nr][nc] = count;
		}
	}

	return max + 1;
}

console.log(longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]]));

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
	if (s.length < 4) return s;

	const l = '0'.charCodeAt(0);
	const u = '9'.charCodeAt(0);
	let num = 0;
	let ans = [];
	let curr = ''
	const stack = [];

	for (let i = 0; i < s.length; i += 1) {
		const char = s.charAt(i);
		const code = char.charCodeAt(0);

		if (code >= l && code <= u) {
			num = num * 10 + parseInt(char);

		} else if (char === '[') {
			if (curr !== '') {
				stack.push([num, curr]);
				num = 0;
				curr = '';
			}
		} else if (char === ']') {
			curr = curr.repeat(num);
			if (stack.length > 0) {
				const prev = stack.pop();
				num = prev[0]
				curr = prev[1] + curr;

			} else {
				ans.push(curr);
				num = 0;
				curr = '';
			}

		} else curr += char;
	}

	if (curr !== '') ans.push(curr);

	return ans.join('');
}




