/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
class Node {
	constructor(val = '') {
		this.val = val;
		this.children = new Map();
		this.word = null;
	}
}

function buildTrei(words) {
	const head = new Node();

	function map(node, word, idx) {
		if (idx === word.length) {
			node.word = word;
			return;
		}
		const char = word[idx];
		let nn = null;

		if (node.children.has(char)) nn = node.children.get(char);
		else {
			nn = new Node(char);
			node.children.set(char, nn);
		}

		map(nn, word, idx + 1);
	}

	for (let word of words) {
		map(head, word, 0);
	}

	return head;
}

var findLadders = function (beginWord, endWord, wordList) {
	if (!wordList.includes(endWord)) return [];

	const tree = buildTrei(wordList);

	return search(beginWord, tree, endWord)
};

function search(beginWord, tree, dest) {
	let found = false;
	let q = [[beginWord, []]];
	let ans = [];

	while (q.length > 0 && found !== true) {
		const len = q.length;

		for (let i = 0; i < len; i += 1) {
			const [word, path] = q.shift();
			path.push(word);

			if (find(word, tree, false, 0, q, dest, path)) {
				found = true;
				ans.push([...path, dest]);
			}
		}
	}

	return ans;
}

function find(src, node, changed, idx, result, dest, path) {
	if (idx === src.length) {
		if (changed && node.word !== null && !path.includes(node.word)) {
			if (node.word === dest) {
				return true;
			}
			result.push([node.word, [...path]]);
		}

		return false;
	}
	const children = node.children;
	const char = src[idx];
	let found = false;

	for (let [cc, n] of children.entries()) {
		if (cc === char && find(src, n, changed, idx + 1, result, dest, path)
			|| (!changed && find(src, n, true, idx + 1, result, dest, path))) found = true;
	}

	return found;
}
































