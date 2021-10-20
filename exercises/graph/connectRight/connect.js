const buildQueue = require('../../../utils/queue');

/**
 *
 * @param val {number}
 * @param left {Node}
 * @param right {Node}
 * @param next {Node}
 * @constructor
 */
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
  if (root === null) return root;
  const q = buildQueue();
  q.enqueue(root);
  q.enqueue(null);
  while (!q.isEmpty()) {
    const current = q.dequeue();
    if (current.left !== null)
      q.enqueue(current.left);
    if (current.right !== null)
      q.enqueue(current.right);
    const next = q.peak();
    current.next = next;
    if (next === null) {
      q.dequeue();
      if (!q.isEmpty())
        q.enqueue(null);
    }
  }
  return root;
};

module.exports = connect;