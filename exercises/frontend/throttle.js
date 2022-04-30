function throttle(func, wait, option = {leading: true, trailing: true}) {
	const {leading, trailing} = option;
	let lastArgs = null;
	let waiting = false;

	return (...args) => {
		if (waiting) lastArgs = args;
		else {
			waiting = true;
			console.log('call in if', args);
			func(...args);
			lastArgs = null;

			setTimeout(() => {
				waiting = false;
				if (lastArgs) {
					console.log('calling in timeout', lastArgs)
					func(...lastArgs);
				}
				lastArgs = null;
			}, wait);
		}
	}
}

const calls = [['a', 2], ['h', 3], ['b', 4], ['c', 6], ['d', 9], ['e', 13], ['f', 15], ['g', 17]];
const throttled = throttle((char) => console.log(char), 3000);
const delay = (fn, args, wait) => new Promise(resolve => setTimeout(() => {
	fn(args)
	resolve();
}, wait));

for (let [arg, t] of calls) {
	delay(throttled, arg, t * 1000);
}