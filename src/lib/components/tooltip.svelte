<script>
export let open;
export let element;
export let position = 'top';
export let style = undefined;

import { fade } from 'svelte/transition';

import theme from '$utils/theme.js';

import Anchored from '$components/_anchored.svelte';

const transition = { duration: 200 };

$: position = position ?? 'top';

$: userStyles = theme.makeUserStyles('tooltip', ['body', 'arrow'], style);
</script>

<Anchored anchor={element} {position} role="tooltip" bind:open>
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
		transition:fade|global={transition} />
</Anchored>
