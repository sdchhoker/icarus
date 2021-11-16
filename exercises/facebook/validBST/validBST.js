// leetcode 98. Validate Binary Search Tree

/**
 * Definition of node
 * @param val {number}
 * @param left {TreeNode}
 * @param right {TreeNode}
 * @constructor
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
    const arr = buildSortedArray(root, []);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] >= arr[i]) return false;
    }
    return true;
};

function buildSortedArray(node, arr) {
    if (node.left !== null) {
        buildSortedArray(node.left, arr);
    }
    arr.push(node.val);
    if (node.right !== null) {
        buildSortedArray(node.right, arr);
    }
    return arr;
}

function isValid2(root, high = Infinity, low = -Infinity) {
    if (root.val <= low || root.val >= high) return false;
    return isValid2(root.left, root.val, low) && isValid2(root.right, high, root.val)
}

function inOrder(root, prev = [-Infinity]) {
    if (root === null) return true;
    if (!inOrder(root.left, prev)) return false;
    if (root.val >= prev[0]) return false;
    prev[0] = root.val;
}

module.exports = isValidBST;
