var NumMatrix = function (matrix) {
    this.m = matrix.length;
    this.n = matrix[0].length;
    this.bits = Array(this.m + 1).fill(0).map(() => Array(this.n).fill(0));
    this.matrix = matrix;

    for (let i = 0; i < this.m; i += 1) {
        for (let j = 0; j < this.n; j += 1) {
            this._update(i, j, matrix[i][j]);
        }
    }
};

NumMatrix.prototype._update = function (row, col, val) {
    for (let i = row + 1; i <= this.m; i += i & -i) {
        for (let j = col + 1; j <= this.n; j += j & -j) {
            this.bits[i][j] += val;
        }
    }
}
/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function (row, col, val) {
    const v = val - this.matrix[row][col];

    this.matrix[row][col] = val;
    this._update(row, col, v);
};

NumMatrix.prototype._sum = function (row, col) {
    let sum = 0;

    for (let i = 1; i <= row; i += i & -i) {
        for (let j = 1; j <= col; j += j & -j) {
            sum += this.bits[i][j];
        }
    }

    return sum;
}
/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    const b = this._sum(row2, col1 - 1) + this._sum(row1 - 1, col2);
    const a = this._sum(row2, col2) + this._sum(row1 - 1, col1 - 1)
    return a - b;
};

const num = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
console.log(num.sumRegion(2, 1, 4, 3));
