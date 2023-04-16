<script>
export let value = undefined;
export let type;
export let name = undefined;
export let placeholder = '';
export let integer = false;
export let min = undefined;
export let max = undefined;
export let autofocus = false;
export let expand = false;
export let disabled = false;

import BaseInput from '$components/_input.svelte';
import TextArea from '$components/_text-area.svelte';

$: isBaseType = ['text', 'email', 'password', 'number'].includes(type);
</script>

{#if isBaseType}
	<BaseInput
		{type}
		{name}
		{placeholder}
		{integer}
		{min}
		{max}
		{autofocus}
		{disabled}
		bind:value
		on:enter
		on:change
		on:focus
		on:blur>
		<slot name="before" slot="before" />
		<slot name="after" slot="after" />
	</BaseInput>
{:else if type === 'textarea'}
	<TextArea {name} {placeholder} {autofocus} {expand} {disabled} bind:value />
{/if}
