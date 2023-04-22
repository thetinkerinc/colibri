<script>
export let component;
export let sections;

import { getContext } from 'svelte';
import { fade } from 'svelte/transition';

import utils from '$utils/general.js';

import CssProperties from '$components/css-properties.svelte';
import CssVariables from '$components/css-variables.svelte';
import Highlighter from '$components/highlighter.svelte';

let mode = 'properties';

let properties = {};
let variables;

const style = getContext('style');

$: $style = makeStyle(properties, variables);
$: code = makeCode($style);

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

function makeStyle() {
	return utils.clean({
		...properties,
		variables
	});
}

function makeCode() {
	return `//style.js\n` + `export default style = ${JSON.stringify($style)};`;
}
</script>

<div class="grid grid-cols-2 gap-4">
	<div>
		<div class="mb-4 flex cursor-default gap-3 text-xl">
			<div
				class:active={mode === 'properties'}
				on:click={setMode('properties')}>
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
	</div>
	<div class="mt-2 self-start overflow-hidden rounded">
		<Highlighter language="js" strict={true} {code} />
	</div>
</div>

<style>
.active {
	@apply border-b-[3px] border-b-blue-500;
}
</style>
