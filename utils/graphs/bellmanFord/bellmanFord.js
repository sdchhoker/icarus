//edges = [[1, 1, 100], [0, 2, 500], [0, 3, 200], [3, 1, -150], [1, 2, 100], [2, 3, 100]]
const adjacencyList = require('../adjacencyList');

/**
 * bellman ford algo optimized
 * @param edges {number[][]}
 * @param n {number}
 */
function bellmanFord(edges, n) {
    const graph = adjacencyList();
    for (let i = 0; i < edges.length; i++) {
        graph.addEdge(...edges[i]);
    }
    const {list} = graph;
    let pre = Array(n).fill(Infinity);
    pre[0] = 0;

    for (let i = 1; i < n; i++) {
        const stack = [0];
        const current = [...pre];
        const visited = new Set();

        while (stack.length > 0) {
            const node = stack.pop();
            visited.add(node);
            const neighbours = list.get(node) || [];

            for (let j = 0; j < neighbours.length; j++) {
                const {to, from, weight} = neighbours[j];
                current[to] = Math.min(current[to], pre[from] + weight);
                !visited.has(to) && stack.push(to);
            }
        }
        pre = current;
    }
    return pre;
}

module.exports = bellmanFord;
