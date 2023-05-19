<script>
export let checked = false;
export let disabled = false;
export let element;
export let style = undefined;

import { createEventDispatcher } from 'svelte';

import theme from '$utils/theme.js';

const dispatch = createEventDispatcher();

$: userStyles = theme.makeUserStyles('toggle', ['body', 'switch'], style);

function handleClick() {
	if (disabled) {
		return;
	}
	checked = !checked;
	dispatch('change', checked);
}
</script>

<div
	class="colibri-toggle-body {$userStyles.body.class}"
	class:checked
	class:disabled
	style={$userStyles.body.inlines}
	bind:this={element}
	on:click={handleClick}
	on:keyup={handleClick}>
	<div
		class="colibri-toggle-switch {$userStyles.switch.class}"
		class:checked
		style={$userStyles.switch.inlines} />
</div>
