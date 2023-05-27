<script>
export let open;
export let anchor;

import { fade } from 'svelte/transition';

import Anchored from '$components/_anchored.svelte';
</script>

<Anchored {anchor} position="top" closeOnClick={true} bind:open>
	<div
		class="rounded border border-gray-400 bg-white px-3 py-1"
		transition:fade={{ duration: 200 }}>
		<slot />
	</div>
	<svelte:fragment slot="decoration">
		<div
			class="grid -translate-y-px items-start justify-items-center"
			transition:fade={{ duration: 200 }}>
			<div class="cell-1 border-[10px] border-transparent border-t-gray-400" />
			<div class="cell-1 border-[9px] border-transparent border-t-white" />
		</div>
	</svelte:fragment>
</Anchored>
