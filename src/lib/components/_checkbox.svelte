<script>
export let checked = undefined;
export let group = undefined;
export let allowMultiple = false;
export let value = undefined;
export let disabled = false;
export let clearable = false;

let loaded = false;

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

<div id="container" on:click={handleClick} on:keyup={handleClick}>
	<div id="box">
		{#if isChecked}
			<div id="check" />
		{/if}
	</div>
	<div>
		<slot />
	</div>
</div>

<style>
#container {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
}
#box {
	display: inline-grid;
	width: var(--colibri-checkbox-size);
	height: var(--colibri-checkbox-size);
	place-items: center;
	border-radius: var(
		--colibri-checkbox-border-radius,
		var(--colibri-border-radius-sm)
	);
	border: var(--colibri-checkbox-border, var(--colibri-border));
	background: var(
		--colibri-checkbox-background-color,
		var(--colibri-background-color)
	);
}
#check {
	width: var(--colibri-checkbox-check-size);
	height: var(--colibri-checkbox-check-size);
	border-radius: var(
		--colibri-checkbox-check-border-radius,
		var(--colibri-border-radius-sm)
	);
	background: var(--colibri-checkbox-check-color, var(--colibri-primary-color));
}
</style>
