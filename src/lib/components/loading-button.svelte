<script>
export let action;
export let type = 'primary';
export let disabled = false;
export let rounded = false;
export let silent = false;
export let element = undefined;
export let style = undefined;

import { createEventDispatcher } from 'svelte';

import theme from '$utils/theme.js';

import Button from '$components/button.svelte';

const dispatch = createEventDispatcher();

let loading = false;

$: userStyles = theme.makeUserStyles('loading-button', ['button'], style);

async function handleClick() {
	loading = true;
	try {
		await action();
	} catch (err) {
		if (silent === true) {
			dispatch('error', err);
		} else {
			throw err;
		}
	} finally {
		loading = false;
	}
}
</script>

{#if $$slots.confirm}
	<Button
		{type}
		{disabled}
		{rounded}
		{loading}
		style={$userStyles.button}
		bind:element
		on:click={handleClick}
		on:disabledClick>
		<slot />
		<svelte:fragment slot="confirm">
			<slot name="confirm" />
		</svelte:fragment>
	</Button>
{:else}
	<Button
		{type}
		{disabled}
		{rounded}
		{loading}
		style={$userStyles.button}
		bind:element
		on:click={handleClick}
		on:disabledClick>
		<slot />
	</Button>
{/if}
