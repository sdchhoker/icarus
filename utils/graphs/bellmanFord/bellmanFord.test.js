const bellmanFord = require('./bellmanFord');

test("simple case 1", () => {
    const edges = [[0, 1, 100], [0, 2, 500], [0, 3, 200], [3, 1, -150], [1, 2, 100], [2, 3, 100]];
    const n = 4;
    expect(bellmanFord(edges, n)).toEqual([0, 50, 150, 200]);
})
