<script>
export let value = undefined;
export let type;
export let integer = false;
export let min = undefined;
export let max = undefined;
export let label = '';
export let hint = '';
export let required = false;
export let disabled = false;
export let disabledHint = '';
export let autofocus = false;
export let expand = false;

import BaseInput from '$components/_input.svelte';
import TextArea from '$components/_text-area.svelte';

const isBaseType = ['text', 'email', 'password', 'number'].includes(type);
</script>

{#if isBaseType}
	<BaseInput
		{type}
		{label}
		{hint}
		{integer}
		{min}
		{max}
		{required}
		{autofocus}
		{disabled}
		{disabledHint}
		bind:value
		on:enter
		on:change
		on:focus
		on:blur>
		<svelte:fragment slot="before">
			<slot name="before" />
		</svelte:fragment>
		<svelte:fragment slot="after">
			<slot name="after" />
		</svelte:fragment>
	</BaseInput>
{:else if type === 'textarea'}
	<TextArea {label} {hint} {required} {expand} bind:value />
{/if}
