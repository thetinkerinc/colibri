import utils from '$utils/general.js';

import styles from '../styles/all.css?inline';

function stringifyTheme(theme) {
	const { variables, selectors, ...components } = theme;
	return (
		stringifySelectorRules(selectors) +
		'\n' +
		stringifyVariables(variables, components)
	);
}

function stringifySelectorRules(selectors = {}) {
	return Object.keys(selectors)
		.map((selector) => {
			const rules = makeStyleDefinitions(selectors[selector]);
			return `${selector} {\n${rules}\n}`;
		})
		.join('\n');
}

function makeStyleDefinitions(rules) {
	return Object.entries(rules)
		.map(([k, v]) => `\t${utils.camel2kebab(k)}: ${v}`)
		.join(';\n');
}

function stringifyVariables(variables, components) {
	let definitions = makeVariableDefinitions(variables);
	for (let component of Object.keys(components)) {
		definitions.push(
			...makeVariableDefinitions(components[component].variables, component)
		);
	}
	return `:root {\n${definitions.join(';\n')}\n}`;
}

function makeVariableDefinitions(obj = {}, prefix) {
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
