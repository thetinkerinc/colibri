<script>
export let title;
export let type = undefined;
export let value = undefined;
export let description = undefined;
export let example = undefined;
export let warning = undefined;
export let values = [];
export let clearable = true;
export let component = undefined;
export let componentName = undefined;
export let content = '';

import dayjs from 'dayjs';
import { PlusSquare, X, Clipboard } from 'lucide-svelte';

import Radio from '$components/radio.svelte';
import Input from '$components/input.svelte';
import Toggle from '$components/toggle.svelte';
import DatePicker from '$components/date-picker.svelte';
import Info from '$components/info.svelte';
import Warning from '$components/warning.svelte';
import Html from '$components/html.svelte';

const isRadio = type === 'string' && values.length > 0;
const start = dayjs().subtract(5, 'years').toDate();
const end = dayjs().add(5, 'years').toDate();

let dates = [];
let componentCount = 0;

$: setDatesValue(dates);
$: setComponentValue(componentCount);

function addDate() {
	dates = [...dates, new Date()];
}

function removeDate(i) {
	return () => {
		dates = [...dates.slice(0, i), ...dates.slice(i + 1)];
	};
}

function setDatesValue() {
	if (type !== 'dates') {
		return;
	}
	value = dates;
}

function setComponentValue() {
	if (type !== 'component' || !component.name) {
		return;
	}
	if (componentCount === 0) {
		value = undefined;
	} else {
		value = {
			component,
			componentName,
			content,
			count: componentCount
		};
	}
}
</script>

<div class="mb-2 flex flex-wrap items-center gap-2 last:mb-0">
	<div class="mr-2 font-bold">{title}:</div>
	{#if isRadio}
		{#each values as opt}
			<Radio name={title} value={opt} {clearable} bind:group={value}
				>{opt}</Radio>
		{/each}
	{:else if type === 'string'}
		<div class="flex-auto">
			<Input type="text" bind:value />
		</div>
	{:else if type === 'number'}
		<div class="flex-auto">
			<Input type="number" bind:value />
		</div>
	{:else if type === 'textarea'}
		<div class="flex-auto">
			<Input type="textarea" bind:value />
		</div>
	{:else if type === 'boolean'}
		<Toggle bind:checked={value} />
	{:else if type === 'date'}
		<DatePicker clearable {start} {end} bind:selected={value} />
	{:else if type === 'dates'}
		{#each dates as date, i}
			<div class="flex items-center gap-1">
				<DatePicker clearable {start} {end} bind:selected={date} />
				<button
					class="cursor-default text-gray-400 hover:text-gray-500"
					on:click={removeDate(i)}>
					<X />
				</button>
			</div>
		{/each}
		<button class="text-gray-400 hover:text-gray-500" on:click={addDate}>
			<PlusSquare />
		</button>
	{:else if type === 'component'}
		<!-- eslint-disable-next-line no-unused-vars -->
		{#each { length: componentCount } as _, i}
			<div
				class="flex items-center gap-2 rounded border border-gray-200 px-2 py-1">
				<div>{content} {i + 1}</div>
				<button
					class="text-gray-400 hover:text-gray-500"
					on:click={() => (componentCount -= 1)}>
					<X />
				</button>
			</div>
		{/each}
		<button
			class="text-gray-400 hover:text-gray-500"
			title="Add {title}"
			on:click={() => (componentCount += 1)}>
			<PlusSquare />
		</button>
	{/if}
	<slot />
	{#if example}
		<button
			class="text-[#03b2dd]"
			title="Show example"
			on:click={() => (value = example)}>
			<Clipboard />
		</button>
	{/if}
	{#if description}
		<Info><Html html={description} /></Info>
	{/if}
	{#if warning}
		<Warning><Html html={warning} /></Warning>
	{/if}
</div>
