const {product1, product2, product3, product4} = require('./product');

test('case 1', () => {
  const input = [1, 2, 3, 4, 5];
  const output = [120, 60, 40, 30, 24];
  expect(product2(input)).toEqual(output);
  expect(product1(input)).toEqual(output);
  expect(product3(input)).toEqual(output);
  expect(product4(input)).toEqual(output);
});

test('case 2', () => {
  const input = [0, 2, 3, 4, 5];
  const output = [120, 0, 0, 0, 0];
  expect(product2(input)).toEqual(output);
  expect(product1(input)).toEqual(output);
  expect(product3(input)).toEqual(output);
  expect(product4(input)).toEqual(output);
});

test('case 3', () => {
  const input = [0, 0, 3, 4, 5];
  const output = [0, 0, 0, 0, 0];
  expect(product2(input)).toEqual(output);
  expect(product1(input)).toEqual(output);
  expect(product3(input)).toEqual(output);
  expect(product4(input)).toEqual(output);
});

