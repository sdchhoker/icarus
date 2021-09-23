const findCircleNum = require('./numberOfProvinces');

test('test 1 with 2 sets', () => {
  expect(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])).toBe(2)
});

test('test 2 with 3 sets', () => {
  expect(findCircleNum([[1,0,0],[0,1,0],[0,0,1]])).toBe(3)
});

test('test 2 with 1 sets', () => {
  expect(findCircleNum([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]])).toBe(1)
});