const dijkstra = require('./dijkstra');
const adjacencyList = require('../adjacencyList');

test("simple case 1", () => {
  /** @type {number[][]} */
  const edges = [[0, 1, 1], [0, 2, 2], [1, 3, 8], [2, 3, 1], [3, 4, 3]];
  const graph = adjacencyList();

  for (let i = 0; i < edges.length; i++) {
    graph.addEdge(...edges[i]);
  }
  expect(dijkstra(graph.list, 5)).toEqual([0, 1, 2, 3, 6]);
});