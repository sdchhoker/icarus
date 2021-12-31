/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
	const set = new Set(words);
	const paths = [[0, 1], [0, -1], [-1, 0], [1, 0]];
	const result = [];
	const m = board.length;
	const n = board[0].length;

	for (let i = 0; i < m; i += 1) {
		for (let j = 0; j < n; j += 1) {
			const path = new Set();
			path.add(`${i}-${j}`);
			dfs(board, i, j, board[i][j], set, paths, result, path);
		}
	}

	return result;
}

function dfs(board, row, col, word, words, paths, result, way) {
	if (word.length > 10) return;

	const m = board.length - 1;
	const n = board[0].length - 1;

	if (words.has(word)) {
		words.delete(word);
		result.push(word);
	}

	for (let i = 0; i < paths.length; i += 1) {
		const path = paths[i];
		const nr = row + path[0];
		const nc = col + path[1];

		if (nr <= m && nr >= 0 && nc >= 0 && nc <= n) {
			const key = `${nr}-${nc}`;
			if (!way.has(key)) {
				way.add(key);
				dfs(board, nr, nc, word + board[nr][nc], words, paths, result, way);
				way.delete(key);
			}
		}
	}

}

console.log(findWords([["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], ["oath", "pea", "eat", "rain"]));