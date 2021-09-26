/**
 * builds a queue with factory function
 * @returns {{enqueue: (function(*): *), size: (function()), dequeue: (function(): *), isEmpty: (function(): boolean), peak: (function(): *)}}
 * @constructor
 */
function buildQueue() {
  const arr = [];
  let tail = 0;
  let head = 0;

  /**
   * adds data to queue
   * @param data {*}
   */
  function enqueue(data) {
    arr.push(data);
    tail += 1;
  }

  /**
   * return data next in line and removes it from queue
   * @returns {*}
   */
  function dequeue() {
    const data = arr[head];
    head += 1;
    return data;
  }

  /**
   * return data next in line without removing it from queue
   * @returns {*}
   */
  function peak() {
    return arr[head];
  }

  /**
   * tells of queue is empty or not
   * @returns {boolean}
   */
  function isEmpty() {
    return tail - head === 0;
  }

  /**
   * returns size of the queue
   * @returns {number}
   */
  function size() {
    return tail - head;
  }

  return {
    enqueue,
    dequeue,
    peak,
    isEmpty,
    size
  };
}

module.exports = buildQueue;