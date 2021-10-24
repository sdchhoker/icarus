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
 * find mst
 * @param edges{number[][]}
 * @param n {number}
 */
function findMST(edges, n) {
  edges.sort((a, b) => a[2] - b[2]);
  const graph = buildDisjointSet(n);
  const result = [];
  for (let i = 0; i < edges.length; i++) {
    const [x, y] = edges[i];
    if (graph.union(x, y)) {
      result.push(edges[i]);
    }
  }
  return result;
}

module.exports = findMST;

