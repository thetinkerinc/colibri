<script>
export let name = undefined;
export let value = undefined;
export let group = undefined;
export let disabled = false;
export let style = undefined;
export let element = undefined;

import theme from '$utils/theme.js';

$: checked = group === value;

$: userStyles = theme.makeUserStyles(
	'checkbox',
	['container', 'body', 'box', 'check', 'label'],
	style
);
</script>

<label
	class="colibri-checkbox-container colibri-radio-container {$userStyles
		.container.class}"
	class:disabled
	bind:this={element}>
	<input type="radio" {name} {value} {disabled} bind:group />
	<button
		class="colibri-checkbox-box {$userStyles.box.class}"
		style={$userStyles.box.inlines}
		tabindex="-1"
		on:click={() => (group = value)}>
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
input[type='radio'] {
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
}
</style>
