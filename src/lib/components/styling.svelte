<script>
export let component;
export let sections;
export let styling;

import { fade } from 'svelte/transition';

import CssProperties from '$components/css-properties.svelte';
import CssVariables from '$components/css-variables.svelte';

let mode = 'properties';

let properties;
let variables;

$: styling = {
	...properties,
	variables
};

const transitions = {
	in: {
		duration: 200,
		delay: 200
	},
	out: {
		duration: 200
	}
};

function setMode(m) {
	return () => {
		mode = m;
	};
}
</script>

<div class="mb-4 flex cursor-default gap-3 text-xl">
	<div class:active={mode === 'properties'} on:click={setMode('properties')}>
		Properties
	</div>
	<div class:active={mode === 'variables'} on:click={setMode('variables')}>
		Variables
	</div>
</div>
<div class="grid">
	{#if mode === 'properties'}
		<div class="cell-1" in:fade={transitions.in} out:fade={transitions.out}>
			<CssProperties {sections} bind:properties />
		</div>
	{:else if mode === 'variables'}
		<div class="cell-1" in:fade={transitions.in} out:fade={transitions.out}>
			<CssVariables {component} bind:variables />
		</div>
	{/if}
</div>

<style>
.active {
	@apply border-b-[3px] border-b-blue-500;
}
</style>
