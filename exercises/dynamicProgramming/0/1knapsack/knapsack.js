let solveKnapsack = function (profits, weights, capacity) {
    const n = profits.length;
    const memo = Array(n).fill(0).map(() => Array(capacity + 1).fill(-1));

    return solve(0, profits, weights, capacity, memo);
};

function solve(idx, profits, weights, capacity, memo) {
    if (idx >= profits.length || capacity <= 0) return 0;

    if (memo[idx][capacity] === -1) {
        const option1 = solve(idx + 1, profits, weights, capacity, memo);
        let option2 = 0;

        if (weights[idx] <= capacity) {
            option2 = profits[idx] + solve(idx + 1, profits, weights, capacity - weights[idx], memo);
        }
        memo[idx][capacity] = Math.max(option1, option2);
    }

    return memo[idx][capacity];
}

const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];

console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);
console.log(`Total knapsack profit: ---> ${bottomUpSolve(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${bottomUpSolve(profits, weights, 6)}`);

function bottomUpSolve(profits, weights, capacity) {
    const n = profits.length;
    if (capacity <= 0 || n === 0) return 0;

    const dp = Array(n).fill(0).map(() => Array(capacity + 1).fill(0));

    for (let i = 0; i < n; i += 1) {
        dp[i][0] = 0;
    }

    for (let c = 0; c <= capacity; c += 1) {
        if (weights[0] <= c) dp[0][c] = profits[0];
    }

    for (let i = 1; i < n; i += 1) {
        for (let c = 1; c <= capacity; c += 1) {
            const p1 = dp[i - 1][c];
            let p2 = 0;
            const w = c - weights[i];

            if (w >= 0) {
                p2 = profits[i] + dp[i - 1][w];
            }

            dp[i][c] = Math.max(p1, p2);
        }
    }

    let profit = dp[n - 1][capacity];
    let rc = capacity;

    for (let i = n - 1; i > 0; i -= 1) {
        if (profit !== dp[i - 1][rc]) {
            console.log(`weight ${weights[i]} was selected for profit ${profits[i]}`);
            rc -= weights[i];
            profit -= profits[i];
        }
    }

    if (rc !== 0) console.log(`weight ${weights[0]} was selected for profit ${profits[0]}`);

    return dp[n - 1][capacity];
}
