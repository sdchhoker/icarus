let countRibbonPieces = function (ribbonLengths, total) {
	const n = ribbonLengths.length;
	const memo = Array(n).fill(0).map(() => Array(total + 1).fill(-1));

	for (let i = 0; i < n; i += 1) memo[i][0] = 0;

	for (let i = 0; i < n; i += 1) {
		const l = ribbonLengths[i];

		for (let j = 1; j <= total; j += 1) {
			let o1 = -1, o2 = -1;

			if (j >= l) o1 = memo[i][j - l] === -1 ? -1 : memo[i][j - l] + 1;
			if (i > 0) o2 = memo[i - 1][j];

			memo[i][j] = Math.max(o1, o2);
		}
	}

	return memo[n - 1][total];
};

console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3, 5], 5)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3], 7)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5, 7], 13)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5], 7)}`);
