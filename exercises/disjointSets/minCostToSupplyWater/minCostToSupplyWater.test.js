const minCostToSupplyWater = require('./minCostToSupplyWater');

test('simple case1', () => {
  expect(minCostToSupplyWater(3, [1, 2, 2], [[1, 2, 1], [2, 3, 1]])).toBe(3);
});

test('complex case1', () => {
  expect(minCostToSupplyWater(5, [46012,72474,64965,751,33304], [[2,1,6719],[3,2,75312],[5,3,44918]])).toBe(131704);
});

test('complex case2', () => {
  expect(minCostToSupplyWater(9, [58732,77988,55446,79246,8265,30789,39905,79968,61679],[[2,1,45475],[3,2,41579],[4,1,79418],[5,2,17589],[7,5,4371],[8,5,82103],[9,7,55500]])).toBe(362782);
});
