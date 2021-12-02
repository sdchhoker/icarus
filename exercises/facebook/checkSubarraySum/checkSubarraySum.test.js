const checkSubarraySum = require('./checkSubarraySum');

test('test case 1', () => {
	expect(checkSubarraySum([23, 2, 4, 6, 7], 7)).toBe(true);
});
