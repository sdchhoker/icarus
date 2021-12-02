/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
	const memo = [];
	let node = head;

	while (node !== null) {
		memo.push(node);
		node = node.next;
	}

	let i = 0;
	node = head;
	const n = memo.length - 1;
	const mid = Math.floor(memo.length / 2);

	while (i < mid) {
		const temp = node.next;
		const last = memo[n - i];

		node.next = last;
		last.next = temp;

		node = temp;
		i += 1;
	}
	node.next = null;
};

module.exports = reorderList;
