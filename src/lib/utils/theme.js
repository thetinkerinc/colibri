import { writable } from 'svelte/store';

const themeFile = writable();
const themeVariables = writable({});

export { themeFile, themeVariables };
