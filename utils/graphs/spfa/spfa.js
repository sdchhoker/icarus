const adjacencyList = require('../adjacencyList');
const buildQueue = require('../../queue');

/**
 * shorted path faster optimized algo
 * @param edges {number[][]}
 * @param n {number}
 * @return {number[][]}
 */
function spfa(edges, n) {
    const graph = adjacencyList();

    for (let i = 0; i < edges.length; i++) {
        graph.addEdge(...edges[i]);
    }

    const {list} = graph;
    const q = buildQueue();
    const visited = new Set();
    const distances = Array(n).fill(Infinity);
    distances[0] = 0;
    q.enqueue(0);

    while (!q.isEmpty()) {
        const curr = q.dequeue();
        visited.add(curr);
        const neighbours = list.get(curr);
        for (let i = 0; i < neighbours.length; i++) {
            const {to, from, weight} = neighbours[i];
            if (distances[to] > distances[from] + weight) {
                distances[to] = distances[from] + weight;
                q.enqueue(to);
                visited.delete(to);
            }
        }
    }
    return distances;
}

module.exports = spfa;
