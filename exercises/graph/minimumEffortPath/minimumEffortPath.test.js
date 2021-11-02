const minimumEffortPath = require('./minimumEffortPath');
const minimumEffortPathBF = require('./minimumEffortPathBF');

test('simple case 1', () => {
    const heights = [[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]];
    const output = 0;
    expect(minimumEffortPath(heights)).toBe(output);
});

test('simple case 2', () => {
    const heights = [[1, 2, 2], [3, 8, 2], [5, 3, 5]];
    const output = 2;
    expect(minimumEffortPath(heights)).toBe(output);
});

test('simple case 3', () => {
    const heights = [[1, 2, 3], [3, 8, 4], [5, 3, 5]];
    const output = 1;
    expect(minimumEffortPath(heights)).toBe(output);
});

test('simple case 4', () => {
    const heights = [[1, 10, 6, 7, 9, 10, 4, 9]];
    const output = 9;
    expect(minimumEffortPath(heights)).toBe(output);
});
