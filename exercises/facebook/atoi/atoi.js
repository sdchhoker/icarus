// leetcode String to Integer (atoi)
/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  const allowed = new Map();
  allowed.set("0", 0);
  allowed.set("1", 1);
  allowed.set("2", 2);
  allowed.set("3", 3);
  allowed.set("4", 4);
  allowed.set("5", 5);
  allowed.set("6", 6);
  allowed.set("7", 7);
  allowed.set("8", 8);
  allowed.set("9", 9);

  let i = 0;
  const n = s.length;
  let multiplier = 1;
  while (i < n && (s[i] === " " || s[i] === "+" || s[i] === "-")) {
    if (s[i] === "-") {
      multiplier = -1;
      i++;
      break;
    } else if (s[i] === "+") {
      i++
      break;
    }
    i++;
  }

  if (!allowed.has(s[i])) return 0;

  let result = [];

  while (i < n && allowed.has(s[i])) {
    result.push(s[i]);
    i++;
  }

  let multiple = Math.pow(10, result.length - 1);
  let ans = 0;
  for (let j = 0; j < result.length; j++) {
    ans += multiple * allowed.get(result[j]);
    multiple /= 10;
  }

  ans *= multiplier;
  if (ans > 2147483647) {
    return 2147483647;
  } else if (ans < -2147483648) {
    return -2147483648;
  }
  return ans;
};

module.exports = myAtoi;
