let findMinimumDeletions = function (str) {
	const n = str.length;
	const dp = Array(n).fill(0).map(() => Array(n).fill(0));

	for (let i = 0; i < n; i += 1) dp[i][i] = 1;

	for (let i = n - 1; i >= 0; i -= 1) {
		for (let j = i + 1; j < n; j += 1) {
			if (str[i] === str[j]) {
				dp[i][j] = 2 + dp[i + 1][j - 1];
			} else {
				dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
			}
		}
	}

	return n - dp[0][n - 1];
}

//
// function solve(l, r, str, dp) {
// 	if (l === r) return 1;
// 	if (l > r) return 0;
//
// 	if (dp[l][r] === 0) {
// 		if (str[l] === str[r]) {
// 			dp[l][r] = 2 + solve(l + 1, r - 1, str, dp);
// 		} else dp[l][r] = Math.max(solve(l, r - 1, str, dp), solve(l + 1, r, str, dp))
// 	}
//
// 	return dp[l][r];
// }

console.log('Minimum number of deletions required ---> ' + findMinimumDeletions('abdbca'));
console.log('Minimum number of deletions required ---> ' + findMinimumDeletions('cddpd'));
console.log('Minimum number of deletions required ---> ' + findMinimumDeletions('pqr'));
