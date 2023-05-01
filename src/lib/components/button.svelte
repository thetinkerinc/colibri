<script>
export let type = 'primary'; //primary, secondary
export let disabled = false;
export let loading = false;
export let rounded = false;
export let href = undefined;
export let external = false;
export let element;
export let style = undefined;

import { createEventDispatcher } from 'svelte';

import theme from '$utils/theme.js';

import Modal from '$components/modal.svelte';

const dispatch = createEventDispatcher();

let confirmOpen = false;

$: userStyles = theme.makeUserStyles('button', ['body'], style);

$: type = type || 'primary';

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
	class="colibri-button-link"
	bind:this={element}
	on:click={handleClick}
	on:keyup={handleClick}>
	<div
		class="colibri-button-body {$userStyles.body.class}"
		class:primary={type === 'primary'}
		class:secondary={type === 'secondary'}
		class:rounded
		class:disabled
		style={$userStyles.body.inlines}>
		<div class="cell-1" class:colibri-hidden={loading}>
			<slot />
		</div>
		<div class="colibri-spinner cell-1" class:colibri-hidden={!loading} />
	</div>
</a>
{#if $$slots.confirm}
	<Modal slim={true} bind:open={confirmOpen}>
		<svelte:fragment slot="title">Confirm action</svelte:fragment>
		<div class="colibri-button-confirm">
			<slot name="confirm" />
		</div>
		<svelte:fragment slot="actions">
			<svelte:self on:click={handleClick}>Confirm</svelte:self>
			<svelte:self type="secondary" on:click={() => (confirmOpen = false)}
				>Cancel</svelte:self>
		</svelte:fragment>
	</Modal>
{/if}
