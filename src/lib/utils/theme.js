import { writable } from 'svelte/store';

const themeFile = writable();
const themeVariables = writable({});
const themeProps = writable({});
const styleObject = writable({});

function setStyle(obj) {
	styleObject.set(obj);
}

export default setStyle;
export { themeFile, themeVariables, themeProps, styleObject };
