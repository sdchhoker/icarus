const CountWays = function (n) {
	let n1 = 1;
	let n2 = 1;
	let n3 = 2;

	if (n === 0 || n === 1) return n1;
	if (n === 2) return n3;

	for (let i = 3; i <= n; i += 1) {
		let temp = n1 + n2 + n3;
		n1 = n2;
		n2 = n3;
		n3 = temp;
	}

	return n3;
};

console.log(`Number of ways: ---> ${CountWays(3)}`);
console.log(`Number of ways: ---> ${CountWays(4)}`);
console.log(`Number of ways: ---> ${CountWays(5)}`);
