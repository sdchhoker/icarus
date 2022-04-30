/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const possiblyEquals = function (s1, s2) {
	const nums = new Set();
	for (let i = 0; i < 10; i += 1) nums.add(String(i));

	const set1 = new Set();
	const set2 = new Set();

	buildStrings(0, 0, [], set1, nums, s1);
	buildStrings(0, 0, [], set2, nums, s2);
	console.log(set1);
	console.log(set2)
	for (let ss1 of set1.values()) {
		for (let ss2 of set2.values()) {
			if (ss1.length !== ss2.length) continue;
			let i = 0;

			for (; i < ss1.length; i += 1) {
				if (ss1[i] !== ss2[i] && ss1[i] !== '-' && ss2[i] !== '-') break;
			}

			if (i === ss1.length) return true;
		}
	}

	return false;
};

function buildStrings(idx, val, str, set, nums, s) {
	if (idx === s.length) {
		if (val !== 0) str.push('-'.repeat(val));
		set.add(str.join(''));
		return;
	}

	let char = s[idx];

	if (!nums.has(char)) {
		if (val !== 0) str.push('-'.repeat(val));
		str.push(char);
		return buildStrings(idx + 1, 0, str, set, nums, s);
	}

	char = parseInt(char);
	const copy = [...str];
	buildStrings(idx + 1, val * 10 + char, str, set, nums, s);
	if (val !== 0) copy.push('-'.repeat(val));
	buildStrings(idx + 1, char, copy, set, nums, s);
}

console.log(possiblyEquals("l123e", "44"));
