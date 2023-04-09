<script>
import Info from '$components/info.svelte';

let elem;
</script>

<div class="flex items-center">
	<span class="code" bind:this={elem}>
		on:<slot />
	</span>
	<Info>
		<slot name="description" />
	</Info>
</div>
