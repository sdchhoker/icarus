// leetcode 1631. Path With Minimum Effort
const buildMinHeap = require('../../../utils/minHeap');

/**
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = function (heights) {
    const paths = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const n = heights.length;
    const m = heights[0].length;

    const q = buildMinHeap();
    q.add([0, 0], 0);
    const distances = Array(n).fill(0).map(() => Array(m).fill(Infinity));
    distances[0][0] = 0;
    const visited = Array(n).fill(0).map(() => Array(m).fill(false));

    while (q.getSize() > 0) {
        const {key: [i, j]} = q.poll();
        visited[i][j] = true;
        const curr = heights[i][j];
        const currentEffort = distances[i][j];

        for (let k = 0; k < paths.length; k++) {
            const path = paths[k];
            const x = i + path[0];
            const y = j + path[1];

            if (x < n && x >= 0 && y < m && y >= 0 && !visited[x][y]) {
                const effort = Math.abs(curr - heights[x][y]);
                const maxEffort = Math.max(effort, currentEffort);

                if (maxEffort < distances[x][y]) {
                    distances[x][y] = maxEffort;
                    q.add([x, y], maxEffort);
                }
            }
        }
    }
    return distances[n - 1][m - 1];
};


module.exports = minimumEffortPath;
