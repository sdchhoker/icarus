// leetcode -> 1091. Shortest Path in Binary Matrix
const buildQueue = require('../../../utils/queue');
/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) return -1;

  const n = grid.length - 1;

  if (n === 0) return 1;

  const q = buildQueue();
  const visited = [];

  for (let i = 0; i <= n; i++) {
    visited.push(Array(n + 1).fill(false));
  }

  q.enqueue([0, 0]);
  q.enqueue(null);

  let count = 1;
  const paths = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];

  while (!q.isEmpty()) {
    const current = q.dequeue();
    if (current === null) {
      count += 1;
      if (!q.isEmpty())
        q.enqueue(null);
      continue;
    }
    const [row, col] = current;
    if (row === n && col === n) return count;
    for (let i = 0; i < paths.length; i++) {
      const [r, c] = paths[i];
      const nRow = row + r;
      const nCol = col + c;
      if (nRow < 0 || nRow > n || nCol < 0 || nCol > n || visited[nRow][nCol] === true || grid[nRow][nCol] === 1) continue;
      visited[nRow][nCol] = true;
      q.enqueue([nRow, nCol]);
    }
  }
  return -1;
};

module.exports = shortestPathBinaryMatrix;