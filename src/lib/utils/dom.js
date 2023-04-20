import colors from '$utils/colors.js';

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
	isColor,
	isParentOf
};
