const findLCSLength = function (s1, s2) {
  const n1 = s1.length;
  const n2 = s2.length;
  const dp = Array(n1 + 1).fill(0).map(() => Array(n2 + 1).fill(0));
  let max = 0;

  for (let i = 1; i <= n1; i += 1) {
    for (let j = 1; j <= n2; j += 1) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        max = Math.max(max, dp[i][j]);
      }
    }
  }

  return max;
}

console.log(`Length of Longest Common Substring: ---> ${findLCSLength('abdca', 'cbda')}`);
console.log(`Length of Longest Common Substring: ---> ${findLCSLength('passport', 'ppsspt')}`);
