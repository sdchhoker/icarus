// leetcode 13. Roman to Integer

const map = new Map();
map.set("I", 1);
map.set("V", 5);
map.set("X", 10);
map.set("L", 50);
map.set("C", 100);
map.set("D", 500);
map.set("M", 1000);


/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    const n = s.length;
    let i = 0;
    let value = 0;

    while (i < n) {
        const curr = map.get(s[i]);
        if (i + 1 < n && map.get(s[i + 1]) > curr) {
            value += map.get(s[i + 1]) - curr;
            i += 2;
        } else {
            value += curr;
            i += 1;
        }
    }
    return value;
};

module.exports = romanToInt;
