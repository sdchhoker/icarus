const minCostClimbingStairs = require('./minCostClimbingStairs');

test("simple case 1", () => {
    const cost = [10, 15, 20];
    const output = 15;
    expect(minCostClimbingStairs(cost)).toBe(output);
});

test("simple case 2", () => {
    const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
    const output = 6;
    expect(minCostClimbingStairs(cost)).toBe(output);
});
