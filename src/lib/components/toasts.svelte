<script>
export let element;
export let style = undefined;

import { fly } from 'svelte/transition';
import { flip } from 'svelte/animate';
import { BROWSER } from 'esm-env';

import theme from '$utils/theme.js';
import { toasts } from '$utils/toasts.js';

import Toast from '$components/toast.svelte';

$: userStyles = theme.makeUserStyles('toast', ['container'], style);

function dismiss(id) {
	$toasts = $toasts.filter((t) => t.id !== id);
}
</script>

{#if BROWSER}
	<div
		class="colibri-toast-container {$userStyles.container.class}"
		style={$userStyles.container.inlines}
		bind:this={element}>
		{#each $toasts as toast (toast.id)}
			<div transition:fly={{ x: 500 }} animate:flip={{ duration: 100 }}>
				<Toast {toast} {style} on:click={() => dismiss(toast.id)} />
			</div>
		{/each}
	</div>
{/if}
