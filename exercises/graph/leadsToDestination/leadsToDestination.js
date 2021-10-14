/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const leadsToDestination = function (n, edges, source, destination) {
  const graph = [];

  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    const neighbours = graph[from] || [];
    neighbours.push(to);
    graph[from] = neighbours;
  }

  return bfs(graph, source, destination, new Set());
};

/**
 *
 * @param graph {number[][]}
 * @param source {number}
 * @param destination {number}
 * @param path {Set<number>}
 * @return {boolean}
 */
function bfs(graph, source, destination, path) {
  if (path.has(source)) return false;
  path.add(source);
  const neighbours = graph[source] || [];
  if (source === destination && neighbours.length !== 0) return false;
  if (source !== destination && neighbours.length === 0) return false;
  for (let i = 0; i < neighbours.length; i++) {
    const child = neighbours[i];
    if (!bfs(graph, child, destination, path)) {
      return false;
    }
    //maintain a path set of all parents;
    //check for slef loop
  }
  path.delete(source);
  return true;
}

module.exports = leadsToDestination;
