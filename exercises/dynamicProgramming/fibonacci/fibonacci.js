// 1,1,2,3,5,8,13,21

/**
 * fibonacci series
 * @param n {number}
 * @return {number}
 */
function fib(n) {
    let num1 = 1;
    let num2 = 1;
    for (let i = 3; i <= n; i++) {
       const temp = num2;
       num2 += num1;
       num1 = temp;
    }
    return num2;
}

module.exports = fib;
