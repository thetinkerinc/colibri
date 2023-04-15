function isParentOf(parent, child, includeRoot) {
	if (parent === window || parent === document) {
		return includeRoot;
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
	isParentOf
};
