const adjacencyList = require('../../../utils/graphs/adjacencyList');
const buildMinHeap = require('../../../utils/minHeap');

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const networkDelayTime = function (times, n, k) {
  const graph = adjacencyList();
  for (let i = 0; i < times.length; i++) {
    graph.addEdge(...times[i], true);
  }

  const list = graph.list;
  const visited = new Set();
  const q = buildMinHeap();
  q.add(k, 0);
  const distances = Array(n).fill(Infinity);
  distances[k - 1] = 0;

  while (visited.size < n && q.getSize() > 0) {
    const {key, value} = q.poll();
    visited.add(key);
    const neighbours = list.get(key) || [];

    for (let i = 0; i < neighbours.length; i++) {
      const edge = neighbours[i];
      if (!visited.has(edge.to)) {
        distances[edge.to - 1] = Math.min(distances[edge.to - 1], distances[edge.from - 1] + edge.weight);
        q.add(edge.to, value + edge.weight);
      }
    }
  }
  const max = Math.max(...distances);
  return max === Infinity ? -1 : max;
};

module.exports = networkDelayTime;
