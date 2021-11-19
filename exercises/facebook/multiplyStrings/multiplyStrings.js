/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
    if (num2 === '0' || num1 === '0') return '0';

    const n1 = Array.from(num1);
    const n2 = Array.from(num2);
    n1.reverse();
    n2.reverse();
    const sums = [];
    let n = 0;

    for (let i = 0; i < n1.length; i++) {
        const k = parseInt(n1[i]);
        let carry = 0;
        const curr = Array(i).fill(0);

        for (let j = 0; j < n2.length; j++) {
            const sum = k * parseInt(n2[j]) + carry;
            carry = Math.floor(sum / 10);
            curr.push(sum % 10);
        }
        carry > 0 && curr.push(carry);
        n = Math.max(curr.length, n);
        sums.push(curr);
    }

    let carry = 0;
    const result = [];

    for (let i = 0; i < n; i++) {
        let curr = carry;

        for (let j = 0; j < sums.length; j++) {
            curr += sums[j][i] || 0;
        }

        result.push(curr % 10);
        carry = Math.floor(curr / 10);

    }

    if (carry !== 0) result.push(carry);
    return result.reverse().join('');
};

module.exports = multiply;
