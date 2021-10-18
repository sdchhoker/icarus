const buildQueue = require('../../../utils/queue');
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
  const q = buildQueue();
  const n = graph.length;
  const paths = [];
  q.enqueue([0]);
  while (q.size() > 0) {
    const currentPath = q.dequeue();
    const current = currentPath[currentPath.length - 1];
    const neighbours = graph[current];
    for (let i = 0; i < neighbours.length; i++) {
      const child = neighbours[i];
      const newPath = [...currentPath, child];
      if (child === n - 1) {
        paths.push(newPath);
      } else {
        q.enqueue(newPath);
      }
    }
  }
  return paths;
}

module.exports = allPathsSourceTarget;