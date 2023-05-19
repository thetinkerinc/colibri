import utils from '$utils/general.js';

import styles from '../styles/all.css?inline';

function stringifyTheme(theme) {
	const { variables, ...components } = theme;
	let definitions = stringifyVariables(variables);
	for (let component of Object.keys(components)) {
		definitions.push(
			...stringifyVariables(components[component].variables, component)
		);
	}
	return `:root {\n${definitions.join(';\n')}\n}`;
}

function stringifyVariables(obj = {}, prefix) {
	return Object.entries(obj).map(([k, v]) => {
		let def = `\t--colibri-`;
		if (prefix) {
			def += `${utils.camel2kebab(prefix)}-`;
		}
		def += `${utils.camel2kebab(k)}: ${v}`;
		return def;
	});
}

function getVariableDefinitions(component) {
	component = utils.camel2kebab(component);
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
			prop: utils.kebab2camel(r[3]),
			baseProp: utils.kebab2camel(r[5]),
			isOverride: true
		}));
	const customs = utils
		.unique([...styles.matchAll(custom)], (v) => v[1])
		.map((r) => ({
			variable: r[1],
			prop: utils.kebab2camel(r[3]),
			isOverride: false
		}));
	const definitions = [...overrides, ...customs];
	return definitions;
}

export default {
	stringifyTheme,
	getVariableDefinitions
};
