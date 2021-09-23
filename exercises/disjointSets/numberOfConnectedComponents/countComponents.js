const quickUnion = require('../../../utils/disjointSets/unionByRank');

/**
 * counts number of independent components in a graph
 * @param n {number}
 * @param edges {Array.<Array.<number>>}
 * @returns {number}
 */
function countComponents(n, edges) {
  const qE = quickUnion(n);
  for (let i = 0; i < edges.length; i += 1) {
    qE.union(edges[i][0], edges[i][1]);
  }

  return qE.getSetCount();
}

module.exports = countComponents;