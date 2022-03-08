const calculate = function (s) {
	s = s.split('').filter(char => char !== ' ').reverse();
	return solve(s);
};

function solve(arr) {
	const stack = [];
	let val = 0;
	let hasVal = false;

	while (arr.length) {
		let char = arr.pop();

		if (char === '(') {
			stack.push(solve(arr));
		} else if (char === ')') {
			if (hasVal) stack.push(val);
			return find(stack);
		} else if (char === '-' || char === '+') {
			if (stack.length === 0 || hasVal) stack.push(val);
			stack.push(char);
			val = 0;
			hasVal = false;
		} else {
			val = val * 10 + parseInt(char);
			hasVal = true;
		}
	}

	if (hasVal) stack.push(val);

	return find(stack);
}

function find(arr) {
	let ans = arr[0];
	for (let i = 1; i < arr.length; i += 1) {
		if (arr[i] === '+') ans += arr[i + 1];
		else ans -= arr[i + 1]
		i += 1;
	}

	return ans;
}

console.log(calculate("- (3 + (4 + 5))"));