function buildMinHeap() {
  const list = [];

  /**
   * removes top value from heap
   * @returns {{key: *, value: *} | null}
   */
  function poll() {
    if (list.length === 0) return null
    const data = list[0];
    list[0] = list.pop();
    sink(0);
    return data;
  }

  /**
   * bubbles down a value
   * @param parent {number}
   */
  function sink(parent) {
    const left = 2 * parent + 1;
    if (left >= list.length) return;
    const right = 2 * parent + 2;
    let smallest = left;
    const leftVal = list[left];
    let smallestVal = leftVal;
    const rightVal = list[right];

    if (right < list.length && leftVal.value > rightVal.value) {
      smallest = right;
      smallestVal = rightVal;
    }
    if (smallestVal.value < list[parent].value) {
      swap(parent, smallest);
      sink(smallest);
    }
  }

  /**
   * swaps two keys in an array
   * @param key1 {number}
   * @param key2 {number}
   */
  function swap(key1, key2) {
    const temp = list[key1];
    list[key1] = list[key2];
    list[key2] = temp;
  }

  /**
   * adds value to heap
   * @param {*} key
   * @param {*} value
   * @returns {void}
   */
  function add(key, value) {
    list.push({key, value});
    swim(list.length - 1);
  }

  /**
   * bubble up a value
   * @param child {number}
   */

  function swim(child) {
    const parent = Math.floor((child - 1) / 2);
    if (parent < 0 ) return;
    const childVal = list[child];
    const parentVal = list[parent];
    if (parentVal.value > childVal.value) {
      swap(parent, child);
      swim(parent);
    }
  }

  /**
   * returns size of heap
   * @returns {number}
   */
  function getSize() {
    return list.length;
  }
  return {
    add,
    poll,
    getSize
  }
}

module.exports = buildMinHeap;