function findPositions(arr, x) {
	// Write your code here
	for (let i = 0; i < arr.length; i += 1) {
		const val = arr[i];

		arr[i] = {
			val, i: i + 1
		};
	}

	const ans = [];

	for (let i = 1; i <= x; i += 1) {
		const q = [];
		const end = Math.min(x, arr.length);
		let max = arr[0];

		for (let j = 0; j < end; j += 1) {
			const obj = arr.shift();

			if (obj.val > max.val) {
				max = obj;
			}
			q.push(obj);
		}

		while (q.length > 0) {
			const obj = q.shift();

			if (obj === max) {
				ans.push(obj.i);
			} else {
				if (obj.val > 0) obj.val -= 1;
				arr.push(obj);
			}
		}
	}

	return ans;
}

console.log(findPositions([1, 2, 2, 3, 4, 5], 5));