<script>
export let element;

import { fly } from 'svelte/transition';
import { flip } from 'svelte/animate';
import { BROWSER } from 'esm-env';

import { toasts } from '$utils/toasts.js';

import Toast from '$components/toast.svelte';

function dismiss(id) {
	$toasts = $toasts.filter((t) => t.id !== id);
}
</script>

{#if BROWSER}
	<div id="container" bind:this={element}>
		{#each $toasts as toast (toast.id)}
			<div transition:fly={{ x: 500 }} animate:flip={{ duration: 100 }}>
				<Toast {toast} on:click={() => dismiss(toast.id)} />
			</div>
		{/each}
	</div>
{/if}

<style>
#container {
	position: fixed;
	display: inline-block;
	width: 90%;
	top: 1rem;
	left: 50%;
	transform: translateX(-50%);
	z-index: 20;
}
@media (min-width: 1024px) {
	#container {
		right: 1rem;
		left: initial;
		width: 600px;
		transform: translateX(0);
	}
}
@media (min-width: 1280px) {
	#container {
		width: 800px;
	}
}
</style>
