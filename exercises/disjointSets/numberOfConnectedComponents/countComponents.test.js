const countComponents = require('./countComponents');

test('fully connected graph', () => {
  expect(countComponents( 5,  [[0,1],[1,2],[2,3],[3,4]])).toBe(1);
});

test('partially connected graph', () => {
  expect(countComponents(5, [[0,1],[1,2],[3,4]])).toBe(2)
});

test('fully unconnected graph', () => {
  expect(countComponents(5, [])).toBe(5);
});
