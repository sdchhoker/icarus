// leetcode 746. Min Cost Climbing Stairs

/**
 * @param {number[]} cost
 * @param {number} [n]
 * @param {Map<number, number>} [memo]
 * @return {number}
 */
const minCostClimbingStairs = function (cost, n = -1, memo = new Map()) {
    if (n >= cost.length) return 0;
    if (memo.has(n)) return memo.get(n);
    const stepCost = n === -1 ? 0 : cost[n];
    const result = Math.min(minCostClimbingStairs(cost, n + 1, memo), minCostClimbingStairs(cost, n + 2, memo)) + stepCost;
    memo.set(n, result);
    return result;
};

module.exports = minCostClimbingStairs;
