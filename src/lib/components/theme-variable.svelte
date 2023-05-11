<script>
export let variable;

import dom from '$utils/dom.js';
import css from '$utils/css.js';
import utils from '$utils/general.js';
import { selectedThemeObject, userThemeObject } from '$utils/theme.js';

import Input from '$components/input.svelte';

const name = `--colibri-${utils.camel2kebab(variable)}`;
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
				<i
					class="fa-solid fa-rotate-left text-gray-400 hover:text-gray-500"
					on:click={() => ($userThemeObject.variables[variable] = fallback)} />
			{/if}
		</svelte:fragment>
	</Input>
</div>
