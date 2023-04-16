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
	nil,
	slugify
};
