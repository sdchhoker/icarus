/**
 * best sum
 * @param target {number}
 * @param numbers {number[]}
 */
function bestSum(target, numbers) {
    return recurse(target, numbers, new Map());
}

/**
 * recurse solution with dp
 * @param target {number}
 * @param numbers {number[]}
 * @param memo {Map<number, number[]>}
 * @return {number[] | null}
 */
function recurse(target, numbers, memo) {
    if (target === 0) return [];
    if (memo.has(target)) return memo.get(target);
    if (target < 0) return null;

    let path = null;

    for (let i = 0; i < numbers.length; i++) {
        const remainder = target - numbers[i]
        const res = recurse(remainder, numbers, memo);
        if (res !== null) {
            res.push(numbers[i]);
            if (path === null || path.length > res.length) path = [...res];
        }
    }
    memo.set(target, path);
    return path;
}

module.exports = bestSum;
