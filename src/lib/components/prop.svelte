<script>
export let title;
export let type;
export let value;
export let values = [];
export let fallback = undefined;

import Checkbox from '$components/checkbox.svelte';
import Input from '$components/input.svelte';
import Toggle from '$components/toggle.svelte';

const isRadio = type === 'string' && values.length > 0;
</script>

<div class="mb-2 flex items-center gap-2 last:mb-0">
	<div class="mr-2 font-bold">{title}:</div>
	{#if isRadio}
		{#each values as opt}
			<Checkbox value={opt} bind:group={value}>{opt}</Checkbox>
		{/each}
	{:else if type === 'string'}
		<Input type="text" bind:value />
	{:else if type === 'boolean'}
		<Toggle bind:checked={value} />
	{/if}
</div>
