const minCostToSupplyWater = require('./minCostToSupplyWater');

test('simple case1', () => {
  expect(minCostToSupplyWater(3, [1, 2, 2], [[1, 2, 1], [2, 3, 1]])).toBe(3);
});
