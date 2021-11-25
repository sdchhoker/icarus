/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = function (s) {
    let min = -1;
    const result = new Set();
    recurse(s, result, 0, 0);

    /**
     * @param {string} s
     * @param {Set<string>} result
     * @param {number} count
     * @param {number} idx
     * @return {void}
     */
    function recurse(s, result = [], count, idx) {
        if (s.length <= idx) {
            if (count === 0 && min <= s.length) {
                result.add(s);
                min = Math.max(min, s.length);
            }
            return;
        }

        const char = s[idx];
        if (char !== '(' && char !== ')') {
            recurse(s, result, count, idx + 1);
            return;
        }

        let n = char === ')' ? count - 1 : count + 1;
        if (n >= 0) {
            recurse(s, result, n, idx + 1);
        }

        s = s.substring(0, idx) + s.substring(idx + 1);
        recurse(s, result, count, idx);
    }

    return Array.from(result);
};


module.exports = removeInvalidParentheses;
