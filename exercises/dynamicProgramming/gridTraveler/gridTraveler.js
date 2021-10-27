/**
 * finds ways to travel in a grid
 * @param m {number}
 * @param n {number}
 * @returns {number}
 */

function gridTraveler(m, n) {
    const memo = Array(m).fill(0).map(() => Array(n).fill(Infinity));
    return recurse(m, n, 0, 0, memo);
}

/**
 *
 * @param m {number}
 * @param n {number}
 * @param row {number}
 * @param col {number}
 * @param memo {number[][]}
 */
function recurse(m, n, row, col, memo) {
    if (row === m - 1 && col === n - 1) return 1;
    if (memo[row][col] !== Infinity) return memo[row][col];
//    move right
    let right = 0;
    if (col + 1 < n) {
        right = recurse(m, n, row, col + 1, memo);
        memo[row][col + 1] = right;
    }

//    move down
    let down = 0;
    if (row + 1 < m) {
        down = recurse(m, n, row + 1, col, memo);
        memo[row + 1][col] = down;
    }
    return right + down;
}

//TODO: do this with loop

module.exports = gridTraveler;
