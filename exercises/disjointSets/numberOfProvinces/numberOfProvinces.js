const quickUnion = require('../../../utils/disjointSets/unionByRank');

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function findCircleNum(isConnected) {
  const n = isConnected.length;
  const qU = quickUnion(n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && isConnected[i][j] === 1) {
        qU.union(i, j);
      }
    }
  }

  return qU.getSetCount();
}

module.exports = findCircleNum;