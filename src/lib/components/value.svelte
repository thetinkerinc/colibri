<script>
export let title;
export let code = undefined;

import { slide } from 'svelte/transition';

import Example from '$components/example.svelte';

let open = false;
</script>

<div
	id={title}
	class="cursor-default rounded-lg border border-gray-200 p-4 shadow-lg first:mt-2"
	on:click={() => (open = !open)}
	on:keyup={() => (open = !open)}>
	<div class="grid grid-cols-[1fr_auto] gap-2">
		<div>
			<span class="text-xl">{title}</span>
			<span>-</span>
			<span class="text-lg text-gray-500">
				<slot />
			</span>
		</div>
		{#if $$slots.example}
			<div
				class="colibri-chevron mt-1 colibri-chevron-{open ? 'up' : 'down'}" />
		{/if}
	</div>
	{#if $$slots.example && open}
		<div
			class="mt-3"
			transition:slide
			on:click|stopPropagation
			on:keyup|stopPropagation>
			<Example {code}>
				<slot name="example" />
			</Example>
		</div>
	{/if}
</div>
