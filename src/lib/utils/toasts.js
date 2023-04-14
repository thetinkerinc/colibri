import { writable } from 'svelte/store';

let toasts = writable([]);

function info(message) {
	toast('info', message);
}

function success(message) {
	toast('success', message);
}

function warning(message) {
	toast('warning', message);
}

function error(message) {
	toast('error', message);
}

function toast(type, message) {
	const toast = { id: makeId(), type, message };
	toasts.update((t) => [toast, ...t]);
}

function makeId() {
	return Math.random().toFixed(6).split('.').pop();
}

export { toasts };
export default {
	info,
	success,
	warning,
	error
};
