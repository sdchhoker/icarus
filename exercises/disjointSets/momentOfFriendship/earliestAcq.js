/**
 * quick union with faster find and union methods
 * @param size {number}
 * @return {{connectivity: (function(number, number): boolean), find: ((function(number): number)|*), isCyclic: (function(): boolean), union: union, getSetCount: (function(): *)}}
 */
function quickUnion(size) {
  let root = [];
  const rank = [];
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
   * @param time {number}
   * returns {number}
   */
  function union(time,x, y) {
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
      if (count === 1) return time;
    }
    return -1;
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
    getSetCount
  };
}

/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
function earliestAcq(logs, n) {
  logs.sort((a, b) => {
    return a[0] - b[0];
  });
  const qU = quickUnion(n);
  for (let i = 0; i < logs.length; i++) {
    const time = qU.union(...logs[i]);
    if (time !== -1) {
      return time
    }
  }
  return -1;
}

module.exports = earliestAcq;
