<script>
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
	<i
		class="fa-solid fa-triangle-exclamation fa-lg fa-fw cursor-pointer text-yellow-500"
		on:click={() => (open = !open)}
		on:keyup={() => (open = !open)} />
</div>
<Tooltip {element} {style} bind:open>
	<div class="leading-tight">
		<slot />
	</div>
</Tooltip>
