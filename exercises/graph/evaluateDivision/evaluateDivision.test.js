const calcEquation = require('./evaluateDivision');

test('simple case with all not connected', () => {
  expect(calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]])).toEqual([6.00000, 0.50000, -1.00000, 1.00000, -1.00000]);
});

test('simple case with all connected', () => {
  expect(calcEquation([["a","b"],["b","c"],["bc","cd"]], [1.5,2.5,5.0], [["a","c"],["c","b"],["bc","cd"],["cd","bc"]])).toEqual([3.75000,0.40000,5.00000,0.20000])
});