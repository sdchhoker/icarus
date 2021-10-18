const adjacencyList = require('../../../utils/graphs/adjacencyList')
const buildQueue = require('../../../utils/queue');
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
const validPath = function (n, edges, start, end) {
    if (start === end) return true;
    const graph = adjacencyList();
    for (let i = 0; i < edges.length; i++) {
        const [from, to] = edges[i];
        graph.addEdge(from, to, 0, false);
    }

    const q = buildQueue();
    q.enqueue(start);
    const visited = Array(n).fill(false);
    while (q.size() > 0) {
        const current = q.dequeue();
        visited[current] = true;
        const neighbours = graph.list.get(current) || [];
        for (let i = 0; i < neighbours.length; i++) {
            const edge = neighbours[i];
            if (edge.to === end) {
                return true;
            }
            if (!visited[edge.to])
                q.enqueue(edge.to);
        }
    }
    return false;
}

module.exports = validPath;
