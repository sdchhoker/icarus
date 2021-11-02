const countConstruct = require('./countConstruct');

test("simple case 1", () => {
    const str = "abcdef";
    const words = ["ab", "abc", "cd", "def", "abcd", "ef"];
    expect(countConstruct(str, words)).toBe(3);
});


test("simple case 3", () => {
    const str = "abcdefghijklmnopqrstuvwxyz";
    const words = str.split("");
    expect(countConstruct(str, words)).toBe(1);
});

test("simple case 2", () => {
    const str = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
    const words = ["e", "eeeeee", "ee", "eee", "eeee", "eeeeee", "eeeeeee", "eeeeeeee", "eeeeeeeee", "eeeeeeeeeee"];
    expect(countConstruct(str, words)).toBe(418509245);
});
