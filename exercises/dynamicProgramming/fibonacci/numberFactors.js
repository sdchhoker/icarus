const CountWays = function (n) {
	const memo = [1, 1, 1, 2];

	for (let i = 4; i <= n; i += 1) {
		memo[i] = memo[i - 1] + memo[i - 3] + memo[i - 4];
	}

	return memo[n];
};

console.log(`Number of ways: ---> ${CountWays(4)}`);
console.log(`Number of ways: ---> ${CountWays(5)}`);
console.log(`Number of ways: ---> ${CountWays(60)}`);
