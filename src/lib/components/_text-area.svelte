<script>
export let value = undefined;
export let name = undefined;
export let placeholder = '';
export let autofocus = false;
export let expand = false;
export let disabled = false;
export { elem as element };
export let style = undefined;

import { onMount, createEventDispatcher } from 'svelte';

import theme from '$utils/theme.js';

onMount(() => {
	if (autofocus) {
		elem.focus();
	}
});

const dispatch = createEventDispatcher();

let elem;
let rows = 1;

value = value?.toString();

$: userStyles = theme.makeUserStyles('input', ['body'], style);

$: handleExpand(value, expand);
$: handleChange(value);

function handleChange() {
	dispatch('change', value);
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
	class="colibri-input-textarea {$userStyles.body.class}"
	style={$userStyles.body.inlines}
	{name}
	{placeholder}
	{disabled}
	{rows}
	{...$$restProps}
	on:focus
	on:blur
	bind:this={elem}
	bind:value />
