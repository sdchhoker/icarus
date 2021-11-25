/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = function (s) {
    let max = -1;
    const result = [];
    recurse(s, result, 0, 0);

    /**
     * @param {string} s
     * @param {string[]} result
     * @param {number} count
     * @param {number} idx
     * @return {boolean}
     */
    function recurse(s, result = [], count, idx) {
        if (s.length === 0 || idx > s.length - 1) return count === 0;

        const char = s.charAt(idx);

        if (char === '(') {
            if (recurse(s, result, count + 1, idx + 1) && max <= s.length) {
                max = Math.max(max, s.length);
                result.push(s);
                return true;
            }

            if (recurse(s.substring(1), result, count, idx) && max <= s.length - 1) {
                max = Math.max(max, s.length - 1);
                result.push(s.substring(1));
                return true
            }
        } else if (char === ')') {
            if (recurse(s, result, count - 1, idx + 1) && max <= s.length) {
                max = Math.max(max, s.length);
                result.push(s);
                return false;
            }
            if (recurse(s.substring(1), result, count, idx) && max <= s.length - 1) {
                max = Math.max(max, s.length - 1);
                result.push(s.substring(1));
                return true;
            }
        }
        return false;
    };

    return result;
};


module.exports = removeInvalidParentheses;
