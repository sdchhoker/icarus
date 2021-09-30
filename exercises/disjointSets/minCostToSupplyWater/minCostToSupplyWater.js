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
 *
 * @param size
 * @returns {{list: *[][], addEdge: addEdge}}
 */
function buildAdjacencyList(size) {
  const list = Array(size + 1).fill(null).map(() => []);

  /**
   * adds edge between 2 nodes
   * @param to {number}
   * @param from {number}
   * @param weight {number}
   */
  function addEdge(to, from, weight, directed) {
    list[from].push(new Edge(to, from, weight));
    if (!directed)
      list[to].push(new Edge(from, to, weight));
  }

  return {
    addEdge,
    list,
  }
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
  const stack = [];
  for (let i = 1; i < n + 1; i++) {
    stack.push(i);
  }

  const list = graph.list;

  while (stack.length > 0) {
    const curr = stack.pop();
    const neighbours = list[curr];
    for (let i = 0; i < neighbours.length; i++) {
      const edge = neighbours[i];
      const newCost = edge.weight;
      if (newCost < cost[edge.to]) {
        cost[edge.to] = newCost;
        stack.push(edge.to);
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += cost[i];
  }
  return sum
}

module.exports = minCostToSupplyWater;
