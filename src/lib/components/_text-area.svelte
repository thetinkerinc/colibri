<script>
export let value = undefined;
export let name = undefined;
export let placeholder = '';
export let autofocus = false;
export let expand = false;
export let disabled = false;
export { elem as element };

import { onMount, createEventDispatcher } from 'svelte';

onMount(() => {
	if (autofocus) {
		elem.focus();
	}
});

const dispatch = createEventDispatcher();
const KEY_ENTER = 13;

let elem;
let rows = 1;

value = value?.toString();

$: handleExpand(value, expand);

function handleKeyUp(evt) {
	if (evt.keyCode === KEY_ENTER) {
		dispatch('enter');
	} else {
		dispatch('change', value);
	}
}

function handleExpand() {
	if (!expand || !elem) {
		return;
	}
	if (!value) {
		rows = 1;
		return;
	}
	const width = elem.getBoundingClientRect().width;
	const size =
		parseInt(getComputedStyle(document.documentElement).fontSize) * (3 / 4);
	const newlines = (value.match(/\n/g) ?? []).length;
	const length = value
		.split('\n')
		.map((r) => {
			const len = r?.length ?? 0;
			return Math.floor((len * size) / width);
		})
		.reduce((a, v) => a + v);
	rows = length + newlines + 1;
}
</script>

<textarea
	{name}
	{placeholder}
	{disabled}
	{rows}
	on:focus
	on:blur
	on:keyup={handleKeyUp}
	bind:this={elem}
	bind:value />

<style>
textarea {
	width: 100%;
	border-radius: var(
		--colibri-input-border-radius,
		var(--colibri-border-radius)
	);
	border: var(--colibri-input-border, var(--colibri-border));
	background: var(--colibri-input-background, var(--colibri-background-color));
	padding: var(--colibri-input-padding);
	outline: none;
}
textarea:disabled {
	background: var(--colibri-control-disabled-background);
	opacity: var(--colibri-control-disabled-opacity);
	filter: var(--colibri-control-disabled-filter);
	cursor: not-allowed;
}
</style>
