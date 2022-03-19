let findCPS = function (str) {
	const n = str.length;
	const dp = Array(n).fill(0).map(() => Array(n).fill(false));
	let count = n;

	for (let i = 0; i < n; i += 1) dp[i][i] = true;

	for (let i = n - 1; i >= 0; i -= 1) {
		for (let j = i + 1; j < n; j += 1) {
			if (str[i] === str[j]) {
				if (j - i === 1 || dp[i + 1][j - 1]) {
					count += 1;
					dp[i][j] = true;
				}
			}
		}
	}

	return count;
	// function solve(l, r) {
	// 	if (l === r) {
	// 		return 1;
	// 	}
	// 	if (l > r) return 0;
	//
	// 	if (str[l] === str[r]) {
	// 		if (solve(l + 1, r - 1) === r - l - 1) {
	// 			keys.add(`${l}-${r}-${str.substr(l, r)}`);
	// 			return r - l + 1;
	// 		}
	// 	}
	//
	// 	return Math.max(solve(l + 1, r), solve(l, r - 1));
	// }
	//
	// solve(0, n - 1);
	// return keys.size + n;
}

console.log('Length of LPS: ---> ' + findCPS('abdbca'));
console.log('Length of LPS: ---> ' + findCPS('cddpd'));
console.log('Length of LPS: ---> ' + findCPS('pqr'));