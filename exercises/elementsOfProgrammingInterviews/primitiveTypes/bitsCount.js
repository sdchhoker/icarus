// function countBits(x) {
//   let numBits = 0;
//
//   while (x > 0) {
//     numBits += x & 1;
//     x >>= 1;
//   }
//
//   return numBits;
// }
//
// console.log(countBits(12));
// Check if the number has this property: the number rotated 180 degrees equals its original value. Examples:
// the number 88 rotated 180 degrees equals 88.
// 181 rotated 180 degrees equals 181
// 182 rotated 180 degrees does not hold the property
// 118
// 986
// 0, 1, 8, 9, 6
//str - string

// const map = new Map();
// map.set('0', '0');
// map.set('1', '1');
// map.set('8', '8')
// map.set('6', '9');
// map.set('9', '6');
//
// function solve(str) {
//   let l = 0; //0
//   let r = str.length - 1; //2
//
//   while (l <= r) {
//     const ls = str[l]; // 9
//     const rs = str[r]; // 6
//
//     if (map.get(ls) !== rs) return false;
//     l += 1;
//     r -= 1;
//   }
//
//   return true;
// }
//
// console.log(solve('989'));
//
//
// function generate(num) {
//   if (num === 1) return [0, 1, 8];
//   let arr = Array(5).fill('');
//   if (num % 2 === 1) arr = [1, 8, 0];
//   let n = 1;
//
//   while (n < num) {
//     let nums = [];
//     for (let char of arr) {
//       for (let [pre, suf] of map.entries()) {
//         if (pre === '0' && n === num - 1) continue;
//         nums.push(`${pre}${char}${suf}`);
//       }
//     }
//     n += 2;
//     arr = nums;
//   }
//
//   return arr;
// }
//
// console.log(generate(2));

// 10, => 1, 8, 0
//100 => 11, 88, 69, 96
// 1000 -> 111, 888, 689,

// function pipe(arr) {
//   let output = null;
//
//   return (...args) => {
//     const fn = arr.pop();
//     output = fn(...args, output);
//     return output;
//   }
// }
//
// const piped = pipe([(str, extend) => `${extend}${str}`, str => str.toUpperCase()]);
// console.log(piped('hello world'));
// console.log(piped('!!!'));
var calculate = function (s) {
  s = s.split('').filter(a => a !== ' ');

  const set = new Set(['-', '+', '/', '*']);
  const nums = [];
  let val = 0;
  let operator = '+';

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];

    if (set.has(char) || i === s.length - 1) {
      if (!set.has(char)) val = val * 10 + parseInt(char)
      if (operator === '+') nums.push(val);
      else if (operator === '-') nums.push(-val);
      else if (operator === '*') nums.push(nums.pop() * val);
      else nums.push(Math.floor(nums.pop() / val));
      operator = char;
      val = 0;
    } else {
      val = val * 10 + parseInt(char);
    }
  }

  let ans = 0;
  for (let i of nums) ans += i;

  return ans;
};

console.log(calculate('3+2*2'));
console.log(calculate(' 3 / 2'));
