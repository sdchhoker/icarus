const bestSum = require('./bestSum');

test("simple case 1", () => {
    const target = 17;
    const nums = [3, 2];
    expect(bestSum(target, nums)).toEqual([2, 3, 3, 3, 3, 3]);
});

test("simple case 2", () => {
    const target = 17;
    const nums = [10, 3, 2];
    expect(bestSum(target, nums)).toEqual([2, 2, 3, 10]);
});

test("simple case 4", () => {
    const target = 7;
    const nums = [3, 5];
    expect(bestSum(target, nums)).toEqual(null);
});

test("simple case 3", () => {
    const target = 600;
    const nums = [7, 14];
    expect(bestSum(target, nums)).toEqual(null);
});
