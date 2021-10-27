const gridTraveler = require('./gridTraveler');

test("simple case 1", () => {
    expect(gridTraveler(2, 2)).toBe(2);
});

test("simple case 2", () => {
    expect(gridTraveler(20, 20)).toBe(35345263800);
});

test("simple case 3", () => {
    expect(gridTraveler(2, 3)).toBe(3);
});
