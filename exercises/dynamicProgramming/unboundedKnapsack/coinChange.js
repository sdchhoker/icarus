let countChange = function (denominations, total) {
	const n = denominations.length;
	const memo = Array(n).fill(0).map(() => Array(total + 1).fill(0));

	for (let i = 0; i < n; i += 1) memo[i][0] = 1;

	for (let i = 0; i < n; i += 1) {
		let c = denominations[i];

		for (let t = 1; t <= total; t += 1) {
			if (t >= c && memo[i][t - c] !== 0) memo[i][t] = memo[i][t - c];
			if (i > 0) memo[i][t] += memo[i - 1][t];
		}
	}

	console.log(memo);

	return memo[n - 1][total];
};

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);