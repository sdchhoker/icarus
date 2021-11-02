const spfa = require('./spfa');
const bellmanFord = require('../bellmanFord/bellmanFord');

test("simple test case 1", () => {
    const edges = [[0, 1, 100], [0, 2, 500], [0, 3, 200], [3, 1, -150], [1, 2, 100], [2, 3, 100]];
    const n = 4;
    expect(spfa(edges, n)).toEqual([0, 50, 150, 200]);
});

test("complex test case 1", () => {
    const edges = [];
    const n = 100;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            edges.push([i, j, Math.floor(Math.random() * 100)])
        }
    }
    const s1 = Date.now();
    const result = bellmanFord(edges, n);
    console.log("ford ", Date.now() - s1);

    const s2 = Date.now();
    const result2 = spfa(edges, n);
    console.log("spfa ", Date.now() - s2);

    expect(result).toEqual(result2);
});
