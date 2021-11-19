/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
    let head = null;
    let pre = null;

    while (l1 !== null || l2 !== null) {
        const node = new ListNode();
        if (l1 !== null && l2 !== null) {
            if (l1.val <= l2.val) {
                node.val = l1.val
                l1 = l1.next;
            } else {
                node.val = l2.val;
            }
        } else if (l1 !== null) {
            node.val = l1.val;
            l1 = l1.next;
        } else {
            node.val = l2.val;
            l2 = l2.next;
        }

        if (pre !== null) pre.next = node;
        pre = node;

        if (head === null) head = node;
    }

    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoListsRecursive = function (l1, l2) {
    if (l1 === null) return l2;
    else if (l2 === null) return l1;
    else {
        if (l1.val <= l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }
};

module.exports = mergeTwoLists;
