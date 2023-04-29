import { get } from 'svelte/store';

import utils from '$utils/general.js';
import { themeFileCSS } from '$utils/theme.js';

import styles from '../styles/all.css?inline';

function parseTheme(theme) {
	const obj = {};
	const re = /--colibri-([a-z0-9-]+):\s*([\s\S]*?);/g;
	for (let r of theme.matchAll(re)) {
		const value = r[2].replace(/\n/g, '');
		obj[utils.kebab2camel(r[1])] = r[2];
	}
	return obj;
}

function stringifyTheme(theme) {
	const definitions = Object.entries(theme)
		.map(([k, v]) => {
			return `\t--colibri-${utils.camel2kebab(k)}: ${v}`;
		})
		.join(';\n');
	return `:root {\n${definitions}\n}`;
}

function getVariableDefinitions(component) {
	const override = new RegExp(
		`var\\(\\s*(--colibri-(${component}-([a-z-]+))),\\s*var\\((--colibri-([a-z-]+))\\)\\s*\\);`,
		'g'
	);
	const custom = new RegExp(
		`var\\(\\s*(--colibri-(${component}-([a-z-]+)))\\s*\\);`,
		'g'
	);
	const overrides = utils
		.unique([...styles.matchAll(override)], (v) => v[1])
		.map((r) => ({
			variable: r[1],
			baseVariable: r[4],
			props: {
				component: utils.kebab2camel(r[3]),
				theme: utils.kebab2camel(r[2]),
				base: utils.kebab2camel(r[5])
			},
			isOverride: true
		}));
	const customs = utils
		.unique([...styles.matchAll(custom)], (v) => v[1])
		.map((r) => ({
			variable: r[1],
			props: {
				component: utils.kebab2camel(r[3]),
				theme: utils.kebab2camel(r[2])
			},
			isOverride: false
		}));
	const definitions = [...overrides, ...customs];
	return definitions;
}

function getValue(variable) {
	const css = get(themeFileCSS);
	const re = new RegExp(`${variable}:\\s*([\\s\\S]*?);`, 'g');
	return re.exec(css)[1];
}

export default {
	parseTheme,
	stringifyTheme,
	getVariableDefinitions,
	getValue
};
