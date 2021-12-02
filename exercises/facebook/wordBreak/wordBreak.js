/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
	const words = new Set(wordDict);
	return recurse(s, words);
};

/**
 * recurse
 * @param {string} s
 * @param {Set<string>} wordDict
 */
function recurse(s, wordDict, result = [], str = '', idx = 0, memo = new Map()) {
	if (s.length === idx) {
		if (wordDict.has(str)) result.push(str);
		return result.join('') === s;
	}
	const key = `${str}-${idx}`;
	if (memo.has(key)) return memo.get(key);

	const char = s.charAt(idx);
	
	if (wordDict.has(str)) {
		result.push(str);
		if (recurse(s, wordDict, result, char, idx + 1, memo)) return true;
		result.pop();
	}

	const res = recurse(s, wordDict, result, str + char, idx + 1, memo);
	memo.set(key, res);
	return res;
}

module.exports = wordBreak;
