const addBinary = require('./addBinary');

test('test case 1', () => {
  expect(addBinary('11', '1')).toBe('100');
  expect(addBinary('11', '10')).toBe('101');
});
