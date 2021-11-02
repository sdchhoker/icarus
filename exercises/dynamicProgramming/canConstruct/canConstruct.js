/**
 * can construct word from an array of words
 * @param str {string}
 * @param words {string[]}
 * @returns {boolean}
 */
function canConstruct(str, words) {
    return recurse(str, str, words, new Map());
}

/**
 * can construct word from an array of words
 * @param current {string}
 * @param str {string}
 * @param words {string[]}
 * @param memo {Map<string, boolean>}
 * @returns boolean
 */
function recurse(current, str, words, memo) {
    if (current === "") return true;
    if (memo.has(current)) return memo.get(current);
    if (current.length < 0) return false;

    for (let i = 0; i < words.length; i++) {
        const curr = words[i];
        /*** @type {null | string}*/
        let newStr = current.startsWith(curr) ? current.substr(curr.length) : null;

        if (newStr !== null) {
            const result = recurse(newStr, str, words, memo);
            if (result) return true;
        }
    }
    return false;
}

module.exports = canConstruct;
