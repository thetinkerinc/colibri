<script>
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
	<i
		class="fa-solid fa-circle-info fa-lg fa-fw cursor-pointer text-[#03b2dd]"
		on:click={() => (open = !open)}
		on:keyup={() => (open = !open)} />
</div>
<Tooltip {element} {style} bind:open>
	<div class="leading-tight">
		<slot />
	</div>
</Tooltip>
