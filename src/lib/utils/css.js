import utils from '$utils/general.js';

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

function getVariableDefinitions(component) {
	const override = new RegExp(
		`var\\(\\s*(--colibri-${component}-([a-z-]+)),\\s*var\\((--colibri-([a-z-]+))\\)\\s*\\);`,
		'g'
	);
	const custom = new RegExp(
		`var\\(\\s*(--colibri-${component}-([a-z-]+))\\s*\\);`,
		'g'
	);
	const overrides = utils
		.unique([...styles.matchAll(override)], (v) => v[1])
		.map((r) => ({
			variable: r[1],
			override: r[3],
			props: {
				local: utils.kebab2camel(r[2]),
				global: utils.kebab2camel(`${component}-${r[2]}`),
				override: utils.kebab2camel(r[4])
			},
			isOverride: true
		}));
	const customs = [...styles.matchAll(custom)].map((r) => ({
		variable: r[1],
		props: {
			local: utils.kebab2camel(r[2]),
			global: utils.kebab2camel(`${component}-${r[2]}`)
		},
		isOverride: false
	}));
	const definitions = [...overrides, ...customs];
	return definitions;
}

export default {
	parseTheme,
	getVariableDefinitions
};
