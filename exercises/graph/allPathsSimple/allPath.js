/**
 *
 * @param graph {number [][]}
 * @returns {number[][]}
 */
function allPath(graph) {
  return findPath(graph, [], [], 0);
}

/**
 *
 * @param graph {number [][]}
 * @param path {number []}
 * @param paths {number [][]}
 * @param current {number}
 * @return {number[][]}
 */
function findPath(graph, paths, path, current) {
  path.push(current);
  if (current === graph.length - 1) {
    paths.push([...path]);
    return paths;
  }
  const neighbours = graph[current];
  for (let i = 0; i < neighbours.length; i++) {
    const child = neighbours[i];
    findPath(graph, paths, path, child);
    path.pop();
  }
  return paths;
}

module.exports = allPath;