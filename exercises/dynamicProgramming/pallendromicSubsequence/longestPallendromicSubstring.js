let findLPSLength = function (str) {
	const n = str.length;
	const memo = Array(n).fill(0).map(() => Array(n).fill(false));
	let maxLength = 1;

	for (let i = 0; i < n; i += 1) memo[i][i] = true;

	for (let i = n - 1; i >= 0; i -= 1) {
		for (let j = i + 1; j < n; j += 1) {
			if (str[i] === str[j]) {
				if (j - i === 1 || memo[i + 1][j - 1]) {
					memo[i][j] = true;
					maxLength = Math.max(maxLength, j - i + 1);
				}
			}
		}
	}

	return maxLength;
}

// function solve(l, r, str, memo) {
// 	if (l === r) return 1;
// 	if (l > r) return 0;
//
// 	if (memo[l][r] === 0) {
// 		if (str[l] === str[r] && solve(l + 1, r - 1, str, memo) === r - l - 1) memo[l][r] = 2 + r - l - 1;
// 		else memo[l][r] = Math.max(solve(l, r - 1, str, memo), solve(l + 1, r, str, memo));
// 	}
//
// 	return memo[l][r];
// }

console.log(`Length of LPS ---> ${findLPSLength('abdbca')}`);
console.log(`Length of LPS ---> ${findLPSLength('cddpd')}`);
console.log(`Length of LPS ---> ${findLPSLength('pqr')}`);