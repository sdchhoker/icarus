/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
	let max = 0;
	let low = prices[0];

	for (let i = 1; i < prices.length; i++) {
		const price = prices[i];

		if (price < low) {
			low = price;
		} else {
			max = Math.max(max, price - low);
		}
	}

	return max;
};

module.exports = maxProfit;
