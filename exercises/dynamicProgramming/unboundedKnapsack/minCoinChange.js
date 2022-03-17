/*Given an infinite supply of ‘n’ coin denominations and a total money amount,
we are asked to find the minimum number of coins needed to make up that amount.*/

let countChange = function (denominations, total) {
	const n = denominations.length;
	const memo = Array(n).fill(0).map(() => Array(total + 1).fill(Infinity));

	for (let i = 0; i < n; i += 1) memo[i][0] = 0;

	for (let i = 0; i < n; i += 1) {
		const c = denominations[i];

		for (let t = 1; t <= total; t += 1) {
			let o1 = Infinity, o2 = Infinity;

			if (t >= c) o1 = memo[i][t - c] + 1;
			if (i > 0) o2 = memo[i - 1][t];

			memo[i][t] = Math.min(o1, o2)
		}
	}

	return memo[n - 1][total];
};

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);
console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 11)}`);
console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 7)}`);
console.log(`Number of ways to make change: ---> ${countChange([3, 5], 7)}`);
