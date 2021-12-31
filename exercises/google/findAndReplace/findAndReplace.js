const findReplaceString = function (s, indices, sources, targets) {
	const result = [];
	const arr = [];
	const k = indices.length;

	for (let i = 0; i < k; i += 1) {
		arr.push([indices[i], sources[i], targets[i]]);
	}

	arr.sort((a, b) => a[0] - b[0]);
	let j = 0;

	for (let i = 0; i < k; i += 1) {
		const [idx, str, t] = arr[i];
		const curr = s.substring(j);

		if (curr.indexOf(str) + j === idx) {
			result.push(s.substring(j, idx));
			result.push(t);
			j = idx + str.length;
		}
	}

	result.push(s.substring(j));

	return result.join('');
};
