const maxProfit = require('./maxProfit');

test('test case 1', () => {
	expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

test('test case 2', () => {
	expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});

test('test case 3', () => {
	expect(maxProfit([])).toBe(0);
});

test('test case 4', () => {
	expect(maxProfit([7, 8, 3, 2, 6, 23, 0, 3, 2, 122, 4])).toBe(122);
});
