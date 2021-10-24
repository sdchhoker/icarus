//leetcode 994. Rotting Oranges
const buildQueue = require('../../../utils/queue');
/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  let fresh = 0;
  const m = grid.length;
  const n = grid[0].length;
  const q = buildQueue();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        fresh += 1;
      } else if (grid[i][j] === 2) {
        q.enqueue([i, j])
      }
    }
  }
  q.enqueue(null);
  let time = 0;
  let paths = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  while (!q.isEmpty()) {
    const curr = q.dequeue();
    if (curr === null) {
      if (!q.isEmpty()) {
        time += 1;
        q.enqueue(null)
      }
      continue;
    }
    const [row, col] = curr;
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const nRow = row + path[0];
      const nCol = col + path[1];
      if (!(nRow < 0 || nRow >= m || nCol < 0 || nCol >= n) && grid[nRow][nCol] === 1) {
        grid[nRow][nCol] = 2;
        q.enqueue([nRow, nCol]);
        fresh -= 1;
      }
    }
  }

  if (fresh !== 0) {
    return -1
  }
  return time;
};

module.exports = orangesRotting