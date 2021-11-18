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
const addTwoNumbers = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;
  const a1 = [];
  const a2 = [];

  while (node1 !== null) {
    a1.push(node1.val);
    node1 = node1.next;
  }

  while (node2 !== null) {
    a2.push(node2.val);
    node2 = node2.next;
  }

  let sum = "";
  let carry = 0;

  const n = Math.max(a1.length, a2.length);

  for (let i = 0; i < n; i++) {
    const num1 = a1[i] || 0;
    const num2 = a2[i] || 0;
    const cSum = String(num2 + num1 + carry);
    if (cSum.length > 1 && i !== n - 1) {
      carry = parseInt(cSum[0]);
      sum += cSum[1];
    } else {
      sum += cSum;
    }
  }

  let node = null;

  for (let i = sum.length - 1; i >= 0; i -= 1) {
    node = new ListNode(sum[i], node);
  }
  return node;
};

function recurse(node1, node2, num1, num2) {
  const next1 = node1.next;
  const next2 = node2.next;

  if (next1 === null && next2 === null) {
    //do sum here
    const val1 = node1.val;
    const val2 = node2.val;
    const sum = String(val1 + val2);
    let currentVal = sum;
    let carry = 0;

    if (sum.length > 1) {
      carry = parseInt(sum[0]);
      currentVal = parseInt(sum[1]);
    }
    const newNode = new ListNode(currentVal);
  } else if (next1 === null && next2 !== null) {
    recurse(node1, next2, num1, num2 + 1);
  } else if (next1 !== null && next2 === null) {
    recurse(next1, node2, num1 + 1, num2);
  } else {
    recurse(next1, next2, num1 + 1, num2 + 1);
  }

}

function sum(node1, node2) {

}