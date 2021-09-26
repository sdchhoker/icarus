const adjacencyList = require('../../../utils/graphs/adjacencyList');
const buildQueue = require('../../../utils/queue');

/**
 * calculate divisions
 * @param equations {string[][]}
 * @param values {number []}
 * @param queries {string [][]}
 * @return {number[]}
 */
function calcEquation(equations, values, queries) {
  const arr = [];
  const graph = adjacencyList();

  for (let i = 0; i < values.length; i++) {
    const edge = equations[i];
    graph.addEdge(edge[0], edge[1], values[i], true);
    graph.addEdge(edge[1], edge[0], 1 / values[i], true);
  }

  for (let i = 0; i < queries.length; i++) {
    const [dividend, divisor] = queries[i];
    if (graph.list.get(divisor) === undefined || graph.list.get(dividend) === undefined) arr.push(-1);
    else arr.push(buildShortestPathBFS(dividend, divisor, graph.list));
  }

  return arr;
}

/**
 * builds shortest path between two nodes
 * @param start {any}
 * @param end {any}
 * @param list {Map}
 * @return {number}
 */
function buildShortestPathBFS(start, end, list) {
  if (start === end) return 1;
  const path = new Map();
  path.set(start, undefined);

  const q = buildQueue();
  q.enqueue(start);
  const nodes = list.keys();

  const visited = new Map();
  for (let i = 0; i < nodes.length; i++) {
    visited.set(nodes[i], false);
  }
  visited.set(start, true);

  while (!q.isEmpty()) {
    const curr = q.dequeue();
    const neighbours = list.get(curr) || [];
    for (let i = 0; i < neighbours.length; i++) {
      const edge = neighbours[i];
      if (!visited.get(edge.to)) {
        visited.set(edge.from, true);
        q.enqueue(edge.to);
        path.set(edge.to, {parent: curr, weight: edge.weight});
      }
    }
  }
  let currParent = path.get(end);
  if (currParent === undefined) return -1;
  let value = 1;
  while (currParent !== undefined) {
    value *= currParent.weight;
    currParent = path.get(currParent.parent);
  }
  return value;
}

module.exports = calcEquation;