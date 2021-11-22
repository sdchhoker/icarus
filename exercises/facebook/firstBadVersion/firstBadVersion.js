/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    return binarySearch(1, n, n, isBadVersion, 1);
  };
};

function binarySearch(left, right, n, isBadVersion, lastBad) {
  if (left > right) return lastBad;

  const mid = Math.ceil((left + right) / 2);

  if (isBadVersion(mid)) {
    return binarySearch(left, mid - 1, n, isBadVersion, mid);
  } else {
    return binarySearch(mid + 1, right, n, isBadVersion, lastBad);
  }
}

module.exports = solution;