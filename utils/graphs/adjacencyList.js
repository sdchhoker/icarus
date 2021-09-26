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

/**
 * builds graph using adjacenecy list
 * @return {{list: Map, addEdge: addEdge}}
 */
function adjacencyList() {
  const list = new Map();

  /**
   * adds an edge between two node and adds nodes if they do not exist
   * @param from {any}
   * @param to {any}
   * @param weight {number}
   * @param directed {boolean}
   */
  function addEdge(from, to, weight = 0, directed = true) {
    const neighbours = list.get(from) || [];
    neighbours.push(new Edge(from, to, weight));
    list.set(from, neighbours);
    if (!directed) {
      addEdge(to, from, -weight);
    }
  }

  return {
    list,
    addEdge,
  };
}

module.exports = adjacencyList;
