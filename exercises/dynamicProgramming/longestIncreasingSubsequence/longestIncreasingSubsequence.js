const findLISLength = function (nums) {
  const n = nums.length;
  const dp = Array(n).fill(0);
  let maxLength = 1;

  for (let i = 0; i < n; i += 1) {
    dp[i] = 1;

    for (let j = 0; j < i; j += 1) {
      if (nums[i] > nums[j]) {
        dp[i] = dp[j] + 1;
        maxLength = Math.max(dp[i], maxLength);
      }
    }
  }

  return maxLength;
};

console.log(
  `Length of Longest Increasing Subsequence: ---> ${findLISLength([4, 2, 3, 6, 10, 1, 12])}`
);
console.log(`Length of Longest Increasing Subsequence: ---> ${findLISLength([-4, 10, 3, 7, 15])}`);
