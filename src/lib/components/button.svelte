<script>
export let type = 'primary'; //primary, secondary
export let disabled = false;
export let loading = false;
export let rounded = false;
export let href = undefined;
export let external = false;

import { createEventDispatcher } from 'svelte';

import Modal from '$components/modal.svelte';

const dispatch = createEventDispatcher();

let confirmOpen = false;

$: type = type ?? 'primary';

function handleClick(evt) {
	if (loading || href) {
		return;
	}
	evt.preventDefault();
	if (disabled) {
		dispatch('disabledClick');
		return;
	}
	if ($$slots.confirm && !confirmOpen) {
		confirmOpen = true;
		return;
	}
	confirmOpen = false;
	dispatch('click');
}
</script>

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
		class="container-defaults">
		<div class="cell-1" class:colibri-hidden={loading}>
			<slot />
		</div>
		<div class="colibri-spinner cell-1" class:colibri-hidden={!loading} />
	</div>
</a>
{#if $$slots.confirm}
	<Modal slim={true} bind:open={confirmOpen}>
		<svelte:fragment slot="title">Confirm action</svelte:fragment>
		<div id="confirm">
			<slot name="confirm" />
		</div>
		<svelte:fragment slot="actions">
			<svelte:self on:click={handleClick}>Confirm</svelte:self>
			<svelte:self type="secondary" on:click={() => (confirmOpen = false)}
				>Cancel</svelte:self>
		</svelte:fragment>
	</Modal>
{/if}

<style>
a:hover {
	text-decoration: none;
}
#container {
	display: inline-grid;
	place-items: center;
}
.container-defaults {
	border-radius: var(
		--colibri-button-border-radius,
		var(--colibri-border-radius)
	);
	padding: var(--colibri-button-vertical-padding)
		var(--colibri-button-horizontal-padding);
	cursor: pointer;
}
.primary {
	color: var(--colibri-button-primary-font-color);
	background: var(--colibri-button-primary-color, var(--colibri-primary-color));
}
.secondary {
	color: var(--colibri-button-secondary-font-color);
	background: var(
		--colibri-button-secondary-color,
		var(--colibri-secondary-color)
	);
}
.primary:not(.disabled):hover {
	background: var(
		--colibri-button-primary-color-light,
		var(--colibri-primary-color-light)
	);
}
.primary:not(.disabled):active {
	background: var(
		--colibri-button-primary-color-dark,
		var(--colibri-primary-color-dark)
	);
}
.secondary {
	background: var(
		--colibri-button-secondary-color,
		var(--colibri-secondary-color)
	);
}
.secondary:not(.disabled):hover {
	background: var(
		--colibri-button-secondary-color-light,
		var(--colibri-secondary-color-light)
	);
}
.secondary:not(.disabled):active {
	background: var(
		--colibri-button-secondary-color-dark,
		var(--colibri-secondary-color-dark)
	);
}
.rounded {
	border-radius: 9999px;
}
.disabled {
	opacity: var(--colibri-control-disabled-opacity);
	filter: var(--colibri-control-disabled-filter);
	cursor: not-allowed;
}
#confirm {
	min-width: 350px;
	text-align: center;
	font-size: 1.2rem;
}
</style>
