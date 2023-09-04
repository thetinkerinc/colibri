<script>
export let variable;

import { getContext } from 'svelte';
import { RotateCcw } from 'lucide-svelte';

import dom from '$utils/dom.js';

import Input from '$components/input.svelte';

const { selectedThemeObject, userThemeObject } = getContext('theme');

const fallback = $selectedThemeObject.variables[variable];
const isColor = dom.isColor(fallback);
</script>

<div class="flex items-center gap-2">
	<div class="font-medium">{variable}:</div>
	<Input
		type={isColor ? 'color' : 'text'}
		bind:value={$userThemeObject.variables[variable]}>
		<svelte:fragment slot="after">
			{#if $userThemeObject.variables[variable] !== fallback}
				<button
					class="text-gray-400 hover:text-gray-500"
					on:click={() => ($userThemeObject.variables[variable] = fallback)}>
					<RotateCcw size={20} />
				</button>
			{/if}
		</svelte:fragment>
	</Input>
</div>
