/**
 * // Definition for a Node.
 */
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}


/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function (node) {
  if (node === null) return null;
  const stack = [];
  const map = new Map();
  let head = null;
  stack.push(node);

  while (stack.length !== 0) {
    const curr = stack.pop();
    let n = map.get(curr.val) || new Node(curr.val);

    if (!map.has(curr.val)) {
      map.set(curr.val, n);
    }

    if (head === null) head = n;

    const neighbors = curr.neighbors;
    for (let i = 0; i < neighbors.length; i++) {
      const child = neighbors[i];
      const val = child.val;
      const cn = map.get(val) || new Node(val);

      if (!map.has(val)) {
        stack.push(child);
        map.set(val, cn);
      }
      n.neighbors.push(cn);
    }
  }
  return head;
};