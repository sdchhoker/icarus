/**
 * quick union with faster find and union methods
 * @param size {number}
 * @return {{connectivity: (function(number, number): boolean), find: ((function(number): number)|*), isCyclic: (function(): boolean), union: union, getSetCount: (function(): *)}}
 */
function quickUnion(size) {
  let root = [];
  const rank = [];
  let hasCycle = false;
  let count = size;

  for (let i = 0; i < size; i++) {
    root[i] = i;
    rank[i] = 1;
  }

  /**
   * finds the root node of a vertex
   * @param vertex {number}
   * @return {number}
   */
  function find(vertex) {
    if (vertex === root[vertex]) return vertex;
    const parent = find(root[vertex])
    root[vertex] = parent;
    return parent;
  }

  /**
   * connects two node if not already connected
   * @param x {number}
   * @param y {number}
   * @returns {void}
   */
  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX !== rootY) {
      if (rank[rootX] > rank[rootY])
        root[rootY] = rootX;
      else if (rank[rootX] < rank[rootY])
        root[rootX] = rootY;
      else {
        root[rootY] = rootX;
        rank[rootX ] += 1;
      }
      count -= 1;
    } else {
      //cycle detected
      hasCycle = true;
    }
  }

  /**
   * finds if two vertexes are connected or not
   * @param x {number}
   * @param y {number}
   * @returns {boolean}
   */
  function connectivity(x, y) {
    return find(x) === find(y);
  }

  /**
   * detects if graph has cycles
   * @return {boolean}
   */
  function isCyclic() {
    return hasCycle;
  }

  /**
   * returns number of sets present in graph
   * @return {number}
   */
  function getSetCount() {
    return count;
  }

  return {
    union,
    find,
    connectivity,
    isCyclic,
    getSetCount
  };
}

module.exports = quickUnion;