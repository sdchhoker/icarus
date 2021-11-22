const buildQueue = require('../../../utils/queue');

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function (root) {
  if (root === null) return [];

  const q = buildQueue();
  const result = [];

  q.enqueue(root);
  q.enqueue(null);

  while (!q.isEmpty()) {
    const node = q.dequeue();

    if (node === null) {
      if (!q.isEmpty()) q.enqueue(null);
      continue;
    }
    if (q.peak() === null) result.push(node.val);

    if (node.left !== null) q.enqueue(node.left);
    if (node.right !== null) q.enqueue(node.right);
  }

  return result;
};

module.exports = rightSideView;
