const calcEquation = require('./evaluateDivision');

test('simple case with all not connected', () => {
  expect(calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]])).toEqual([6.00000, 0.50000, -1.00000, 1.00000, -1.00000]);
});