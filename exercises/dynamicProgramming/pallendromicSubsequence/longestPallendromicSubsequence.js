let findLPSLength = function (st) {
	const n = st.length;
	const memo = Array(n).fill(0).map(() => Array(n).fill(-1));

	for (let i = 0; i < n; i += 1) memo[i][i] = 1;

	for (let i = n - 1; i >= 0; i -= 1) {
		const char = st[i];

		for (let j = i + 1; j < n; j += 1) {
			if (char === st[j]) memo[i][j] = 2 + memo[i + 1][j - 1];
			else memo[i][j] = Math.max(memo[i + 1][j], memo[i][j - 1]);
		}
	}

	return memo[0][n - 1];
}

// function solve(l, r, str, memo) {
// 	if (l > r) return 0;
// 	if (l === r) return 1;
// 	if (memo[l][r] === -1) {
// 		if (str[l] === str[r]) {
// 			memo[l][r] = 2 + solve(l + 1, r - 1, str, memo);
// 		} else memo[l][r] = Math.max(solve(l + 1, r, str, memo), solve(l, r - 1, str, memo));
// 	}
//
// 	return memo[l][r];
// }

console.log("Length of LPS ---> " + findLPSLength("abdbca"));
console.log("Length of LPS ---> " + findLPSLength("cddpd"));
console.log("Length of LPS ---> " + findLPSLength("pssdfqrqwwqarfhdvjfcvhgfvhgvknjknhjkgkghbhgfhcfhdrsaqweqewaertyukfillhujhresyaqwerweASZSGXFGCHVGHKHJGHJGKHYTFGTFHJaaqwqasdwaadgderrtsdgwaqqaa"));