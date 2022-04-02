const findSCSLength = function (s1, s2) {
  const n = s1.length;
  const m = s2.length;
  const dp = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i += 1) dp[i][0] = i;
  for (let j = 1; j <= m; j += 1) dp[0][j] = j;

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= m; j += 1) {
      if (s1[i - 1] === s2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[n][m];
};

//
// function solve(i, j, s1, s2, dp) {
//   if (i === s1.length || j === s2.length) {
//     return s1.length - i  + s2.length - j;
//   }
//
//   if (dp[i][j] === -1) {
//     if (s1[i] === s2[j]) dp[i][j] = 1 + solve(i + 1, j + 1, s1, s2, dp);
//     else dp[i][j] = 1 + Math.min(solve(i + 1, j, s1, s2, dp), solve(i, j + 1, s1, s2, dp));
//   }
//
//   return dp[i][j];
// }

console.log(
  `Length of Shortest Common Subsequence: Substring: ---> ${findSCSLength('abcf', 'bdcf')}`
);
console.log(
  `Length of Shortest Common Subsequence: Substring: ---> ${findSCSLength(
    'dynamic',
    'programming'
  )}`
);
