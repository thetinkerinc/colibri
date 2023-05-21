import { getContext } from 'svelte';
import { writable, derived } from 'svelte/store';

import styles from '$utils/styles.js';
import utils from '$utils/general.js';

function makeThemeContext(userThemeName, userTheme) {
	return {
		selectedThemeName: writable(userThemeName),
		selectedThemeObject: writable(utils.clone(userTheme)),
		userThemeObject: writable(utils.clone(userTheme)),
		isDark: writable(false)
	};
}

function makeUserStyles(component, sections, style) {
	const { styleObject } = getContext('_colibri-theme');
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

export default {
	makeThemeContext,
	makeUserStyles
};
