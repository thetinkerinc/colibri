import { get } from 'svelte/store';

import utils from '$utils/general.js';

import styles from '../styles/all.css?inline';

function parseTheme(theme) {
	const obj = {};
	const re = /--colibri-([a-z0-9-]+):\s*([\s\S]*?);/g;
	for (let r of theme.matchAll(re)) {
		obj[utils.kebab2camel(r[1])] = despace(r[2]);
	}
	return obj;
}

function stringifyTheme(theme) {
    const {variables, ...components}=theme;
    let definitions=stringifyVariables(variables);
    for (let component of Object.keys(components)){
        definitions.push(
            ...stringifyVariables(
                components[component].variables,
                component
            )
        );
    }
    return `:root {\n${definitions.join(';\n')}\n}`;
}

function stringifyVariables(obj, prefix){
    return Object.entries(obj).map(([k, v])=>{
        let def=`\t--colibri-`;
        if (prefix){
            def+=`${utils.camel2kebab(prefix)}-`;
        }
        def+=`${utils.camel2kebab(k)}: ${v}`;
        return def;
    });
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

function getValue(base, override) {
	let match;
	const css = get(themeFileCSS);
	if (override) {
		const overrideRe = new RegExp(`${override}:\\s*([\\s\\S]*?);`, 'g');
		match = overrideRe.exec(css);
		if (match) {
			return despace(match[1]);
		}
	}
	const baseRe = new RegExp(`${base}:\\s*([\\s\\S]*?);`, 'g');
	return despace(baseRe.exec(css)[1]);
}

function despace(v) {
	return v.replace(/\s+/g, ' ').replace(/[ ]?([()])[ ]?/g, '$1');
}

export default {
	parseTheme,
	stringifyTheme,
	getVariableDefinitions,
	getValue
};
