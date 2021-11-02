const findCheapestPrice = require('./findCheapestPrice');

test("simple case 1", () => {
    const n = 3, flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src = 0, dst = 2, k = 1;
    expect(findCheapestPrice(n, flights, src, dst, k)).toBe(200);
});

test("simple case 1", () => {
    const n = 3, flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src = 0, dst = 2, k = 0
    expect(findCheapestPrice(n, flights, src, dst, k)).toBe(500);
});
