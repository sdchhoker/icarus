// Add any extra import statements you may need here


// Add any helper functions you may need here
//comparator = (a, b) => a < b //for minHeap;
function heap(comparator) {
	const arr = [];

	function _swap(i, j) {
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	function _sink(idx) {
		let l = 2 * idx + 1;
		let r = 2 * idx + 2;
		const n = arr.length;

		if (l >= n) return;

		let curr = l;
		if (r < n && comparator(arr[r], arr[l])) curr = r;

		if (comparator(arr[curr], arr[idx])) {
			_swap(idx, curr);
			_sink(curr);
		}
	}

	function _swim() {
		let idx = arr.length - 1;
		let parentIdx = Math.floor((idx - 1) / 2);

		while (parentIdx >= 0 && comparator(arr[idx], arr[parentIdx])) {
			_swap(parentIdx, idx);
			idx = parentIdx;
			parentIdx = Math.floor((idx - 1) / 2);
		}
	}

	function add(entry) {
		arr.push(entry);
		_swim();
	}

	function pop() {
		_swap(0, arr.length - 1);
		const ans = arr.pop();
		_sink(0);

		return ans;
	}

	function peak() {
		return arr[0];
	}

	function isEmpty() {
		return arr.length === 0;
	}

	return {
		add,
		pop,
		peak,
		isEmpty
	};
}

function findMedian(arr) {
	// Write your code here
	if (arr.length === 1) return arr;

	const minHeap = heap((a, b) => a < b);
	const maxHeap = heap((a, b) => a > b);

	const num1 = arr[0];
	const num2 = arr[1];
	minHeap.add(Math.max(num1, num2));
	maxHeap.add(Math.min(num1, num2));
	const output = [arr[0], Math.floor((arr[0] + arr[1]) / 2)];

	for (let i = 2; i < arr.length; i += 1) {
		const num = arr[i];
		const num1 = minHeap.peak();
		const num2 = maxHeap.peak();

		if (i % 2 === 0) {
			if (num <= num1) {
				maxHeap.add(num);
			} else {
				minHeap.pop();
				minHeap.add(num);
				maxHeap.add(num1);
			}
			output.push(maxHeap.peak());
		} else {
			if (num < num2) {
				maxHeap.pop();
				maxHeap.add(num);
				minHeap.add(num2);
			} else {
				minHeap.add(num);
			}
			output.push(Math.floor((minHeap.peak() + maxHeap.peak()) / 2));
		}
	}

	return output;
}

console.log(findMedian([5, 15, 1, 3]));