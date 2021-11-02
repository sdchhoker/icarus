/**
 * count in how many ways target be constructed
 * @param target {string}
 * @param words {string[]}
 * @returns number
 */
function countConstruct(target, words) {
    return recursive(target, words, new Map());
}

/**
 * recurse
 * @param target {string}
 * @param words {string[]}
 * @param memo {Map<string, number>}
 * @return number
 */
function recursive(target, words, memo) {
    if (target === "") return 1;
    if (memo.has(target)) return memo.get(target);
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (target.startsWith(word)) {
            const newTarget = target.substr(word.length);
            const result = recursive(newTarget, words, memo);
            memo.set(newTarget, result)
            count += result;
        }
    }
    memo.set(target, count);
    return count;
}

module.exports = countConstruct;
