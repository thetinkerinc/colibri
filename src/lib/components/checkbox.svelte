<script>
export let checked = false;
export let name = undefined;
export let value = undefined;
export let disabled = false;
export let element = undefined;
export let style = undefined;

import theme from '$utils/theme.js';

$: userStyles = theme.makeUserStyles(
	'checkbox',
	['container', 'body', 'box', 'check', 'label'],
	style
);

function handleKeydown(evt) {
	if (evt.key === ' ' && !disabled) {
		evt.preventDefault();
		checked = !checked;
	}
}
</script>

<label
	class="colibri-checkbox-container {$userStyles.container.class}"
	class:disabled
	bind:this={element}>
	<input
		type="checkbox"
		{name}
		{value}
		{disabled}
		tabindex="-1"
		bind:checked
		on:change />
	<button
		class="colibri-checkbox-box {$userStyles.box.class}"
		style={$userStyles.box.inlines}
		on:keydown={handleKeydown}>
		{#if checked}
			<div
				class="colibri-checkbox-check {$userStyles.check.class}"
				style={$userStyles.check.inlines} />
		{/if}
	</button>
	<div class={$userStyles.label.class} style={$userStyles.label.inlines}>
		<slot />
	</div>
</label>

<style>
/* taken from https://css-tricks.com/inclusively-hidden/ */
input[type='checkbox'] {
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
}
</style>
