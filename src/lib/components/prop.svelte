<script>
export let title;
export let type;
export let value;
export let description = undefined;
export let example = undefined;
export let values = [];
export let component = undefined;
export let componentName = undefined;
export let content = '';

import Info from '$components/info.svelte';
import Radio from '$components/radio.svelte';
import Input from '$components/input.svelte';
import Toggle from '$components/toggle.svelte';

const isRadio = type === 'string' && values.length > 0;

let count = 0;

$: setValue(count);

function setValue() {
	if (type !== 'component' || !component.name) {
		return;
	}
	if (count === 0) {
		value = undefined;
	} else {
		value = {
			component,
			componentName,
			content,
			count
		};
	}
}
</script>

<div class="mb-2 flex items-center gap-2 last:mb-0">
	<div class="mr-2 font-bold">{title}:</div>
	{#if isRadio}
		{#each values as opt}
			<Radio value={opt} clearable={true} bind:group={value}>{opt}</Radio>
		{/each}
	{:else if type === 'string'}
		<Input type="text" bind:value />
	{:else if type === 'number'}
		<Input type="number" bind:value />
	{:else if type === 'textarea'}
		<Input type="textarea" bind:value />
	{:else if type === 'boolean'}
		<Toggle bind:checked={value} />
	{:else if type === 'component'}
		{#each { length: count } as _, i}
			<div
				class="flex items-center gap-2 rounded border border-gray-200 px-2 py-1">
				<div>{content} {i + 1}</div>
				<div
					class="cursor-default text-[1.6rem] leading-[0.5] text-gray-500"
					on:click={() => (count -= 1)}
					on:keyup={() => (count -= 1)}>
					&times;
				</div>
			</div>
		{/each}
		<i
			class="fa-solid fa-square-plus fa-xl text-gray-400 hover:text-gray-500"
			title="Add {title}"
			on:click={() => (count += 1)}
			on:keyup={() => (count += 1)} />
	{/if}
	<slot />
	{#if example}
		<i
			class="fa-regular fa-clipboard fa-lg cursor-pointer text-blue-500"
			title="Show example"
			on:click={() => (value = example)}
			on:keyup={() => (value = example)} />
	{/if}
	{#if description}
		<Info>{@html description}</Info>
	{/if}
</div>
