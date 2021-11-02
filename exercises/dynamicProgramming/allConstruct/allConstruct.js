/**
 * recurse
 * @param target {string}
 * @param words {string[]}
 * @return string[][]
 */
function allConstruct(target, words) {
    return recurse(target, words, new Map());
}

/**
 * recurse
 * @param target {string}
 * @param words {string[]}
 * @param memo {Map<string, string[][]>}
 * @returns string[][]
 */
function recurse(target, words, memo) {
    if (target === '') return [[]];
    if (memo.has(target)) return memo.get(target);

    let paths = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (target.startsWith(word)) {
            const newTarget = target.substr(word.length);
            const newPaths = recurse(newTarget, words, memo);

            for (let j = 0; j < newPaths.length; j++) {
                const path = [...newPaths[j]];
                path.push(word);
                paths.push(path);
            }
            memo.set(newTarget, newPaths);
        }
    }
    return paths;
}

module.exports = allConstruct;
