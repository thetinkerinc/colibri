<script>
export let name;

import Info from '$components/info.svelte';

let elem;
</script>

<div class="flex items-center">
	<span class="code text-black" bind:this={elem}>
		on:{name}
	</span>
	<Info>
		<slot />
	</Info>
</div>
