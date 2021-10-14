class Node {
  /**
   * creates a node
   * @param val {number}
   * @param neighbors {Node []}
   */
  constructor(val = 0, neighbors = []) {
    this.neighbors = neighbors;
    this.val = val;
  }
}

/**
 *
 * @param node {Node}
 * @returns {Node}
 */
function cloneGraph(node) {
  if (node === null) return null;
  /**
   * map to hold all nodes
   * @type {Map<number, Node>}
   */
  const nodes = new Map();
  const stack = [node];
  while (stack.length > 0) {
    const curr = stack.pop();
    const copyNode = nodes.get(curr.val) || new Node(node.val, []);
    for (let i = 0; i < curr.neighbors.length; i += 1) {
      const child = curr.neighbors[i];
      const childNode = nodes.get(child.val) || new Node(child.val, []);
      if (!nodes.has(child.val)) {
        stack.push(child);
      }
      nodes.set(child.val, childNode);
      copyNode.neighbors.push(childNode);

    }
    nodes.set(curr.val, copyNode);
  }
  return nodes.get(node.val);
}

module.exports = cloneGraph;