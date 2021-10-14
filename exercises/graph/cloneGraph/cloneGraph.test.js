const cloneGraph = require('./cloneGraph');

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

const testCase = [
  [[2, 4], [1, 3], [2, 4], [1, 3]],
  [[]],
  [],
  [[2], [1]]
]

let currentCase = null;
let idx = 0;

beforeAll(() => {
  const nodes = new Map();
  for (let i = 0; i < testCase[idx].length; i++) {
    const node = nodes.get(i) || new Node(i, []);
    const neighbours = testCase[idx][i]
    for (let j = 0; j < neighbours.length; j++) {
      const childNode = nodes.get(neighbours[j]) || new Node(neighbours[j], []);
      node.neighbours.push(childNode);
      nodes.set(neighbours[j], childNode);
    }
    nodes.set(i, node);
  }
  currentCase = nodes.get(0);
  idx += 1;
});

test('simple case 1', () => {

});
test('simple case 1', () => {
});
test('simple case 1', () => {
});
test('simple case 1', () => {
});