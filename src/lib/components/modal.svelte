<script>
export let open = false;
export let title = '';
export let slim = false;
export let fit = false;

import { onDestroy, createEventDispatcher } from 'svelte';
import { fade, fly } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';
import { BROWSER } from 'esm-env';

import Portal from '$components/portal.svelte';

onDestroy(() => {
	open = false;
});

const dispatch = createEventDispatcher();

let clicked = false;
let scrolled = false;
let canClose = true;
let wasOpen = true;

$: handleOpen(open);

function handleOpen() {
	if (!BROWSER) {
		return;
	}
	if (open) {
		wasOpen = document?.body?.classList?.contains('modal-open');
		if (!wasOpen) {
			document?.body?.classList?.add('modal-open');
		}
	} else {
		if (!wasOpen) {
			document?.body?.classList?.remove('modal-open');
		}
		dispatch('close');
	}
}

function close(force = false) {
	if (force || canClose) {
		open = false;
	}
}

function handleEscape(e) {
	if (open && e.key === 'Escape') {
		close();
	}
}

function handleMouseDown() {
	if (open) {
		clicked = true;
	}
}

function handleMouseUp() {
	canClose = !scrolled;
	clicked = false;
	scrolled = false;
	close();
}

function handleScroll() {
	if (clicked) {
		scrolled = true;
	}
}
</script>

<style>
:global(.modal-open) {
	overflow: hidden;
}
</style>

<svelte:window on:keyup={handleEscape} on:mousedown={handleMouseDown} />
{#if open}
	<Portal>
		<div
			class="fixed top-0 left-0 z-10 grid
             h-full w-full overflow-y-auto bg-black/40 pb-[100px]"
			on:mouseup|self={handleMouseUp}
			on:scroll={handleScroll}
			transition:fade={{ duration: 200 }}>
			<div
				class="mt-10 w-[80%] max-w-[800px]
               self-start justify-self-center rounded-lg bg-white
               px-3 pb-4 shadow-lg lg:mt-20
               {slim && 'w-[500px] max-w-[90%]'}
               {fit && 'w-[unset]'}"
				class:slim
				class:fit
				on:mousedown|stopPropagation={() => (canClose = false)}
				transition:fly={{ y: 500, easing: cubicOut, duration: 400 }}>
				<div class="mb-3 flex items-center">
					<div class="flex-auto text-xl">{title}</div>
					<div
						class="cursor-pointer text-[40px]"
						on:click={() => close(true)}
						on:keyup={() => close(true)}>
						&times;
					</div>
				</div>
				<div>
					<slot />
				</div>
				{#if $$slots.actions}
					<div class="e2e-slot-actions mt-2 flex justify-end gap-2">
						<slot name="actions" />
					</div>
				{/if}
			</div>
		</div>
	</Portal>
{/if}
