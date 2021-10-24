function buildDisjointSet(size) {
  /**
   * array to hold nodes
   * @type {number[]}
   */
  const root = [];
  /**
   * rank of nodes
   * @type {number[]}
   */
  const rank = [];

  for (let i = 0; i < size; i++) {
    root[i] = i;
    rank[i] = 1;
  }

  /**
   * find root of vertex
   * @param vertex {number}
   * @return {number}
   */
  function find(vertex) {
    if (root[vertex] === vertex) return vertex;
    const parent = find(root[vertex]);
    root[vertex] = parent;
    return parent;
  }

  /**
   * connect 2 nodes
   * @param x {number}
   * @param y {number}
   * @return {boolean}
   */
  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
      if (rank[rootX] > rank[rootY]) {
        root[rootY] = rootX;
      } else if (rank[rootX] < rank[rootY]) {
        root[rootX] = rootY;
      } else {
        root[rootX] = rootY;
        rank[rootX] += 1;
      }
      return true
    }
    return false;
  }

  return {
    union,
    find
  };
}

/**
 * @param {number[][]} points
 * @return {number}
 */
const minCostConnectPoints = function (points) {
  /**
   *
   * @type {number[][]}
   */
  const edges = [];
  const n = points.length;

  for (let i = 0; i < n; i++) {
    const [x, y] = points[i];
    for (let j = i + 1; j < n; j++) {
      const [x1, y1] = points[j];
      edges.push([i, j, Math.abs(x - x1) + Math.abs(y - y1)]);
    }
  }
  edges.sort((a, b) => a[2] - b[2]);
  const graph = buildDisjointSet(n);
  let sum = 0;

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    if (graph.union(edge[0], edge[1])) {
      sum += edge[2];
    }
  }
  return sum;
};

module.exports = minCostConnectPoints;