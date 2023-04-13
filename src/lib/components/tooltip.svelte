<script>
export let open;
export let elem;

import { fade } from 'svelte/transition';

import Anchored from '$components/_anchored.svelte';

function handleClick(evt) {
	if (open && elem !== evt.target && !isParentOf(elem, evt.target)) {
		open = false;
	}
}

function isParentOf(parent, child) {
	if (parent === window || parent === document) {
		return false;
	}
	let test = child.parentElement;
	while (test !== null) {
		if (test === parent) {
			return true;
		}
		test = test.parentElement;
	}
	return false;
}
</script>

<svelte:window on:click={handleClick} />
<Anchored anchor={elem} position="top" bind:open>
	<div id="tooltip" transition:fade={{ duration: 200 }}>
		<slot />
	</div>
	<div slot="decoration" id="arrow" transition:fade={{ duration: 200 }} />
</Anchored>

<style>
#tooltip {
	max-width: var(--colibri-tooltip-max-width);
	border-radius: var(
		--colibri-tooltip-border-radius,
		var(--colibri-border-radius)
	);
	background: var(
		--colibri-tooltip-background-color,
		var(--colibri-primary-color)
	);
	padding: var(--colibri-tooltip-padding);
	color: var(--colibri-tooltip-font-color);
}
#arrow {
	border: 8px solid transparent;
	border-top-color: var(
		--colibri-tooltip-background-color,
		var(--colibri-primary-color)
	);
}
</style>
