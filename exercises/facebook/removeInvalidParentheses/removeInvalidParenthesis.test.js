const removeInvalidParentheses = require('./removeInvalidParentheses');

test('test case 1', () => {
    expect(removeInvalidParentheses('()())()')).toEqual(['()()()', '(())()']);
});
