const buildQueue = require('../../../utils/queue');
/**
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const paths = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let count = 0;

  const stack = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '0') continue;

      count += 1;
      stack.push([i, j]);
      while (stack.length !== 0) {
        const [row, col] = stack.pop();

        for (let j = 0; j < paths.length; j++) {
          const nr = row + paths[j][0];
          const nc = col + paths[j][1];

          if (nc < n && nc >= 0 && nr < m && nr >= 0 && grid[nr][nc] === '1') {
            grid[nr][nc] = '0';
            stack.push([nr, nc]);
          }
        }
      }
    }
  }
  return count;
};

module.exports = numIslands;
