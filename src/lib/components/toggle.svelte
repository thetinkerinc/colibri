<script>
export let checked = false;
export let disabled = false;
export let element = undefined;
export let style = undefined;

import { createEventDispatcher } from 'svelte';

import theme from '$utils/theme.js';

const dispatch = createEventDispatcher();

$: userStyles = theme.makeUserStyles('toggle', ['body', 'knob'], style);

function handleClick() {
	if (disabled) {
		return;
	}
	checked = !checked;
	dispatch('change', checked);
}
</script>

<button
	class="colibri-toggle-body {$userStyles.body.class}"
	class:checked
	class:disabled
	style={$userStyles.body.inlines}
	role="switch"
	aria-checked={checked}
	bind:this={element}
	on:click={handleClick}>
	<div
		class="colibri-toggle-knob {$userStyles.knob.class}"
		class:checked
		style={$userStyles.knob.inlines} />
</button>
