const quickUnion = require('../../../utils/disjointSets/unionByRank');

/**
 * graph is a valid tree if there are no cycles and there is only one root node
 * @param n {number}
 * @param edges {Array.<Array.<number>>}
 * @return {boolean}
 */
function validTree(n, edges) {
  const qU = quickUnion(n);
  for (let i = 0; i < edges.length; i += 1) {
    qU.union(edges[i][0], edges[i][1]);
  }
  const set = new Set();
  for (let i = 0; i < n; i += 1) {
    set.add(qU.find(i));
  }
  if (qU.isCyclic() || set.size > 1) {
    return false;
  }
  return true;
}

module.exports = validTree