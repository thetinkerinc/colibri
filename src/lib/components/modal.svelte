<script>
export let open = false;
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
#background {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	display: grid;
	height: 100%;
	width: 100%;
	overflow-y: auto;
	background: var(--colibri-modal-overlay-color);
	padding-bottom: 100px;
}
#container {
	margin-top: var(--colibri-modal-margin-top);
	place-self: start center;
	border-radius: var(--colibri-modal-border-radius);
	background: var(--colibri-modal-background-color);
	padding: var(--colibri-modal-padding);
	box-shadow: var(--colibri-modal-shadow);
	width: var(--colibri-modal-width);
	max-width: var(--colibri-modal-max-width);
}
#container.slim {
	width: var(--colibri-modal-width-slim);
	max-width: var(--colibri-modal-max-width-slim);
}
#container.fit {
	width: unset;
	max-width: var(--colibri-modal-max-width-fit);
}
#title-container {
	display: flex;
	align-items: center;
	margin: 0.75rem 0;
}
#title {
	flex: 1 1 auto;
	font-size: var(--colibri-modal-font-size-title);
}
#close {
	cursor: pointer;
	font-size: 40px;
	line-height: 0.6;
}
#actions {
	display: flex;
	justify-content: flex-end;
	margin-top: 1rem;
	gap: 0.5rem;
}
@media (min-width: 1024px) {
	#container {
		margin-top: var(--colibri-modal-margin-top-large-screens);
	}
}
</style>

<svelte:window on:keyup={handleEscape} on:mousedown={handleMouseDown} />
{#if open}
	<Portal>
		<div
			id="background"
			on:mouseup|self={handleMouseUp}
			on:scroll={handleScroll}
			transition:fade={{ duration: 200 }}>
			<div
				id="container"
				class:slim
				class:fit
				on:mousedown|stopPropagation={() => (canClose = false)}
				transition:fly={{ y: 500, easing: cubicOut, duration: 400 }}>
				<div id="title-container">
					<div id="title">
						<slot name="title" />
					</div>
					<div on:click={() => close(true)} on:keyup={() => close(true)}>
						<slot name="close">
							<div id="close">&times;</div>
						</slot>
					</div>
				</div>
				<div>
					<slot />
				</div>
				{#if $$slots.actions}
					<div id="actions">
						<slot name="actions" />
					</div>
				{/if}
			</div>
		</div>
	</Portal>
{/if}
