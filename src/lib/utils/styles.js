import utils from '$utils/general.js';

function _class(obj) {
	if (!obj || !obj.class) {
		return '';
	}
	return obj.class;
}

function variables(component, obj) {
	if (!obj || !obj.variables) {
		return '';
	}
	return Object.entries(obj.variables)
		.map(([k, v]) => `--colibri-${component}-${utils.camel2kebab(k)}: ${v}`)
		.join('; ');
}

function inline(obj) {
	if (!obj) {
		return '';
	}
	const styles = { ...obj };
	delete styles.class;
	delete styles.variables;
	return Object.entries(styles)
		.map(([k, v]) => `${utils.camel2kebab(k)}: ${v}`)
		.join('; ');
}

export default {
	class: _class,
	variables,
	inline
};
