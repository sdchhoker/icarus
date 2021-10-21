//leetcode-429. N-ary Tree Level Order Traversal
const buildQueue = require('../../../utils/queue');

/**
 * Definition for a Node.
 * @param val {number}
 * @param children {Node[]}
 * @constructor
 */
function Node(val, children) {
  this.val = val;
  this.children = children;
}


/**
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (root === null) return [];
  const q = buildQueue();
  q.enqueue(root)
  q.enqueue(null);
  const result = [];
  let arr = [];
  while (!q.isEmpty()) {
    const current = q.dequeue();
    if (current === null) {
      result.push(arr)
      if (!q.isEmpty()) {
        arr = [];
        q.enqueue(null);
      }
      continue;
    }
    arr.push(current.val);
    const children = current.children;
    for (let i = 0; i < children.length; i++) {
      q.enqueue(children[i]);
    }
  }
  return result
};

module.exports = levelOrder;