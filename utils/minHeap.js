function buildMinHeap() {
  const map = new Map();
  const queue = [];
  let size = 0

  /**
   * returns if a key is present or not
   * @param key
   * @returns {boolean}
   */
  function peek(key) {
    return map.has(key);
  }

  function poll() {
    const data = queue[0];
    let key = queue.pop();
    map.delete(key);
    queue[0] = key;
    map.set(key, 0);
    let position = 0;
    while (true) {
      const left = 2 * position + 1;
      if (left >= size) break;
      const right = 2 * position + 2;
      const leftKey = queue[left];
      const rightKey = queue[right];
      let smallest = left;
      let smallestKey = leftKey
      if (right < size && map.get(leftKey) > map.get(rightKey)) {
        smallest = right;
        smallestKey = rightKey;
      }

      if (map.get(key) < map.get(smallest)) break;
      swap(smallestKey, key, smallest, position);
      key = smallestKey;
      position = smallest;
    }
    return data;
  }

  function swap(key1, key2, pos1, pos2) {
    const val1 = map.get(key1);
    const val2 = map.get(key2);

    map.set(key1, val2);
    map.set(key2, val1);

    queue[pos1] = key2;
    queue[pos2] = key1;
  }

  function add(key, value) {
    queue.push(value);
    let position = queue.length - 1;
    let currKey = key;
    map.set(key, value);
    let parentPosition = Math.floor((position - 1) / 2);
    let parentKey = queue[parentPosition];

    while (parentPosition >= 0 && map.get(parentKey) > map.get(currKey)) {
      swap(parentKey, currKey, parentPosition, position);
      position = parentPosition;
      currKey = parentKey;
      parentPosition = Math.floor((position - 1) / 2);
      parentKey = queue[parentPosition];
    }
    size += 1;
  }

  return {
    peek,
    poll,
    add
  }
}

module.exports = buildMinHeap;