<script>
export let open;
export let element;
export let style = undefined;

import { fade } from 'svelte/transition';

import dom from '$utils/dom.js';
import theme from '$utils/theme.js';

import Anchored from '$components/_anchored.svelte';

const transition = { duration: 200 };

$: userStyles = theme.makeUserStyles('tooltip', ['body', 'arrow'], style);

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
		class="colibri-tooltip-body {$userStyles.body.class}"
		style={$userStyles.body.inlines}
		transition:fade={transition}>
		<slot />
	</div>
	<div
		slot="decoration"
		class="colibri-tooltip-arrow {$userStyles.arrow.class}"
		style={$userStyles.arrow.inlines}
		transition:fade={transition} />
</Anchored>
