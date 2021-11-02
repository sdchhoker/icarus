// leetcode 70. Climbing Stairs
/**
 * @param {number} n
 * @param {Map<number, number>} [memo]
 * @return {number}
 */
const climbStairs = function (n, memo = new Map()) {
    if (n < 0) return 0;
    if (n === 0) return 1;
    if (memo.has(n)) return memo.get(n);
    const result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    memo.set(n, result);
    return result;
};

module.exports = climbStairs;
