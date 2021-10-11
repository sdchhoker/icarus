class Node {
    /**
     * creates a node
     * @param val {number}
     * @param neighbours {Node []}
     */
    constructor(val = 0, neighbours = []) {
        this.neighbours = neighbours;
        this.val = val;
    }
}

/**
 *
 * @param node {Node}
 * @returns {Node}
 */
function cloneGraph(node) {
    /**
     * map to hold all nodes
     * @type {Map<number, Node>}
     */
    const nodes = new Map();
    const stack = [node];
    while (stack.length > 0) {
        const curr = stack.pop();
        const copyNode = nodes.get(curr.val) ||new Node(node.val, []);
        for (let i = 0; i < curr.neighbours.length; i += 1) {
            const child = curr.neighbours[i];
            if (!nodes.has(child.val)) {
                const childNode = new Node(child.val, []);
                stack.push(childNode);
                nodes.set(child.val, childNode);
                copyNode.neighbours.push(childNode);
            }
        }
        nodes.set(curr.val, copyNode);
    }
    return nodes.get(node.val);
}

module.exports = cloneGraph;