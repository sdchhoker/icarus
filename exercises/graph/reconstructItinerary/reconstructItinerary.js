/**
 * @param {string[][]} tickets
 * @return {string[]}
 * @return {string []}
 */
const findItinerary = function (tickets) {
  /**
   * @type {Map<string, string[]>}
   */
  const graph = new Map();
  const size = tickets.length;
  for (let i = 0; i < size; i++) {
    const [from, to] = tickets[i];
    const node = graph.has(from) ? graph.get(from) : [];
    arrangeSortedNodes(node, to);
    graph.set(from, node);
  }
  const result = [];
  const visited = new Map();
  dfs(graph, 'JFK', result, visited, size + 1);
  return result;
};

/**
 * @param graph {Map<string, string[]>}
 * @param current {string}
 * @param result {string[]}
 * @param visited {Map<string, string[]>}
 * @param n {number}
 * @return {boolean}
 */
function dfs(graph, current, result, visited, n) {
  result.push(current);
  if (result.length === n) return true;
  const neighbours = graph.get(current) || [];
  const visitedNeighbours = visited.get(current) || Array(neighbours.length).fill(false);
  visited.has(current) || visited.set(current, visitedNeighbours);
  for (let i = 0; i < neighbours.length; i++) {
    if (!visitedNeighbours[i]) {
      visitedNeighbours[i] = true;
      const child = neighbours[i];
      if (dfs(graph, child, result, visited, n)) {
        return true
      }
      visitedNeighbours[i] = false;
    }
  }
  result.pop();
  return false;
}

/**
 *
 * @param node {string []}
 * @param current {string }
 */
function arrangeSortedNodes(node, current) {
  node.push(current);
  const n = node.length;
  let i = 0;
  /**
   * @type {string | null}
   */
  for (; i < n; i++) {
    if (node[i] > current) {
      break;
    }
  }
  if (i === n) return;
  let n1 = current;
  for (let j = i; j < n; j++) {
    if (n1 < node[j]) {
      node[n - 1] = node[j];
      node[j] = n1;
      n1 = node[n - 1];
    }
  }
}

module.exports = findItinerary;