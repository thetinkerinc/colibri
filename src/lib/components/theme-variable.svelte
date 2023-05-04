<script>
export let variable;

import dom from '$utils/dom.js';
import css from '$utils/css.js';
import utils from '$utils/general.js';
import { themeVariables } from '$utils/theme.js';

import Input from '$components/input.svelte';

const name = `--colibri-${utils.camel2kebab(variable)}`;
const fallback = css.getValue(name);
const isColor = dom.isColor(fallback);
</script>

<div class="flex items-center gap-2">
	<div class="font-medium">{variable}:</div>
	<Input
		type={isColor ? 'color' : 'text'}
		bind:value={$themeVariables[variable]}>
		<svelte:fragment slot="after">
			{#if $themeVariables[variable] !== fallback}
				<i
					class="fa-solid fa-rotate-left text-gray-400 hover:text-gray-500"
					on:click={() => ($themeVariables[variable] = fallback)} />
			{/if}
		</svelte:fragment>
	</Input>
</div>
