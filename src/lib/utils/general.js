function debounce(f, t) {
	let timer;
	let ignore = true;
	return () => {
		if (timer) {
			clearTimeout(timer);
		}
		if (!ignore) {
			timer = setTimeout(f, t);
		}
		ignore = false;
	};
}

function throttle(f, t) {
	let lastCalled;
	return (args) => {
		if (!lastCalled) {
			lastCalled = new Date().valueOf();
		}
		if (new Date().valueOf() - lastCalled >= t) {
			f(args);
		}
		lastCalled = new Date().valueOf();
	};
}

function nil(val) {
	return val == undefined;
}

function slugify(title) {
	return title.replace(' ', '-').replace(/([A-Z])/g, (match, letter, idx) => {
		let replacement = letter.toLowerCase();
		if (idx > 0) {
			replacement = '-' + replacement;
		}
		return replacement;
	});
}

export default {
	debounce,
	throttle,
	nil,
	slugify
};
