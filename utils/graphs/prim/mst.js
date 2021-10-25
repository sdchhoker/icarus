const buildMinHeap = require('../../minHeap')

/**
 * build mst using prim's
 * @param graph {Map<*, []Edge>}
 * @return {number}
 */
function findMst(graph) {
  const q = buildMinHeap();
  const unvisited = Array.from(graph.keys());
  const visited = new Set();
  let curr = unvisited.pop()

  visited.add(curr);
  let sum = 0;
  while (curr !== null) {
    const edges = graph.get(curr);

    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      q.add(edge.to, edge.weight);
    }
    curr = null;
    while (curr === null && q.getSize() > 0) {
      const min = q.poll();
      if (!visited.has(min.key)) {
        curr = min.key;
        visited.add(curr);
        sum += min.value;
      }
    }
    if (curr === null && visited.size !== graph.size) curr = unvisited.pop();
  }
  return sum;
}

module.exports = findMst;
