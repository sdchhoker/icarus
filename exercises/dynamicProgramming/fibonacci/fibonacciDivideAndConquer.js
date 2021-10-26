/**
 * fibonacci
 * @param n{number}
 * @returns {number}
 */
function fib (n) {
    return recurse(new Map(), n);
}

/**
 * recurse
 * @param memo {Map<number, number>}
 * @param n {number}
 * @returns {number}
 */
function recurse(memo, n) {
    if (n <=2) return 1;
    if (memo.has(n)) return memo.get(n);

    const result = recurse(memo, n - 1) + recurse(memo,n - 2);
    memo.set(n, result);

    return result;
}

module.exports = fib;
