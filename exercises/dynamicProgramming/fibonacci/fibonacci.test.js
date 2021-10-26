const fib = require('./fibonacci');
const fibDivideAndConquer = require('./fibonacciDivideAndConquer');

// 1,1,2,3,5,8,13,21
test("simple case 1", () => {
    expect(fib(8)).toBe(21);
});

test("simple case 2", () => {
    expect(fib(40)).toBe(102334155);
});

test("simple case 3 divide and conquer", () => {
    expect(fib(8)).toBe(21);
});

test("simple case 3 divide and conquer", () => {
    const start = Date.now();
    expect(fibDivideAndConquer(55)).toBe(139583862445);
});
