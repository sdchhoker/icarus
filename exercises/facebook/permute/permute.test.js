const permute = require('./permute');

test('test case 1', () => {
    expect(permute([1, 2, 3])).toEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]);
});

test('test case 2', () => {
    expect(permute([1])).toEqual([[1]]);
});
