import { BROWSER } from 'esm-env';

import colors from '$utils/colors.js';

function getFocusableElements(parent) {
	if (!BROWSER) {
		return [];
	}
	if (!parent) {
		parent = document;
	}
	const elems = Array.from(
		parent.querySelectorAll(
			'a[href], button, input, textarea, select, details, [tabindex]'
		)
	);
	return elems
		.filter((e) => {
			return (
				e.getAttribute('tabindex') !== -1 &&
				!e.hasAttribute('disabled') &&
				!e.getAttribute('aria-hidden')
			);
		})
		.sort((a, b) => {
			const aIndex = Number(a.getAttribute('tabindex')) ?? 0;
			const bIndex = Number(b.getAttribute('tabindex')) ?? 0;
			if (aIndex === bIndex) {
				return 0;
			}
			if (aIndex === 0) {
				return 1;
			}
			if (bIndex === 0) {
				return -1;
			}
			return aIndex < bIndex ? -1 : 1;
		});
}

function focusNext(elems, forward = true) {
	if (!BROWSER) {
		return;
	}
	let idx = elems.findIndex((e) => e === document.activeElement);
	if (idx === -1) {
		elems[0]?.focus();
	}
	const change = forward ? 1 : -1;
	idx += change;
	if (idx >= elems.length) {
		idx = 0;
	}
	if (idx < 0) {
		idx = elems.length - 1;
	}
	elems[idx]?.focus();
}

function download(name, content) {
	const a = document.createElement('a');
	a.setAttribute('download', name);
	a.setAttribute(
		'href',
		'data:text/plain;charset=utf-8,' + encodeURIComponent(content)
	);
	a.style.display = 'none';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

function isColor(val) {
	const re = /^#|^rgb|^hsl|^hwb|^lch|^oklch|^lab|^oklab|^color\(/g;
	return re.test(val) || colors.includes(val);
}

function isParentOf(parent, child, includeRoot) {
	if (parent === window || parent === document) {
		return includeRoot;
	}
	if (!parent || !child) {
		return false;
	}
	let test = child.parentElement;
	while (test !== null) {
		if (test === parent) {
			return true;
		}
		test = test.parentElement;
	}
	return false;
}

export default {
	getFocusableElements,
	focusNext,
	download,
	isColor,
	isParentOf
};
