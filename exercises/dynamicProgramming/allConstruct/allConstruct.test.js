const allConstruct = require("./allConstruct");

test("simple case 1", () => {
    const str = "abcdef";
    const words = ["ab", "abc", "cd", "def", "abcd", "ef"];
    expect(allConstruct(str, words)).toEqual([['ef', 'cd', 'ab'], ['def', 'abc',], ['ef', 'abcd']]);
});


test("simple case 2", () => {
    const str = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
    const words = ["e", "eeeeee", "ee", "eee", "eeee", "eeeeee", "eeeeeee"];
    expect(allConstruct(str, words)).toEqual([]);
});
