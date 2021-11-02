const minimumEffortPathBF = function (heights) {
    const paths = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const m = heights.length;
    const n = heights[0].length;
    let maxSoFar = Infinity;

    /**
     * @param row {number}
     * @param col {number}
     * @param currentMax {number}
     */
    function recurse(row, col, currentMax) {
        if (row === m - 1 && col === n - 1) {
            maxSoFar = Math.min(currentMax, maxSoFar);
            return currentMax;
        }

        let min = Infinity;
        const current = heights[row][col];
        heights[row][col] = -1;

        for (let k = 0; k < paths.length; k++) {
            const path = paths[k];
            const x = row + path[0];
            const y = col + path[1];
            if (x < m && y < n && y >= 0 && x >= 0 && heights[x][y] !== -1) {
                const nextVal = heights[x][y];
                const diff = Math.abs(nextVal - current);
                const updatedMax = Math.max(currentMax, diff);
                if (updatedMax < maxSoFar) {
                    const result = recurse(x, y, updatedMax);
                    min = Math.min(result, min);
                }
            }
        }

        heights[row][col] = current;
        return min;
    }

    return recurse(0, 0, 0);
}

module.exports = minimumEffortPathBF;
