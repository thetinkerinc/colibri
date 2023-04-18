<script>
export let open;
export let element;

import { fade } from 'svelte/transition';

import dom from '$utils/dom.js';

import Anchored from '$components/_anchored.svelte';

function handleClick(evt) {
	if (
		open &&
		element !== evt.target &&
		!dom.isParentOf(element, evt.target, false)
	) {
		open = false;
	}
}
</script>

<svelte:window on:click={handleClick} />
<Anchored anchor={element} position="top" bind:open>
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
