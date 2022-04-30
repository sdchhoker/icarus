const findMPPCuts = function (str) {
	const n = str.length;
	const dp = Array(n).fill(0).map(() => Array(n).fill(false));

	for (let i = 0; i < n; i += 1) dp[i][i] = true;

	for (let i = n - 1; i >= 0; i -= 1) {
		for (let j = i + 1; j < n; j += 1) {
			if (str[i] === str[j]) {
				if (j - i === 1 || dp[i + 1][j - 1]) {
					dp[i][j] = true;
				}
			}
		}
	}
	const cuts = Array(n).fill(0);

	for (let i = n - 1; i >= 0; i -= 1) {
		let min = n;

		for (let j = n - 1; j >= i; j -= 1) {
			if (dp[i][j]) {
				min = j === n - 1 ? 0 : Math.min(min, 1 + cuts[j + 1]);
			}
		}
		cuts[i] = min;
	}
	return cuts[0];
}

// function solve(l, r, str, dp) {
// 	if (l >= r || isPalindromic(l, r, str)) return 0;
// 	if (dp[l][r] === 0) {
// 		let minCuts = r - l;
//
// 		for (let i = l; i <= r; i += 1) {
// 			if (isPalindromic(l, i, str)) {
// 				minCuts = Math.min(minCuts, 1 + solve(i + 1, r, str, dp));
// 			}
// 		}
//
// 		dp[l][r] = minCuts;
// 	}
//
// 	return dp[l][r];
// }

function isPalindromic(l, r, str) {
	return str.substr(l, r + 1) === str.substr(l, r + 1).split('').reverse().join('');
}

console.log(`Minimum palindrome partitions ---> ${findMPPCuts('abdbca')}`);
console.log(`Minimum palindrome partitions ---> ${findMPPCuts('cdpdd')}`);
console.log(`Minimum palindrome partitions ---> ${findMPPCuts('pqr')}`);
console.log(`Minimum palindrome partitions ---> ${findMPPCuts('pp')}`);
console.log(`Minimum palindrome partitions ---> ${findMPPCuts('madam')}`);