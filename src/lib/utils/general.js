function clean(obj) {
	const clone = JSON.parse(JSON.stringify(obj));
	Object.keys(clone).forEach((k) => {
		if (clone[k] == undefined) {
			delete clone[k];
		}
	});
	return clone;
}

function unique(arr, hash) {
	const uniq = [];
	const seen = {};
	for (let i of arr) {
		const h = hash(i);
		if (!seen[h]) {
			uniq.push(i);
			seen[h] = true;
		}
	}
	return uniq;
}

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

function kebab2camel(s) {
	return s.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function camel2kebab(s) {
	return s.replace(/([A-Z])/g, (_, letter) => '-' + letter.toLowerCase());
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
	clean,
	unique,
	debounce,
	throttle,
	nil,
	kebab2camel,
	camel2kebab,
	slugify
};
