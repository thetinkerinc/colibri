import { writable, derived } from 'svelte/store';

import styles from '$utils/styles.js';

const themeFile = writable();
const themeFileCSS = writable();
const themeVariables = writable({});
const themeObject = writable({});
const isDark = writable(false);
const styleObject = writable({});

function makeUserStyles(component, sections, style) {
	return derived(styleObject, ($styleObject) => {
		const userStyles = {};
		for (let section of sections) {
			const _class = [
				styles.class($styleObject?.[component]?.[section]),
				styles.class(style?.[section])
			]
				.filter(Boolean)
				.join(' ');
			const inlines = [
				styles.variables(component, $styleObject?.[component]),
				styles.variables(component, style),
				styles.inline($styleObject?.[component]?.[section]),
				styles.inline(style?.[section])
			]
				.filter(Boolean)
				.join('; ');
			userStyles[section] = {
				class: _class,
				inlines
			};
		}
		return userStyles;
	});
}

function setStyle(obj) {
	styleObject.set(obj);
}

export default {
	makeUserStyles
};

export {
	setStyle,
	themeFile,
	themeFileCSS,
	themeVariables,
	themeObject,
	isDark,
	styleObject
};
