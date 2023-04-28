import { writable } from 'svelte/store';

const themeFile = writable();
const themeFileCSS = writable();
const themeVariables = writable({});
const themeObject = writable({});
const isDark = writable(false);
const styleObject = writable({});

function setStyle(obj) {
	styleObject.set(obj);
}

export default setStyle;
export {
	themeFile,
	themeFileCSS,
	themeVariables,
	themeObject,
	isDark,
	styleObject
};
