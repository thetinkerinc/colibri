<script>
export let checked = undefined;
export let group = undefined;
export let multiple = false;
export let value = undefined;
export let disabled = false;

if (multiple) {
	group = group ?? [];
}

$: isChecked = _isChecked(checked, group);

function handleClick() {
	if (disabled) {
		return;
	}
	if (value != undefined) {
		if (multiple) {
			const idx = group.indexOf(value);
			if (idx < 0) {
				group = [...group, value];
			} else {
				group = [...group.slice(0, idx), ...group.slice(idx + 1)];
			}
		} else {
			group = value;
		}
	} else {
		checked = !checked;
	}
}

function _isChecked() {
	if (value != undefined) {
		if (multiple) {
			return group.includes(value);
		}
		return group === value;
	}
	return checked;
}
</script>

<div
	class="flex cursor-pointer items-center gap-2"
	on:click={handleClick}
	on:keyup={handleClick}>
	<div
		class="border-1 inline-grid h-[18px]
                w-[18px] min-w-[18px] place-items-center rounded-sm
                border border-gray-200 border-gray-400 bg-white shadow">
		{#if isChecked}
			<div class="h-[8px] w-[8px] rounded-sm bg-blue-500" />
		{/if}
	</div>
	<div>
		<slot />
	</div>
</div>
