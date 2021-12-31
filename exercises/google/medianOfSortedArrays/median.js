var findMedianSortedArrays = function (nums1, nums2) {
	let arr1 = nums1;
	let arr2 = nums2;

	if (arr2.length < arr1.length) {
		arr1 = nums2;
		arr2 = nums1;
	}

	let l = 0;
	let r = arr1.length - 1;
	const total = arr1.length + arr2.length;
	let k = Math.floor(total / 2);

	while (true) {
		const mid = Math.floor((l + r) / 2);
		const mid2 = k - mid - 2;

		const r2 = mid2 + 1 < arr2.length ? arr2[mid2 + 1] : Infinity;
		const r1 = mid + 1 < arr1.length ? arr1[mid + 1] : Infinity;
		const l1 = mid < 0 ? -Infinity : arr1[mid];
		const l2 = mid2 < 0 ? -Infinity : arr2[mid2];

		if (l1 <= r2 && l2 <= r1) {
			if (total % 2 !== 0) return Math.min(r1, r2);
			return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
		} else if (l1 > r2) {
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}
};


console.log(findMedianSortedArrays([1, 3, 3], [2]));