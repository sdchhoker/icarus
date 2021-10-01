const buildMinHeap = require('../../../utils/minHeap');

class Edge {
  /**
   * create an edge between two nodes
   * @param to {number}
   * @param from {number}
   * @param weight {number}
   */
  constructor(to, from, weight) {
    this.to = to;
    this.from = from;
    this.weight = weight;
  }
}

/**
 *build a graph
 * @param size
 * @returns {{list: Edge[][], addEdge: (function(to: number, from: number, weight: number, directed: boolean))}}
 */
function buildAdjacencyList(size) {
  const list = Array(size + 1).fill(null).map(() => []);

  /**
   * adds edge between 2 nodes
   * @param to {number}
   * @param from {number}
   * @param weight {number}
   * @param directed {boolean}
   * @returns {void}
   */
  function addEdge(to, from, weight, directed) {
    list[from].push(new Edge(to, from, weight));
    if (!directed)
      list[to].push(new Edge(from, to, weight));
  }

  return {
    list,
    addEdge
  };
}

/**
 * minimum cost to supply water
 * @param n {number}
 * @param wells {number[]}
 * @param pipes{number[][]}
 * @returns  {number}
 */
function minCostToSupplyWater(n, wells, pipes) {
  const graph = buildAdjacencyList(n);
  for (let i = 0; i < n; i++) {
    graph.addEdge(i + 1, 0, wells[i], true);
  }
  for (let i = 0; i < pipes.length; i++) {
    graph.addEdge(...pipes[i], false);
  }
  const cost = [...wells];
  const heap = buildMinHeap();
  for (let i = 0; i < n; i++) {
    heap.add(i+1, wells[i]);
  }
  const list = graph.list;
  const set = new Set();
  while (set.size < n) {
    const currVal = heap.poll();
    const curr = currVal.key;
    set.add(curr);
    const neighbours = list[curr];
    for (let i = 0; i < neighbours.length; i++) {
      const edge = neighbours[i];
      if (!set.has(edge.to)) {
        if (cost[edge.to - 1] > edge.weight) {
          cost[edge.to - 1] = edge.weight;
          heap.add(edge.to, edge.weight);
        }
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += cost[i];
  }
  return sum;
}

module.exports = minCostToSupplyWater;
