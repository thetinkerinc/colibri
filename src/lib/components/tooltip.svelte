<script>
export let open;
export let elem;

import { fade } from 'svelte/transition';

import Anchored from '$components/_anchored.svelte';

function handleClick(evt) {
	if (open && elem !== evt.target && !isParentOf(elem, evt.target)) {
		open = false;
	}
}

function isParentOf(parent, child) {
	if (parent === window || parent === document) {
		return false;
	}
	let test = child.parentElement;
	while (test !== null) {
		if (test === parent) {
			return true;
		}
		test = test.parentElement;
	}
	return false;
}
</script>

<svelte:window on:click={handleClick} />
<Anchored anchor={elem} position="top" bind:open>
	<div
		class="max-w-[400px] rounded bg-blue-400 py-1 px-3 text-white"
		transition:fade={{ duration: 200 }}>
		<slot />
	</div>
	<div
		slot="decoration"
		class="border-8 border-transparent border-t-blue-400"
		transition:fade={{ duration: 200 }} />
</Anchored>
