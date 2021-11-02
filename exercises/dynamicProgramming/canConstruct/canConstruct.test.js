const canConstruct = require('./canConstruct');

test("simple case 1", () => {
    const str = "abcdef";
    const words = ["ab", "abc", "cd", "def", "abcd"];
    expect(canConstruct(str, words)).toBe(true);
});


test("simple case 3", () => {
    const str = "abcdefghijklmnopqrstuvwxyz";
    const words = str.split("");
    expect(canConstruct(str, words)).toBe(true);
});

test("simple case 2", () => {
    const str = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
    const words = ["e", "eeeeee", "ee", "eee", "eeee", "eeeeee", "eeeeeee", "eeeeeeee", "eeeeeeeee", "eeeeeeeeeee"];
    expect(canConstruct(str, words)).toBe(false);
});
