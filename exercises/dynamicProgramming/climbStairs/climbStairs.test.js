const climbStairs = require('./climbStairs');

test("simple case 1", () => {
    expect(climbStairs(4)).toBe(5);
});

test("simple case 2", () => {
    expect(climbStairs(3)).toBe(3);
});

test("simple case 3", () => {
    expect(climbStairs(50)).toBe(20365011074);
});
