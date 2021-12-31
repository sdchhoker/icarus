/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
	const map = new Map();

	for (let i = 0; i < p.length; i += 1) {
		const char = p.charAt(i);
		const count = map.get(char) || 0;
		map.set(char, count + 1);
	}

	let r = 0;
	let l = 0
	const ans = [];
	let curr = new Map();
	let c = 0;

	while (r < s.length) {
		const char = s.charAt(r);

		if (map.has(char)) {
			const c1 = curr.get(char) || 0;
			const c2 = map.get(char);

			if (c1 + 1 <= c2) {
				c += 1;
				curr.set(char, c1 + 1);
			} else {
				while (l <= r) {
					const char1 = s.charAt(l);
					const count = curr.get(char1);
					const count1 = map.get(char1);

					if (count === 1) curr.delete(char1);
					else curr.set(char1, count - 1);

					c -= 1;
					l += 1;
					if (char === char1 && count - 1 <= count1) {
						curr.set(char, count1);
						c += 1;
						break;
					}
				}
			}

			if (c === p.length) {

				ans.push(l);
				c -= 1;

				const char1 = s.charAt(l);
				const count = curr.get(char1);

				if (count === 1) curr.delete(char1);
				else curr.set(char1, count - 1);

				l += 1
			}

		} else {
			curr.clear();
			c = 0;
			l = r + 1;
		}

		r += 1;
	}


	return ans;
};

console.log(findAnagrams('abaacbabc', 'abc'));
