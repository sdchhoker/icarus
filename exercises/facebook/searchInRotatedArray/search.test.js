const search = require('./search');

test('test case 1', () => {
  expect(search([1, 2, 3, 4, 5, 6, 0, -1, -2], -0)).toBe(7);
});
