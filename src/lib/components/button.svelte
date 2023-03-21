<script>
export let type = 'primary'; //primary, secondary
export let disabled = false;
export let loading = false;
export let rounded = false;
export let href = undefined;
export let external = false;
export let confirm = undefined;
export { _class as class };

import { createEventDispatcher } from 'svelte';

import Modal from '$components/modal.svelte';

const dispatch = createEventDispatcher();

let confirmOpen = false;
let _class = '';

function handleClick(evt) {
	if (loading || href) {
		return;
	}
	evt.preventDefault();
	if (disabled) {
		dispatch('disabledClick');
		return;
	}
	if (confirm && !confirmOpen) {
		confirmOpen = true;
		return;
	}
	confirmOpen = false;
	dispatch('click');
}
</script>

<style>
a:hover {
	text-decoration: none;
}
#container {
	display: inline-grid;
	place-items: center;
}
.container-defaults {
	border-radius: var(--colibri-button-border-radius);
	padding: var(--colibri-button-vertical-padding) var(--colibri-button-horizontal-padding);
	cursor: pointer;
}
.primary {
	color: var(--colibri-button-primary-font-color);
	background: var(--colibri-button-primary-color);
}
.secondary {
	color: var(--colibri-button-secondary-font-color);
	background: var(--colibri-button-secondary-color);
}
.primary:not(.disabled):hover {
	background: var(--colibri-button-primary-color-light);
}
.primary:not(.disabled):active {
	background: var(--colibri-button-primary-color-dark);
}
.secondary {
	background: var(--colibri-button-secondary-color);
}
.secondary:not(.disabled):hover {
	background: var(--colibri-button-secondary-color-light);
}
.secondary:not(.disabled):active {
	background: var(--colibri-button-secondary-color-dark);
}
.rounded {
	border-radius: 9999px;
}
.disabled {
	opacity: var(--colibri-button-disabled-opacity);
	filter: var(--colibri-button-disabled-filter);
	cursor: not-allowed;
}
</style>

<a
	{href}
	target={external ? '_blank' : '_self'}
	rel={external ? 'noopener noreferrer' : ''}
	on:click={handleClick}
	on:keyup={handleClick}>
	<div
		id="container"
		class:primary={type === 'primary'}
		class:secondary={type === 'secondary'}
		class:rounded
		class:disabled
		class="container-defaults {_class}">
		<div class="cell-1" class:colibri-hidden={loading}>
			<slot />
		</div>
		<div class="colibri-spinner cell-1" class:colibri-hidden={!loading} />
	</div>
</a>
{#if confirm}
	<Modal title="Confirm action" slim={true} bind:open={confirmOpen}>
		<div class="min-w-[350px] text-center">
			<div class="mb-2">{confirm}</div>
			<svelte:self on:click={handleClick}>Confirm</svelte:self>
		</div>
	</Modal>
{/if}
