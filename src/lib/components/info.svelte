<script>
import Tooltip from '$components/tooltip.svelte';

let element;
let open = false;
</script>

<div bind:this={element}>
	<i
		class="fa-solid fa-circle-info fa-lg fa-fw cursor-pointer text-[#03b2dd]"
		on:click={() => (open = !open)}
		on:keyup={() => (open = !open)} />
</div>
<Tooltip {element} bind:open>
	<div class="leading-tight">
		<slot />
	</div>
</Tooltip>
