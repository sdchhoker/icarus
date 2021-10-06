const adjacencyList = require('../../../utils/graphs/adjacencyList');

/**
 * finds if a path exists between two node or not
 * @param n {number}
 * @param edges {number[][]}
 * @param start {number}
 * @param end {number}
 * @returns {boolean}
 */
function validPath(n, edges, start, end) {
  if (start === end) return true;
  const graph = adjacencyList();
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    graph.addEdge(...edge, 0, false);
  }
  const stack = [];
  stack.push(start);
  const visited = Array(n).fill(false);
  const list = graph.list;
  while (stack.length > 0) {
    const currNode = stack.pop();
    visited[currNode] = true;
    const neighbours = list.get(currNode) || [];
    for (let i = 0; i < neighbours.length; i++) {
      const neighbour = neighbours[i];
      if (neighbour.to === end) return true;
      if (!visited[neighbour.to]) {
        stack.push(neighbour.to);
      }
    }
  }
  return false;
}

module.exports = validPath;