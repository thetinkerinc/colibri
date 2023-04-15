<script>
export let checked = false;
export let disabled = false;

import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

function handleClick() {
	if (disabled) {
		return;
	}
	checked = !checked;
	dispatch('change', checked);
}
</script>

<div
	id="container"
	class:checked
	class:disabled
	on:click={handleClick}
	on:keyup={handleClick}>
	<div id="toggle" class:checked />
</div>

<style>
#container {
	position: relative;
	height: var(--colibri-toggle-size);
	width: calc((var(--colibri-toggle-size) * 2) - 4px);
	cursor: pointer;
	border-radius: 999px;
	padding: 2px;
	background: var(
		--colibri-toggle-background-color-unchecked,
		var(--colibri-neutral-color-light-1)
	);
	transition: background 0.2s;
}
#container.checked {
	background: var(
		--colibri-toggle-background-color-checked,
		var(--colibri-primary-color)
	);
}
#container.disabled {
	opacity: var(--colibri-control-disabled-opacity);
	filter: var(--colibri-control-disabled-filter);
	cursor: not-allowed;
}
#toggle {
	--size: calc(var(--colibri-toggle-size) - 4px);
	height: var(--size);
	width: var(--size);
	border-radius: 999px;
	background: var(--colibri-toggle-knob-color, var(--colibri-background-color));
	transition: transform 0.2s;
	transform: translateX(var(--size));
}
#toggle.checked {
	transform: translateX(0);
}
</style>
