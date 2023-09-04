<script>
import { AlertTriangle } from 'lucide-svelte';

import Tooltip from '$components/tooltip.svelte';

let element;
let open = false;

const style = {
	variables: {
		backgroundColor: '#facc15'
	},
	body: {
		class: 'text-black'
	}
};
</script>

<div bind:this={element}>
	<button class="text-yellow-500" on:click={() => (open = !open)}>
		<AlertTriangle />
	</button>
</div>
<Tooltip {element} {style} bind:open>
	<div class="leading-tight">
		<slot />
	</div>
</Tooltip>
