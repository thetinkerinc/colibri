<script>
export let open;
export let element;
export let style;

import { fade } from 'svelte/transition';

import styles from '$utils/styles.js';
import dom from '$utils/dom.js';

import Anchored from '$components/_anchored.svelte';

const transition = { duration: 200 };

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
	<div
		class="colibri-tooltip-content {styles.class(style?.body)}"
		style="{styles.variables('tooltip', style)}; {styles.inline(style?.body)}"
		transition:fade={transition}>
		<slot />
	</div>
	<div
		slot="decoration"
		class="colibri-tooltip-arrow {styles.class(style?.arrow)}"
		transition:fade={transition} />
</Anchored>
