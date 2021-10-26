const buildMinHeap = require('../../minHeap')

/**
 * build mst using prim's
 * @param graph {Map<*, Edge[]>}
 * @return {number}
 */
function findMst(graph) {
  const q = buildMinHeap();
  const visited = new Set();
  /** @type {number} */
  let curr = 0;
  visited.add(curr);
  let sum = 0;

  while (curr !== undefined) {
    const edges = graph.get(curr) || [];

    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      q.add(edge.to, edge.weight);
    }
    curr = undefined;
    while (curr === undefined && q.getSize() > 0) {
      /** @type {{key: *, value: *}|null}*/
      const min = q.poll();
      if (!visited.has(min.key)) {
        curr = min.key;
        visited.add(curr);
        sum += min.value;
      }
    }
  }
  return sum;
}

module.exports = findMst;
