/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function (words) {
	const n = words[0].length;
	const result = [];
	const prefix = new Map();

	for (let word of words) {
		const children = new Set();
		for (let i = 1; i < word.length; i += 1) {
			children.add(word.substring(0, i));
		}
		prefix.set(word, children);
	}
	for (let word of words) {
		const grid = Array(n).fill(0).map(() => Array(n).fill(''));
		recurse(words, word, grid, 0, prefix, result);
	}

	return result;
};

function recurse(words, word, grid, row, prefix, result) {
	const n = word.length;
	for (let i = row; i < word.length; i += 1) {
		grid[row][i] = word[i];
		grid[i][row] = word[i];
	}

	if (row === n - 1) {
		const square = [];

		for (let i = 0; i < n; i += 1) {
			square.push(grid[i].join(''));
		}

		result.push(square);
		return true;
	}

	const nextSet = [];

	const str = grid[row + 1].join('').substring(0, row + 1);

	for (let curr of words) {
		const children = prefix.get(curr);

		if (children.has(str)) nextSet.push(curr);
	}

	if (nextSet.length === 0) return false;

	for (let curr of nextSet) {
		recurse(words, curr, grid, row + 1, prefix, result);
	}
}


console.log(wordSquares(["area", "lead", "wall", "lady", "ball"]));