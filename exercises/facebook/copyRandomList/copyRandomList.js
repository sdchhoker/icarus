/**
 * // Definition for a Node.
 */
function Node(val, next, random) {
	this.val = val;
	this.next = next;
	this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function (head) {
	if (head === null) return null;
	const memo = new Map();
	let node = head;

	while (node !== null) {
		const newNode = memo.get(node) || new Node(node.val, null, null);
		memo.set(node, newNode);

		if (node.next !== null) {
			const next = memo.get(node.next) || new Node(node.next.val, null, null);
			newNode.next = next;
			memo.set(node.next, next);
		}

		if (node.random !== null) {
			const random = memo.get(node.random) || new Node(node.random.val, null, null);
			newNode.random = random;
			memo.set(node.random, random);
		}

		node = node.next;
	}

	return memo.get(head);
};

module.exports = copyRandomList;