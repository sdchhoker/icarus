const wordBreak = require('./wordBreak');

test('test case 1', () => {
	const s = "leetcode", wordDict = ["leet", "code"];
	expect(wordBreak(s, wordDict)).toBe(true);
});

test('test case 2', () => {
	const s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
	expect(wordBreak(s, wordDict)).toBe(false);
});

test('test case 3', () => {
	const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
	const wordDict = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"];
	expect(wordBreak(s, wordDict)).toBe(false);
});

test('test case 3', () => {
	const s = "catcatcatcatcatcatcatcatcatcatccc";
	const wordDict = ["cat", "catcatcatccc"];
	expect(wordBreak(s, wordDict)).toBe(false);
});
