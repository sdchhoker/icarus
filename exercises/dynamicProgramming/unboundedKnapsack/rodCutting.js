const solveRodCutting = function (lengths, prices, n) {
	const nn = lengths.length;
	const memo = Array(nn).fill(0).map(() => Array(n + 1).fill(-1));

	for (let i = 0; i < nn; i += 1) {
		const l = lengths[i];
		const p = prices[i];

		for (let j = 0; j <= n; j += 1) {
			let o1 = 0, o2 = 0;
			if (j >= l) o1 = p + memo[i][j - l];
			if (i > 0) o2 = memo[i - 1][j];

			memo[i][j] = Math.max(o1, o2);
		}
	}
	return memo[nn - 1][n];
};

const lengths = [1, 2, 3, 4, 5];
const prices = [2, 6, 7, 10, 13];
console.log(`Maximum profit: ---> ${solveRodCutting(lengths, prices, 5)}`);

