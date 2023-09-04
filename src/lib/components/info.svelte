<script>
import { Info } from 'lucide-svelte';

import Tooltip from '$components/tooltip.svelte';

let element;
let open = false;

const style = {
	variables: {
		backgroundColor: 'var(--colibri-primary-color)'
	}
};
</script>

<div bind:this={element}>
	<button class="block text-[#03b2dd]" on:click={() => (open = !open)}>
		<Info />
	</button>
</div>
<Tooltip {element} {style} bind:open>
	<div class="leading-tight">
		<slot />
	</div>
</Tooltip>
