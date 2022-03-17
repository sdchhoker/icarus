const findMaxSteal = function (wealth) {
	const n = wealth.length;
	const dp = Array(n + 1).fill(0);

	dp[1] = wealth[0];

	for (let i = 1; i < n; i += 1) {
		dp[i + 1] = Math.max(wealth[i] + dp[i - 1], dp[i]);
	}

	return dp[n];
};

// function solve(idx, wealth, memo) {
// 	if (idx >= wealth.length) return 0;
//
// 	if (memo[idx] === undefined) {
// 		memo[idx] = Math.max(solve(idx + 1, wealth, memo), wealth[idx] + solve(idx + 2, wealth, memo));
// 	}
//
// 	return memo[idx];
// }

console.log(`Maximum stealing: ---> ${findMaxSteal([2, 5, 1, 3, 6, 2, 4])}`);
console.log(`Maximum stealing: ---> ${findMaxSteal([2, 10, 14, 8, 1])}`);
