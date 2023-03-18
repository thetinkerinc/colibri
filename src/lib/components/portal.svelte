<script>
import { onMount, onDestroy } from 'svelte';
import { BROWSER } from 'esm-env';

onMount(() => {
	portal = document.createElement('div');
	document.body.appendChild(portal);
	portal.appendChild(elem);
});

onDestroy(() => {
	if (!BROWSER) {
		return;
	}
	document.body.removeChild(portal);
});

let elem;
let portal;
</script>

<div class="hidden">
	<div bind:this={elem}>
		<slot />
	</div>
</div>
