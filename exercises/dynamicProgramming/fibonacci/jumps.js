const countMinJumps = function (jumps) {
	const n = jumps.length;
	const memo = Array(n).fill(Infinity);


	memo[0] = 0;
	for (let i = 0; i < n; i += 1) {
		const val = jumps[i];
		const curr = memo[i] + 1;

		if (curr === Infinity) break;

		for (let j = i + 1; j <= i + val && j < n; j += 1) {
			memo[j] = Math.min(curr, memo[j]);
		}
	}

	return memo[n - 1];
};

console.log(`Minimum jumps needed: ---> ${countMinJumps([2, 1, 1, 1, 4])}`);
console.log(`Minimum jumps needed: ---> ${countMinJumps([1, 1, 3, 6, 9, 3, 0, 1, 3])}`);
