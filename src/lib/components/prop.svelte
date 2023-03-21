<script>
export let name;
export let type;
export let code;

import { slide } from 'svelte/transition';

import PropDetails from '$components/prop-details.svelte';
import Example from '$components/example.svelte';

let showDetails = false;
</script>

<div
	class="cursor-default"
	on:click={() => (showDetails = !showDetails)}
	on:keyup={() => (showDetails = !showDetails)}>
	<span class="mr-2 font-mono text-lg">
		<span class="text-sky-600">{name}:</span>
		<span class="text-teal-600">{type}</span>
	</span>
	<div class="colibri-chevron text-gray-400 colibri-chevron-{showDetails ? 'up' : 'down'}" />
</div>
{#if showDetails}
	<div class="mb-4" transition:slide>
		<PropDetails>
			<svelte:fragment slot="name">{name}</svelte:fragment>
			<slot name="type" slot="type" />
			<slot name="fallback" slot="fallback" />
			<slot name="description" slot="description" />
		</PropDetails>
		<Example {code}>
			<slot name="example" />
		</Example>
	</div>
{/if}
