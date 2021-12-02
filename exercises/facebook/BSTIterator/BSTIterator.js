function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val)
	this.left = (left === undefined ? null : left)
	this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 */
const BSTIterator = function (root) {
	this.stack = [];
	addLeft(root);
};

function addLeft(node) {
	while (node) {
		this.stack.push(node);
		node = node.left;
	}
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
	const node = this.stack.pop();

	if (node.right !== null) addLeft(node.right);
	
	return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
	if (this.stack.length > 0) return true;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */