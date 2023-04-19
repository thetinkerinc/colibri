<script>
export let title;
export let type;
export let value;
export let description = undefined;
export let example = undefined;
export let values = [];
export let clearable = true;
export let component = undefined;
export let componentName = undefined;
export let content = '';

import dayjs from 'dayjs';

import Radio from '$components/radio.svelte';
import Input from '$components/input.svelte';
import Toggle from '$components/toggle.svelte';
import DatePicker from '$components/date-picker.svelte';
import Info from '$components/info.svelte';

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
			<Radio value={opt} {clearable} bind:group={value}>{opt}</Radio>
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
				<div
					class="mr-1 cursor-default text-[1.6rem] leading-[0.5] text-gray-500"
					on:click={removeDate(i)}
					on:keyup={removeDate(i)}>
					&times;
				</div>
			</div>
		{/each}
		<i
			class="fa-solid fa-square-plus fa-xl text-gray-400 hover:text-gray-500"
			title="Add {title}"
			on:click={addDate}
			on:keyup={addDate} />
	{:else if type === 'component'}
		{#each { length: componentCount } as _, i}
			<div
				class="flex items-center gap-2 rounded border border-gray-200 px-2 py-1">
				<div>{content} {i + 1}</div>
				<div
					class="cursor-default text-[1.6rem] leading-[0.5] text-gray-500"
					on:click={() => (componentCount -= 1)}
					on:keyup={() => (componentCount -= 1)}>
					&times;
				</div>
			</div>
		{/each}
		<i
			class="fa-solid fa-square-plus fa-xl text-gray-400 hover:text-gray-500"
			title="Add {title}"
			on:click={() => (componentCount += 1)}
			on:keyup={() => (componentCount += 1)} />
	{/if}
	<slot />
	{#if example}
		<i
			class="fa-regular fa-clipboard fa-lg cursor-pointer text-[#03b2dd]"
			title="Show example"
			on:click={() => (value = example)}
			on:keyup={() => (value = example)} />
	{/if}
	{#if description}
		<Info>{@html description}</Info>
	{/if}
</div>
