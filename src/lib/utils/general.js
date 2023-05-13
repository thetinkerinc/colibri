function clean(obj) {
	let before = JSON.stringify(obj);
	let cleaned = _clean(obj);
	let after = JSON.stringify(cleaned);
	while (before !== after) {
		before = after;
		cleaned = _clean(cleaned);
		after = JSON.stringify(cleaned);
	}
	return cleaned;
}

function _clean(obj) {
	const cleaned = clone(obj);
	Object.keys(cleaned).forEach((k) => {
		if (isObject(cleaned[k])) {
			cleaned[k] = clean(cleaned[k]);
		}
		if (cleaned[k] == undefined || isEmpty(cleaned[k])) {
			delete cleaned[k];
		}
	});
	return cleaned;
}

function isObject(obj) {
	return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

function isEmpty(obj) {
	if (isObject(obj)) {
		for (let key in obj) {
			if (Object.hasOwnProperty.call(obj, key)) {
				return false;
			}
		}
		return true;
	}
	return false;
}

function clone(obj) {
	if (obj == undefined) {
		return {};
	}
	return JSON.parse(JSON.stringify(obj));
}

function diff(obj1, obj2) {
	return Object.fromEntries(
		Object.entries(obj1).filter(([k, v]) => v !== obj2[k])
	);
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
	if (s == null) {
		return undefined;
	}
	return s.replace(/-([a-z0-9])/g, (_, letter) => letter.toUpperCase());
}

function camel2kebab(s) {
	if (s == null) {
		return undefined;
	}
	return s.replace(/([A-Z0-9])/g, (_, letter) => '-' + letter.toLowerCase());
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
	clone,
	diff,
	debounce,
	throttle,
	nil,
	kebab2camel,
	camel2kebab,
	slugify
};
