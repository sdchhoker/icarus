const validPath = require('./findPath');

test("simple case 1", () => {
    const n = 3, edges = [[0,1],[1,2],[2,0]], start = 0, end = 2;
    expect(validPath(n, edges, start, end)).toBe(true);
});

test("simple case 2", () => {
    const n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], start = 0, end = 5;
    expect(validPath(n, edges, start, end)).toBe(false);
});

test("simple case 3", () => {
    const n = 1, edges = [], start = 0, end = 0;
    expect(validPath(n, edges, start, end)).toBe(true);
});

test("simple case 4", () => {
    const n = 10, edges = [[4,3],[1,4],[4,8],[1,7],[6,4],[4,2],[7,4],[4,0],[0,9],[5,4]], start = 5, end = 9;
    expect(validPath(n, edges, start, end)).toBe(true);
});
