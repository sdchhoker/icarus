/**
 * disjoint set quick find
 * @param size
 * @returns {{connected: (function(number, number): boolean), find: (function(number): *), union: union}}
 * @constructor
 */
function QuickFind(size) {
  // setup
  const root = [];
  for (let i = 0; i < size; i += 1) {
    root[i] = i;
  }

  /**
   *
   * @param vertex {number}
   * @returns {number}
   */
  function find(vertex) {
    return root[vertex];
  }

  /**
   * adds to disjoint set
   * @param x {number}
   * @param y {number}
   */
  function union(x, y) {
    const parentX = find(x)
    const parentY = find(y)
    if (parentX !== parentY) {
      for (let i = 0; i < root.length; i += 1) {
        if (root[i] === parentY) {
          root[i] = parentX
        }
      }
    }
  }

  /**
   * checks if two vertexes are connected or not
   * @param x {number}
   * @param y {number}
   * @returns {boolean}
   */
  function connected(x, y) {
    // return root[x] === root[y]
  }

  return {
    find,
    union,
    connected
  }
}

module.exports = QuickFind
