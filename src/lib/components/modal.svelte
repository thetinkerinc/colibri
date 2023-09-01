<script>
export let open = false;
export let slim = false;
export let fit = false;
export let element = undefined;
export let style = undefined;

import { onDestroy, createEventDispatcher, tick } from 'svelte';
import { fade, fly } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';
import { X } from 'lucide-svelte';
import { BROWSER } from 'esm-env';

import dom from '$utils/dom.js';
import theme from '$utils/theme.js';

import Portal from '$components/portal.svelte';

onDestroy(() => {
	open = false;
});

const dispatch = createEventDispatcher();

let clicked = false;
let scrolled = false;
let canClose = true;
let wasOpen = true;

let focus={
	previous: undefined,
	children: undefined
};

$: userStyles = theme.makeUserStyles(
	'modal',
	['overlay', 'body', 'title', 'close'],
	style
);

$: handleOpen(open);

function handleOpen() {
	if (!BROWSER) {
		return;
	}
	if (open) {
		tick().then(()=>{
			focus.previous=document.activeElement;
			focus.children=dom.getFocusableElements(element);
			dom.focusNext(focus.children);
		});
		wasOpen = document?.body?.classList?.contains('modal-open');
		if (!wasOpen) {
			document?.body?.classList?.add('modal-open');
			document?.body?.setAttribute('aria-hidden', true);
		}
		dispatch('open');
	} else {
		focus.previous?.focus();
		focus={};
		if (!wasOpen) {
			document?.body?.classList?.remove('modal-open');
			document?.body?.removeAttribute('aria-hidden');
		}
		dispatch('close');
	}
}

function close(force = false) {
	if (force || canClose) {
		open = false;
	}
}

function handleKeydown(evt) {
	if (!open){
		return;
	}
	if (evt.key === 'Escape') {
		close();
		return;
	}
	if (evt.key==='Tab'){
		evt.preventDefault();
		evt.stopPropagation();
		dom.focusNext(focus.children, !evt.shiftKey);
		return;
	}
}

function handleMouseDown() {
	if (open) {
		clicked = true;
	}
}

function handleMouseUp(evt) {
	if (element?.contains(evt.target)){
		evt.stopPropagation();
		return;
	}
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

<svelte:window on:keydown={handleKeydown}
			   on:mousedown={handleMouseDown}
			   on:mouseup={handleMouseUp} />
{#if open}
	<Portal>
		<div
			class="colibri-modal-overlay {$userStyles.overlay.class}"
			style={$userStyles.overlay.inlines}
			aria-hidden={false}
			aria-modal={true}
			on:scroll={handleScroll}
			transition:fade={{ duration: 200 }}>
			<div
				class="colibri-modal-body {$userStyles.body.class}"
				class:slim
				class:fit
				style={$userStyles.body.inlines}
				role="dialog"
				aria-labelledby="modal-title"
				aria-describedby="modal-content"
				bind:this={element}
				transition:fly={{ y: 500, easing: cubicOut, duration: 400 }}>
				<div
					id="modal-title"
					class="colibri-modal-title-container {$userStyles.title.class}"
					style={$userStyles.title.inlines}>
					<div class="colibri-modal-title">
						<slot name="title" />
					</div>
					<button on:click={() => close(true)}>
						<slot name="close">
							<div
								class="colibri-modal-close {$userStyles.close.class}"
								style={$userStyles.close.inlines}>
								<X />
							</div>
						</slot>
					</button>
				</div>
				<div id="modal-content">
					<slot />
				</div>
				{#if $$slots.actions}
					<div class="colibri-modal-actions">
						<slot name="actions" />
					</div>
				{/if}
			</div>
		</div>
	</Portal>
{/if}

<style>
:global(.modal-open) {
	overflow: hidden;
}
</style>
