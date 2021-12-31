function findMinArray(arr, k) {
	// Write your code here
	let i = 0;
	const n = arr.length;

	while (k > 0 && i < n) {
		const end = i + k < n ? i + k : n - 1;
		let min = arr[i];
		let l = i;

		for (let j = i + 1; j <= end; j += 1) {
			if (min > arr[j]) {
				min = arr[j];
				l = j;
			}
		}

		if (l !== i) {
			while (l > i) {
				const temp = arr[l];

				arr[l] = arr[l - 1];
				arr[l - 1] = temp;
				l -= 1;
				k -= 1;
			}
		}

		i += 1;
	}

	return arr;
}

console.log(findMinArray([5, 3, 1], 2))