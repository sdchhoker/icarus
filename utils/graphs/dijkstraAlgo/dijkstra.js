const buildMinHeap = require('../../minHeap');

/**
 * find shortest path
 * @param graph {Map<number, Edge>}
 * @param n {number}
 * @return {number[]}
 */
function dijkstra(graph, n) {
  const q = buildMinHeap();
  const parent = [];

  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  const visited = new Set();
  const distances = Array(n).fill(Infinity);
  distances[0] = 0;

  q.add(0, 0);

  while (visited.size < n) {
    const {key} = q.poll();
    visited.add(key);
    const neighbours = graph.get(key) || [];
    for (let i = 0; i < neighbours.length; i++) {
      const edge = neighbours[i];
      if (!visited.has(edge.to)) {
        if (distances[edge.to] > distances[key] + edge.weight) {
          distances[edge.to] = distances[key] + edge.weight;
          parent[edge.to] = edge.from;
        }
        q.add(edge.to, edge.weight);
      }
    }
  }
  return distances;
}

module.exports = dijkstra;
