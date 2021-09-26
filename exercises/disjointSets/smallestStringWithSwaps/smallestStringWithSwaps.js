const quickUnion = require('../../../utils/disjointSets/unionByRank');

/**
 * Returns the lexicographically smallest string that s can be changed to after using the swaps.
 * @param s {string}
 * @param pairs {number[][]}
 * @returns {string}
 */
function smallestStringWithSwaps (s, pairs) {
  const n = s.length;
  const qU = quickUnion(n);

  for (let i = 0; i < pairs.length; i++) {
    qU.union(...pairs[i]);
  }
  const root = [];
  for (let i = 0; i < n; i += 1) {
    root[i] = qU.find(i);
  }

  const map = new Map();
  for (let i = 0; i < n; i++) {
    const currParent = root[i];
    let str = map.get(currParent) || '';
    str += s[i];
    map.set(currParent, str);
  }
  const stringArr = [];
  const keys = map.keys();

  for (let key of keys) {
    const str = map.get(key).split('').sort().join('');
    let j = 0;
    for(let i = 0; i < n; i += 1) {
      if (root[i] === key) {
        stringArr[i] = str[j];
        j += 1;
      }
    }
  }
  return stringArr.join('');
}

module.exports = smallestStringWithSwaps;