const findMinFee = function (fee) {
	const n = fee.length;
	const memo = Array(n + 1).fill(0);

	memo[1] = fee[0];
	memo[2] = fee[0];

	for (let i = 2; i < n; i += 1) {
		memo[i + 1] = Math.min(fee[i] + memo[i], fee[i - 1] + memo[i - 1], fee[i - 2] + memo[i - 2]);
	}
	return memo[n];
};

console.log(`Minimum fee needed: ---> ${findMinFee([1, 2, 5, 2, 1, 2])}`);
console.log(`Minimum fee needed: ---> ${findMinFee([2, 3, 4, 5])}`);
