/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const chars = Array(26).fill(0);
    const str = strs[i];

    for (let j = 0; j < str.length; j++) {
      chars[str.charCodeAt(j) - 97] += 1;
    }

    const countStr = chars.join(',');

    if (map.has(countStr)) map.get(countStr).push(str);
    else map.set(countStr, [str]);
  }

  return Array.from(map.values());
};

module.exports = groupAnagrams;