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
			class="grid fixed overflow-y-auto top-0 pb-[100px]
             left-0 w-full h-full bg-black/40 z-10"
			on:mouseup|self={handleMouseUp}
			on:scroll={handleScroll}
			transition:fade={{ duration: 200 }}>
			<div
				class="shadow-lg self-start justify-self-center
               w-[80%] max-w-[800px] bg-white rounded-lg
               mt-10 pb-4 px-3 lg:mt-20
               {slim && 'w-[500px] max-w-[90%]'}
               {fit && 'w-[unset]'}"
				class:slim
				class:fit
				on:mousedown|stopPropagation={() => (canClose = false)}
				transition:fly={{ y: 500, easing: cubicOut, duration: 400 }}>
				<div class="flex items-center mb-3">
					<div class="flex-auto text-xl">{title}</div>
					<div
						class="text-[40px] cursor-pointer"
						on:click={() => close(true)}
						on:keyup={() => close(true)}>
						&times;
					</div>
				</div>
				<div>
					<slot />
				</div>
				{#if $$slots.actions}
					<div class="e2e-slot-actions flex justify-end gap-2 mt-2">
						<slot name="actions" />
					</div>
				{/if}
			</div>
		</div>
	</Portal>
{/if}
