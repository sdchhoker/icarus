function canPartition(nums, sum) {
    const n = nums.length;
    const dp = Array(n).fill(0).map(() => Array(sum + 1).fill(false));

    for (let i = 0; i < n; i += 1) dp[i][0] = true;
    if (nums[0] <= sum) dp[0][nums[0]] = true;

    for (let i = 1; i < n; i += 1) {
        const num = nums[i];

        for (let j = 1; j <= sum; j += 1) {
            if (dp[i - 1][j]) {
                dp[i][j] = true;
            } else if (j >= num) {
                dp[i][j] = dp[i - 1][j - num];
            }
        }
    }

    return dp[n - 1][sum];
}

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`);
