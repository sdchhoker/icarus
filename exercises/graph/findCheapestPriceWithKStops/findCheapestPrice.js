// 787. Cheapest Flights Within K Stops
const adjacencyList = require('../../../utils/graphs/adjacencyList');

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
const findCheapestPrice = function (n, flights, src, dst, k) {
    const graph = adjacencyList();

    for (let i = 0; i < flights.length; i++) {
        graph.addEdge(...flights[i]);
    }
    const {list} = graph;

    let pre = Array(n).fill(Infinity);
    pre[src] = 0;

    for (let i = 0; i <= k; i++) {
        const stack = [src];
        const current = [...pre];
        const visited = new Set();
        let foundChange = false;

        while (stack.length > 0) {
            const node = stack.pop();
            visited.add(node);
            const neighbours = list.get(node) || [];

            for (let j = 0; j < neighbours.length; j++) {
                const {from, to, weight} = neighbours[j];
                if (current[to] > pre[from] + weight) {
                    current[to] = pre[from] + weight;
                    foundChange = true;
                }
                if (!visited.has(to)) stack.push(to);
            }
        }
        if (!foundChange) break;
        pre = current;
    }

    return pre[dst] === Infinity ? -1 : pre[dst];
};

module.exports = findCheapestPrice;
