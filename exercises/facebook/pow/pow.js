/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
	if (x === 0 || x === 1) return x;

	if (x === -1) {
		if (n % 2 === 0) return 1;
		return -1;
	}

	if (n === 0) return 1;

	let result = x;
	const counter = Math.abs(n);
	let i = 2;

	while (i <= counter) {
		result *= result;
		if (i * 2 <= counter) i *= 2;
		else break;
	}

	if (i < counter) result *= myPow(x, counter - i);
	if (n < 0) return 1 / result;

	return result;

};

console.log(myPow(2, 10));
