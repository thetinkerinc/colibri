<script>
import Tooltip from '$components/tooltip.svelte';

let elem;
let open = false;
</script>

<div bind:this={elem}>
	<i
		class="fa-solid fa-circle-info fa-lg fa-fw cursor-pointer text-blue-500"
		on:click|stopPropagation={() => (open = !open)}
		on:keyup|stopPropagation={() => (open = !open)} />
</div>
<Tooltip {elem} bind:open>
	<div class="leading-tight">
		<slot />
	</div>
</Tooltip>
