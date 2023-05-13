<script>
export let component;
export let sections;

import { getContext } from 'svelte';

import utils from '$utils/general.js';

import Input from '$components/input.svelte';

const { userThemeObject } = getContext('theme');

const data = {};

for (let section of sections) {
	const { class: _class, ...inlines } =
		$userThemeObject?.[component]?.[section] ?? {};
	data[section] = {
		class: _class,
		inlines: Object.entries(inlines)
	};
}

$: mergeProperties(data);

function addRule(section) {
	return () => {
		const rules = data[section].inlines;
		data[section].inlines = [...rules, []];
	};
}

function removeRule(section, i) {
	return () => {
		const rules = data[section].inlines;
		data[section].inlines = [...rules.slice(0, i), ...rules.slice(i + 1)];
	};
}

function hasInlines(section) {
	return data[section].inlines.some((r) => r?.[0] && r?.[1]);
}

function getInlines(section) {
	return data[section].inlines.filter((r) => r?.[0] && r?.[1]);
}

function mergeProperties() {
	for (let section of sections) {
		$userThemeObject[component] = $userThemeObject[component] ?? {};
		$userThemeObject[component][section] = {};
		if (!data[section].class && !hasInlines(section)) {
			continue;
		}
		if (hasInlines(section)) {
			$userThemeObject[component][section] = Object.fromEntries(
				getInlines(section)
			);
		}
		if (data[section].class) {
			$userThemeObject[component][section].class = data[section].class;
		}
	}
	$userThemeObject = utils.clean($userThemeObject);
}
</script>

{#each sections as section}
	<div class="mt-3 text-lg first:mt-0">{section}</div>
	<div class="ml-4">
		<div class="mb-2 flex items-center gap-2">
			<div class="font-medium">class:</div>
			<Input
				type="text"
				placeholder="Classes"
				bind:value={data[section].class} />
		</div>
		<div class="flex flex-wrap items-center gap-2">
			<div class="font-medium">inline:</div>
			{#each data[section].inlines as rule, i}
				<div class="flex max-w-[300px] items-center gap-1">
					<Input type="text" placeholder="Property" bind:value={rule[0]} />
					<div>:</div>
					<Input type="text" placeholder="Value" bind:value={rule[1]} />
					<div
						class="mr-1 cursor-default text-[1.6rem] leading-[0.5] text-gray-500"
						on:click={removeRule(section, i)}>
						&times;
					</div>
					{#if i !== data[section].inlines.length - 1}
						<div class="mr-1 text-lg">,</div>
					{/if}
				</div>
			{/each}
			<i
				class="fa-solid fa-square-plus fa-xl text-gray-400 hover:text-gray-500"
				on:click={addRule(section)} />
		</div>
	</div>
{/each}
