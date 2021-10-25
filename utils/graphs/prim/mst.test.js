const findMst = require('./mst');

/**
 * connection between two nodes
 */
class Edge {
  /**
   * constructor of Edge
   * @param from {any}
   * @param to {any}
   * @param weight {int}
   */
  constructor(from, to, weight = 0) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

function adjacencyList() {
  /**
   *
   * @type {Map<any, Edge[]>}
   */
  const list = new Map();

  /**
   * adds an edge between two node and adds nodes if they do not exist
   * @param from {*}
   * @param to {*}
   * @param weight {number}
   * @param directed {boolean}
   * @returns {void}
   */
  function addEdge(from, to, weight = 0, directed = true) {
    const neighbours = list.get(from) || [];
    neighbours.push(new Edge(from, to, weight));
    list.set(from, neighbours);
    if (!directed) {
      addEdge(to, from, weight);
    }
  }

  return {
    list,
    addEdge,
  };
}

function buildGraph(points) {
  const graph = adjacencyList();
  const n = points.length;
  for (let i = 0; i < n; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < n; j++) {
      const [x2, y2] = points[j];
      graph.addEdge(i, j, Math.abs(x1 - x2) + Math.abs(y1 - y2), false);
    }
  }
  return graph.list;
}

test("simple case 1", () => {
  const points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]];
  const output = 20;
  const graph = buildGraph(points);
  expect(findMst(graph)).toBe(output)
});

test("simple case 2", () => {
  const points = [[3, 12], [-2, 5], [-4, 1]];
  const output = 18;
  const graph = buildGraph(points);
  expect(findMst(graph)).toBe(output)
});

test("simple case 3", () => {
  const points = [[-1000000, -1000000], [1000000, 1000000]];
  const output = 4000000;
  const graph = buildGraph(points);
  expect(findMst(graph)).toBe(output);
});

test("simple case 4", () => {
  const points = [[0, 0]];
  const output = 0;
  const graph = buildGraph(points);
  expect(findMst(graph)).toBe(output);
});
