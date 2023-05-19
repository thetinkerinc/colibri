<script>
export let checked = undefined;
export let group = undefined;
export let allowMultiple = false;
export let value = undefined;
export let disabled = false;
export let clearable = false;
export let element;
export let style;

import theme from '$utils/theme.js';

let loaded = false;

$: userStyles = theme.makeUserStyles(
	'checkbox',
	['container', 'body', 'box', 'check'],
	style
);

$: handleAllowMultiple(allowMultiple);
$: isChecked = _isChecked(checked, group);

function handleClick() {
	if (disabled) {
		return;
	}
	if (value != undefined) {
		if (allowMultiple) {
			const idx = group.indexOf(value);
			if (idx < 0) {
				group = [...group, value];
			} else {
				group = [...group.slice(0, idx), ...group.slice(idx + 1)];
			}
		} else if (clearable && value === group) {
			group = undefined;
		} else {
			group = value;
		}
	} else {
		checked = !checked;
	}
}

function handleAllowMultiple() {
	if (!loaded) {
		if (allowMultiple && !Array.isArray(group)) {
			group = [];
		}
		loaded = true;
	} else {
		if (allowMultiple) {
			if (group) {
				group = [group];
			} else {
				group = [];
			}
		} else {
			group = undefined;
		}
	}
}

function _isChecked() {
	if (value != undefined) {
		if (allowMultiple) {
			return group.includes(value);
		}
		return group === value;
	}
	return checked;
}
</script>

<div
	class="colibri-checkbox-container {$userStyles.container.class}"
	class:disabled
	style={$userStyles.container.inlines}
	bind:this={element}
	on:click={handleClick}
	on:keyup={handleClick}>
	<div
		class="colibri-checkbox-box {$userStyles.box.class}"
		style={$userStyles.box.inlines}>
		{#if isChecked}
			<div
				class="colibri-checkbox-check {$userStyles.check.class}"
				style={$userStyles.check.inlines} />
		{/if}
	</div>
	<div>
		<slot />
	</div>
</div>
